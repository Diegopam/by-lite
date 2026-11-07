//! Autoplay and AdBlock script injection for embedded media players.

pub const ADBLOCK_RUNTIME_SCRIPT: &str = r#"
(function() {
    'use strict';

    // 1. Desativar popups intrusivos e diálogos
    try {
        const fakeWindow = {
            closed: false,
            focus: function() {},
            blur: function() {},
            close: function() { this.closed = true; },
            postMessage: function() {},
            addEventListener: function() {},
            removeEventListener: function() {},
            location: {
                href: 'about:blank',
                assign: function() {},
                replace: function() {},
                reload: function() {}
            },
            document: {
                write: function() {},
                close: function() {},
                open: function() {}
            }
        };
        window.open = function(url) {
            console.log('[by-lite AdBlock] Blocked window.open popup to:', url);
            return fakeWindow;
        };
        window.alert = function() {};
        window.confirm = function() { return true; };
        window.prompt = function() { return null; };
    } catch(e) {}

    // 2. Prevenir abertura de popups por cliques em links externos tipo target="_blank"
    window.addEventListener('click', function(e) {
        const a = e.target && e.target.closest ? e.target.closest('a') : null;
        if (a) {
            const href = a.getAttribute('href') || '';
            const target = a.getAttribute('target') || '';
            if (target === '_blank' && href.startsWith('http') && !href.includes(location.hostname) && !href.includes('redecanais')) {
                e.preventDefault();
                e.stopPropagation();
                console.log('[by-lite AdBlock] Bloqueou clique externo em anúncio:', href);
                return false;
            }
        }
    }, true);

    // 3. CSS AdBlock para ocultar exclusivamente shields e overlays de anúncios
    // Nota: Mantém posters, capas e logos visíveis para a experiência correta do canal
    function injectAdblockCSS() {
        if (document.getElementById('by-lite-adblock-css')) return;
        const style = document.createElement('style');
        style.id = 'by-lite-adblock-css';
        style.textContent = `
            #rcEmbedCaptureShield,
            [data-rc-embed-capture],
            .rc-click-ad-display,
            #player > .rc-click-ad-display,
            .ima-ad-container,
            .vjs-ima3-ad-container,
            #ima-ad-container,
            .ad-container,
            .videojs-ima-ad-container,
            .logoLinkPlayer,
            .downloadButton,
            .vjs-chromecast-button,
            .vjs-wvc-button,
            /* Ocultar controles nativos do Video.js para dar lugar ao player custom da aplicacao */
            .vjs-control-bar,
            .video-js .vjs-control-bar,
            #RedeCanaisPlayer .vjs-control-bar,
            .vjs-play-control,
            .vjs-progress-control,
            .vjs-volume-panel,
            .vjs-fullscreen-control,
            .vjs-remaining-time,
            .vjs-duration,
            .vjs-playback-rate {
                display: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
                width: 0 !important;
                height: 0 !important;
                z-index: -9999 !important;
            }
            .vjs-has-started .vjs-poster,
            .video-js.vjs-has-started .vjs-poster {
                display: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
                pointer-events: none !important;
                z-index: -9999 !important;
            }
            video,
            .video-js video,
            .vjs-tech {
                display: block !important;
                visibility: visible !important;
                opacity: 1 !important;
                z-index: 1 !important;
            }
        `;
        const target = document.head || document.documentElement;
        if (target) {
            target.appendChild(style);
        }
    }

    if (document.head || document.documentElement) {
        injectAdblockCSS();
    } else {
        document.addEventListener('DOMContentLoaded', injectAdblockCSS);
    }

    // 4. Interceptar Video.js no DocumentStart e neutralizar o plugin Google IMA com stub ad-free
    function patchVideoJs(vjs) {
        if (!vjs || vjs.__no_ima_patched) return;
        vjs.__no_ima_patched = true;
        console.log('[by-lite AdBlock] Video.js detectado! Instalando interceptor livre de anúncios no plugin IMA...');

        const safeIma = {
            initializeAdDisplayContainer: function() {},
            requestAds: function() {},
            getAdsManager: function() { return null; },
            addEventListener: function() {},
            removeEventListener: function() {},
            startFromDoneSlot: function() {},
            reset: function() {},
            playAd: function() {}
        };

        const wrapPlugin = function(origFn) {
            return function(name, plugin) {
                if (name === 'ima') {
                    console.log('[by-lite AdBlock] Interceptou plugin("ima")! Substituindo por stub livre de anúncios!');
                    return origFn.call(vjs, 'ima', function(options) {
                        console.log('[by-lite AdBlock] Stub IMA sem anúncios ativado no player Video.js!');
                        this.ima = safeIma;
                        const self = this;
                        setTimeout(function() {
                            try {
                                if (self.trigger) {
                                    self.trigger('nopreroll');
                                    self.trigger('adsready');
                                }
                            } catch(e) {}
                        }, 50);
                    });
                }
                return origFn.apply(this, arguments);
            };
        };

        if (vjs.registerPlugin) vjs.registerPlugin = wrapPlugin(vjs.registerPlugin);
        if (vjs.plugin) vjs.plugin = wrapPlugin(vjs.plugin);
    }

    const vjsWatcher = setInterval(function() {
        if (window.videojs) {
            patchVideoJs(window.videojs);
        }
    }, 5);
})();
"#;

/// Autoplay limpo e inteligente — opera exclusivamente dentro dos players de vídeo,
/// aguarda 1.2s após o surgimento do botão com logo do canal e inicia a transmissão ao vivo
/// sem anúncios pré-roll e sem congelamentos.
pub const AUTOPLAY_RUNTIME_SCRIPT: &str = r#"
(function() {
    'use strict';

    // Se estiver na janela principal do app (file://), NÃO executa autoplay na casca da UI.
    if (window.location.protocol === 'file:') {
        return;
    }

    let splashFirstSeen = 0;
    let submitTriggered = false;
    let bigPlayFirstSeen = 0;
    let bigPlayClicked = false;
    let streamStarted = false;
    let nudgedKeyframe = false;
    let initialPlaybackStarted = false;
    let initialUnmuteDone = false;
    let userChangedAudio = false;
    let isUserPaused = false;
    let attempts = 0;

    function isAdVideo(v) {
        if (!v) return false;
        // O elemento principal de reprodução Video.js NUNCA é um anúncio!
        if (v.classList.contains('vjs-tech') || v.id === 'RedeCanaisPlayer_html5_api' || (v.closest && v.closest('#RedeCanaisPlayer'))) {
            if (v.closest && v.closest('.ima-ad-container, .vjs-ima3-ad-container, #ima-ad-container, .ad-container, .videojs-ima-ad-container')) {
                return true;
            }
            return false;
        }
        if (v.closest && v.closest('.ima-ad-container, .vjs-ima3-ad-container, #ima-ad-container, .ad-container, .videojs-ima-ad-container')) {
            return true;
        }
        const src = (v.currentSrc || v.src || '').toLowerCase();
        if (src.includes('doubleclick') || src.includes('imasdk') || src.includes('adservice') || src.includes('vpaid')) {
            return true;
        }
        return false;
    }

    function isStreamVideo(v) {
        if (!v) return false;
        if (isAdVideo(v)) return false;
        return true;
    }

    function unmuteAudio() {
        try {
            const vids = document.querySelectorAll('video');
            for (let i = 0; i < vids.length; i++) {
                const v = vids[i];
                if (isAdVideo(v)) {
                    v.muted = true;
                    v.volume = 0;
                    continue;
                }
                if (!initialUnmuteDone && !userChangedAudio) {
                    if (v.muted || v.volume === 0) {
                        v.muted = false;
                        v.defaultMuted = false;
                        v.volume = 1.0;
                        v.removeAttribute('muted');
                    }
                    if (!v.paused && v.currentTime > 0.1 && !v.muted && v.volume > 0) {
                        initialUnmuteDone = true;
                    }
                }
            }
        } catch(e) {}
        if (!initialUnmuteDone && !userChangedAudio) {
            try {
                if (window.videojs) {
                    const players = window.videojs.getAllPlayers ? window.videojs.getAllPlayers() : [];
                    for (let i = 0; i < players.length; i++) {
                        const p = players[i];
                        if (p) {
                            if (p.muted && p.muted()) p.muted(false);
                            if (p.volume && p.volume() === 0) p.volume(1.0);
                        }
                    }
                }
            } catch(e) {}
        }
    }

    function step() {
        attempts++;
        const now = Date.now();

        // 1. Aguarda 1.2s após o botão de splash com o logo do canal aparecer antes de clicar
        const btn = document.querySelector('button#submit, .captcha_button, #submit');
        if (btn && (btn.offsetWidth > 0 || btn.offsetHeight > 0)) {
            if (splashFirstSeen === 0) {
                splashFirstSeen = now;
                console.log('[by-lite Player] Botão do canal detectado com capa. Aguardando 1.2s para inicialização perfeita...');
            } else if (!submitTriggered && (now - splashFirstSeen >= 1200)) {
                submitTriggered = true;
                console.log('[by-lite Player] Disparando clique suave no botão inicial do canal (#submit)...');
                try {
                    btn.click();
                } catch(e) {}
            }
        }

        // 2. Silenciar e pausar qualquer anúncio
        const vids = document.querySelectorAll('video');
        for (let i = 0; i < vids.length; i++) {
            const v = vids[i];
            if (isAdVideo(v)) {
                v.muted = true;
                v.volume = 0;
                try {
                    v.pause();
                    v.style.display = 'none';
                } catch(e) {}
            } else if (isStreamVideo(v) && !isAdVideo(v)) {
                if (!v.paused && v.currentTime > 0) {
                    initialPlaybackStarted = true;
                    streamStarted = true;
                    unmuteAudio();
                } else if (v.paused && !initialPlaybackStarted && !isUserPaused) {
                    // Só força v.play() se o big play já foi acionado ou não existe na página
                    const hasBigPlay = document.querySelector('.vjs-big-play-button, .jw-display-icon-display, .plyr__control--overlaid');
                    if (!hasBigPlay || bigPlayClicked) {
                        v.muted = false;
                        v.play().then(function() {
                            initialPlaybackStarted = true;
                            streamStarted = true;
                            unmuteAudio();
                        }).catch(function() {
                            v.muted = true;
                            v.play().then(function() {
                                initialPlaybackStarted = true;
                                streamStarted = true;
                                setTimeout(unmuteAudio, 300);
                            }).catch(function() {});
                        });
                    }
                }
            }
        }

        // Se a reprodução já iniciou (tempo correndo > 0 e não pausado), encerra os cliques
        for (let i = 0; i < vids.length; i++) {
            const v = vids[i];
            if (!isAdVideo(v) && !v.paused && v.currentTime > 0.1) {
                initialPlaybackStarted = true;
                streamStarted = true;
            }
        }

        // Nudge de despertar de keyframe (Keyframe Wakeup Flush):
        // No WebKit/GStreamer em Linux, iniciar no exato segundo 0.0 às vezes deixa o decodificador de vídeo aguardando
        // um sync de quadro I enquanto o áudio já toca. Um micro-seek de 1.2s força o flush e renderização imediata do vídeo!
        if (streamStarted && !nudgedKeyframe && !isUserPaused) {
            triggerKeyframeWakeupFlush();
        }

        // Se o usuário pausou ou a reprodução já iniciou, NÃO executa mais cliques de play!
        if (initialPlaybackStarted || isUserPaused) {
            return;
        }

        // 3. Clicar no botão central de play (.vjs-big-play-button) com atraso suave para pré-carregar buffer de vídeo
        if (!bigPlayClicked && !initialPlaybackStarted && !isUserPaused) {
            const bigPlay = document.querySelector('.vjs-big-play-button, .jw-display-icon-display, .plyr__control--overlaid');
            if (bigPlay && (bigPlay.offsetWidth > 0 || bigPlay.offsetHeight > 0)) {
                if (bigPlayFirstSeen === 0) {
                    bigPlayFirstSeen = now;
                    console.log('[by-lite Player] Botão central de play detectado. Aguardando 2.0s para pré-bufferização limpa de vídeo...');
                } else if (now - bigPlayFirstSeen >= 2000) {
                    const curV = document.querySelector('video.vjs-tech, #RedeCanaisPlayer video, video');
                    bigPlayClicked = true;
                    if (!curV || curV.paused) {
                        console.log('[by-lite Player] Disparando clique suave no big play button com buffer carregado!');
                        try {
                            bigPlay.click();
                        } catch(e) {}
                    }
                }
            }
        }

        // 4. Iniciar reprodução via Video.js API e descartar ad break se disponível
        if (window.videojs) {
            try {
                const hasBigPlay = document.querySelector('.vjs-big-play-button, .jw-display-icon-display, .plyr__control--overlaid');
                // Se existe botão central de play, só inicia via Video.js API após o tempo de bufferização de 2.0s
                if (!hasBigPlay || bigPlayClicked) {
                    let players = [];
                    if (typeof window.videojs.getAllPlayers === 'function') {
                        players = window.videojs.getAllPlayers();
                    } else if (window.videojs.players) {
                        players = Object.values(window.videojs.players);
                    }

                    for (let i = 0; i < players.length; i++) {
                        const p = players[i];
                        if (p) {
                            if (!p.__ima_neutralized) {
                                p.__ima_neutralized = true;
                                try {
                                    if (p.trigger) {
                                        p.trigger('nopreroll');
                                        p.trigger('adsready');
                                    }
                                    if (p.ima) {
                                        p.ima.requestAds = function() {
                                            if (p.trigger) p.trigger('nopreroll');
                                        };
                                    }
                                } catch(e) {}
                            }
                            if (p.ima && typeof p.ima.getAdsManager === 'function') {
                                try {
                                    const mgr = p.ima.getAdsManager();
                                    if (mgr && mgr.discardAdBreak) {
                                        mgr.discardAdBreak();
                                    }
                                } catch(e) {}
                            }
                            if (p.paused && p.paused() && !initialPlaybackStarted && !isUserPaused) {
                                p.muted(false);
                                p.play().then(function() {
                                    initialPlaybackStarted = true;
                                    streamStarted = true;
                                    unmuteAudio();
                                }).catch(function() {
                                    p.muted(true);
                                    p.play().then(function() {
                                        initialPlaybackStarted = true;
                                        streamStarted = true;
                                        setTimeout(unmuteAudio, 250);
                                    }).catch(function() {});
                                });
                            } else if (!p.paused || !p.paused()) {
                                initialPlaybackStarted = true;
                                streamStarted = true;
                                unmuteAudio();
                            }
                        }
                    }
                }
            } catch(e) {}
        }
    }

    function triggerKeyframeWakeupFlush() {
        if (nudgedKeyframe || isUserPaused) return;
        nudgedKeyframe = true;
        setTimeout(function() {
            try {
                const poster = document.querySelector('.vjs-poster');
                if (poster) poster.style.setProperty('display', 'none', 'important');

                const v = document.querySelector('video.vjs-tech, #RedeCanaisPlayer video, video');
                if (v && !isAdVideo(v)) {
                    v.style.setProperty('opacity', '1', 'important');
                    v.style.setProperty('visibility', 'visible', 'important');
                    if (!v.paused) {
                        const dur = v.duration || 0;
                        const isVOD = !isFinite(dur) || dur === 0 || dur > 60;
                        if (isVOD && v.currentTime < 2.5) {
                            console.log('[by-lite Player] Nudge de despertar de keyframe (seek 1.2s) aplicado para sincronizar decodificador de vídeo!');
                            applySeek(1.2);
                        }
                    }
                }
            } catch(e) {}
        }, 600);
    }

    // Monitora evento nativo 'playing'
    document.addEventListener('playing', function(e) {
        if (e.target && e.target.tagName === 'VIDEO') {
            const v = e.target;
            if (!isAdVideo(v)) {
                initialPlaybackStarted = true;
                streamStarted = true;
                unmuteAudio();
                triggerKeyframeWakeupFlush();
            }
        }
    }, true);

    const timer = setInterval(function() {
        if (streamStarted && attempts >= 30) {
            clearInterval(timer);
            return;
        }
        step();
    }, 300);

    // Watchdog periódico para manter o áudio ativo durante a transmissão ao vivo
    setInterval(unmuteAudio, 1500);

    // ---------------------------------------------------------------------------
    // Bidirectional Media Control Bridge (para sincronizar o Player Custom da UI)
    // ---------------------------------------------------------------------------
    let hasTriggeredEnded = false;

    function applyVideoHdMode(mode) {
        const vids = document.querySelectorAll('video');
        for (let i = 0; i < vids.length; i++) {
            const v = vids[i];
            if (isAdVideo(v)) continue;
            if (mode === 'smart') {
                v.style.setProperty('filter', 'contrast(1.06) saturate(1.10) brightness(1.01)', 'important');
            } else if (mode === 'ultra') {
                v.style.setProperty('filter', 'contrast(1.12) saturate(1.18) brightness(1.02)', 'important');
            } else {
                v.style.removeProperty('filter');
            }
        }
    }

    function reportVideoState() {
        const v = document.querySelector('video.vjs-tech, #RedeCanaisPlayer video, video');
        if (!v || isAdVideo(v)) return;

        const currentTime = v.currentTime || 0;
        const duration = v.duration || 0;
        const paused = v.paused;
        const ended = v.ended;
        const volume = v.volume;
        const muted = v.muted;
        const playbackRate = v.playbackRate || 1;
        const buffering = (v.readyState < 3 && !paused && !ended && currentTime > 0);

        let buffered = 0;
        try {
            if (v.buffered && v.buffered.length > 0) {
                buffered = v.buffered.end(v.buffered.length - 1);
            }
        } catch(e) {}

        const payload = {
            type: 'PLAYER_STATUS',
            currentTime: currentTime,
            duration: duration,
            paused: paused,
            ended: ended,
            buffered: buffered,
            volume: volume,
            muted: muted,
            playbackRate: playbackRate,
            buffering: buffering
        };

        try {
            if (window.top && window.top !== window) {
                window.top.postMessage(payload, '*');
            }
        } catch(e) {}
        try {
            if (window.parent && window.parent !== window && window.parent !== window.top) {
                window.parent.postMessage(payload, '*');
            }
        } catch(e) {}

        // Auto-Next Trigger: Trigger ended when video ends or is within 2.5 seconds of finish
        if (duration > 120 && (ended || (currentTime >= duration - 2.5 && !paused))) {
            if (!hasTriggeredEnded) {
                hasTriggeredEnded = true;
                console.log('[by-lite Bridge] Episode finished! Triggering SERIES_EVENT:ended to top window...');
                try {
                    if (window.top) window.top.postMessage({ type: 'SERIES_EVENT:ended', currentTime: currentTime, duration: duration }, '*');
                } catch(e) {}
            }
        } else if (currentTime < duration - 10) {
            hasTriggeredEnded = false;
        }
    }

    // Report status every 250ms for smooth timeline and controls synchronization
    setInterval(reportVideoState, 250);

    // Forward mouse activity and double-click gestures inside the player iframe to the parent Toolkit OSD
    let lastGesturePost = 0;
    document.addEventListener('mousemove', function() {
        const now = Date.now();
        if (now - lastGesturePost > 220) {
            lastGesturePost = now;
            try {
                if (window.top && window.top !== window) {
                    window.top.postMessage({ type: 'PLAYER_GESTURE', action: 'mousemove' }, '*');
                }
            } catch(e) {}
        }
    }, { passive: true });

    document.addEventListener('dblclick', function(e) {
        try {
            e.preventDefault();
            e.stopPropagation();
            if (window.top && window.top !== window) {
                window.top.postMessage({ type: 'PLAYER_GESTURE', action: 'dblclick' }, '*');
            }
        } catch(err) {}
    }, true);

    // Video event listeners for instantaneous sync
    function attachVideoListeners() {
        const v = document.querySelector('video.vjs-tech, #RedeCanaisPlayer video, video');
        if (v && !v.__bridge_attached && !isAdVideo(v)) {
            v.__bridge_attached = true;
            v.addEventListener('timeupdate', reportVideoState);
            v.addEventListener('play', function() {
                if (!isUserPaused) {
                    initialPlaybackStarted = true;
                    unmuteAudio();
                }
                reportVideoState();
            });
            v.addEventListener('pause', function() {
                reportVideoState();
            });
            v.addEventListener('waiting', reportVideoState);
            v.addEventListener('playing', reportVideoState);
            v.addEventListener('seeked', reportVideoState);
            v.addEventListener('durationchange', reportVideoState);
            v.addEventListener('volumechange', reportVideoState);
            v.addEventListener('ratechange', reportVideoState);
            v.addEventListener('ended', function() {
                hasTriggeredEnded = true;
                try {
                    if (window.top) window.top.postMessage({ type: 'SERIES_EVENT:ended' }, '*');
                } catch(e) {}
            });
        }
    }
    setInterval(attachVideoListeners, 500);
    attachVideoListeners();

    function getVideoJsPlayer() {
        try {
            if (window.videojs && window.videojs.getAllPlayers) {
                const players = window.videojs.getAllPlayers();
                if (players && players.length > 0) return players[0];
            } else if (window.videojs && window.videojs.players) {
                const list = Object.values(window.videojs.players);
                if (list && list.length > 0) return list[0];
            }
        } catch(err) {}
        return null;
    }

    function applySeek(targetTime) {
        const v = document.querySelector('video.vjs-tech, #RedeCanaisPlayer video, video');
        if (!v || isAdVideo(v)) return;
        targetTime = Math.max(0, Math.min(v.duration || 999999, targetTime));
        const vjsP = getVideoJsPlayer();
        if (vjsP && typeof vjsP.currentTime === 'function') {
            try { vjsP.currentTime(targetTime); } catch(err) {}
        }
        try { v.currentTime = targetTime; } catch(err) {}
        setTimeout(reportVideoState, 80);
    }

    let lastPlayCmdTime = 0;

    function executePlay(v, vjsP) {
        isUserPaused = false;
        // Se o vídeo ainda está na fase inicial de carregamento (0s), deixa o step() concluir o pré-buffer e o Keyframe Wakeup Flush
        if ((v.currentTime || 0) < 0.05 && !streamStarted && !bigPlayClicked) {
            return;
        }
        initialPlaybackStarted = true;
        if (v.paused) {
            if (vjsP && typeof vjsP.play === 'function') {
                try {
                    const p = vjsP.play();
                    if (p && typeof p.catch === 'function') {
                        p.catch(function() { v.play().catch(function(){}); });
                    }
                } catch(err) {
                    v.play().catch(function(){});
                }
            } else {
                v.play().catch(function(){});
            }
        }
    }

    function executePause(v, vjsP) {
        isUserPaused = true;
        if (!v.paused) {
            if (vjsP && typeof vjsP.pause === 'function') {
                try {
                    vjsP.pause();
                } catch(err) {
                    v.pause();
                }
            } else {
                v.pause();
            }
        }
    }

    // Listen for commands from parent window
    window.addEventListener('message', function(e) {
        if (!e.data || typeof e.data !== 'object') return;
        const msg = e.data;

        if (msg.type === 'set_hd_mode') {
            applyVideoHdMode(msg.mode || 'off');
            return;
        }

        const v = document.querySelector('video.vjs-tech, #RedeCanaisPlayer video, video');
        if (!v || isAdVideo(v)) return;

        const vjsP = getVideoJsPlayer();
        const now = Date.now();

        switch (msg.type) {
            case 'toggle_play':
                if (now - lastPlayCmdTime < 150) return;
                lastPlayCmdTime = now;
                if (v.paused) {
                    executePlay(v, vjsP);
                } else {
                    executePause(v, vjsP);
                }
                setTimeout(reportVideoState, 60);
                break;

            case 'play':
                if (now - lastPlayCmdTime < 150) return;
                lastPlayCmdTime = now;
                executePlay(v, vjsP);
                setTimeout(reportVideoState, 60);
                break;

            case 'pause':
                if (now - lastPlayCmdTime < 150) return;
                lastPlayCmdTime = now;
                executePause(v, vjsP);
                setTimeout(reportVideoState, 60);
                break;

            case 'seek':
                if (typeof msg.time === 'number' && isFinite(msg.time)) {
                    applySeek(msg.time);
                }
                break;

            case 'seek_relative':
                if (typeof msg.seconds === 'number') {
                    const current = (v.currentTime || 0);
                    applySeek(current + msg.seconds);
                }
                break;

            case 'set_volume':
                if (typeof msg.volume === 'number' && isFinite(msg.volume)) {
                    userChangedAudio = true;
                    const vol = Math.max(0, Math.min(1, msg.volume));
                    v.volume = vol;
                    v.muted = (vol === 0);
                    if (vjsP) {
                        try {
                            if (typeof vjsP.volume === 'function') vjsP.volume(vol);
                            if (typeof vjsP.muted === 'function') vjsP.muted(vol === 0);
                        } catch(err) {}
                    }
                }
                reportVideoState();
                break;

            case 'toggle_mute': {
                userChangedAudio = true;
                const nextMuted = !v.muted;
                v.muted = nextMuted;
                if (!nextMuted && v.volume === 0) {
                    v.volume = 1.0;
                }
                if (vjsP) {
                    try {
                        if (typeof vjsP.muted === 'function') vjsP.muted(nextMuted);
                        if (!nextMuted && typeof vjsP.volume === 'function' && vjsP.volume() === 0) {
                            vjsP.volume(1.0);
                        }
                    } catch(err) {}
                }
                reportVideoState();
                break;
            }

            case 'set_muted': {
                userChangedAudio = true;
                const mutedVal = Boolean(msg.muted);
                v.muted = mutedVal;
                if (!mutedVal && v.volume === 0) {
                    v.volume = 1.0;
                }
                if (vjsP) {
                    try {
                        if (typeof vjsP.muted === 'function') vjsP.muted(mutedVal);
                    } catch(err) {}
                }
                reportVideoState();
                break;
            }

            case 'set_playback_rate':
                if (typeof msg.rate === 'number' && isFinite(msg.rate) && msg.rate > 0) {
                    v.playbackRate = msg.rate;
                    if (vjsP && typeof vjsP.playbackRate === 'function') {
                        try { vjsP.playbackRate(msg.rate); } catch(err) {}
                    }
                }
                reportVideoState();
                break;
        }
    });
})();
"#;
