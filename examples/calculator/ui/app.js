class Calculator {
  constructor() {
    this.displayElem = document.getElementById('display');
    this.historyElem = document.getElementById('history');
    this.currentVal = '0';
    this.previousVal = null;
    this.operation = null;
    this.shouldResetScreen = false;

    this.bindEvents();
    this.bindRuntimeEvents();
  }

  bindEvents() {
    document.querySelectorAll('[data-num]').forEach(btn => {
      btn.addEventListener('click', () => this.appendNumber(btn.dataset.num));
    });

    document.querySelectorAll('[data-op]').forEach(btn => {
      btn.addEventListener('click', () => this.setOperation(btn.dataset.op));
    });

    document.querySelector('[data-action="clear"]').addEventListener('click', () => this.clear());
    document.querySelector('[data-action="negate"]').addEventListener('click', () => this.negate());
    document.querySelector('[data-action="percent"]').addEventListener('click', () => this.percent());
    document.querySelector('[data-action="calculate"]').addEventListener('click', () => this.calculate());

    // Keyboard support
    window.addEventListener('keydown', (e) => {
      if ((e.key >= '0' && e.key <= '9') || e.key === '.') {
        this.appendNumber(e.key);
      } else if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        this.setOperation(e.key);
      } else if (e.key === 'Enter' || e.key === '=') {
        this.calculate();
      } else if (e.key === 'Escape') {
        this.clear();
      } else if (e.key === 'Backspace') {
        this.backspace();
      }
    });
  }

  bindRuntimeEvents() {
    // Listen for window state changes dispatched by by-lite runtime
    window.addEventListener('by-state-changed', (e) => {
      const isMax = e.detail && e.detail.maximized;
      const maxIcon = document.querySelector('.icon-max');
      if (maxIcon) {
        if (isMax) {
          maxIcon.innerHTML = '<rect x="3" y="1" width="6" height="6" stroke="currentColor" stroke-width="1.2" fill="none" rx="1"/><rect x="1" y="3" width="6" height="6" stroke="currentColor" stroke-width="1.2" fill="none" rx="1"/>';
        } else {
          maxIcon.innerHTML = '<rect x="1.5" y="1.5" width="7" height="7" stroke="currentColor" stroke-width="1.2" fill="none" rx="1"/>';
        }
      }
    });
  }

  appendNumber(number) {
    if (this.currentVal === '0' && number !== '.') {
      this.currentVal = number;
    } else if (this.shouldResetScreen) {
      this.currentVal = number;
      this.shouldResetScreen = false;
    } else {
      if (number === '.' && this.currentVal.includes('.')) return;
      this.currentVal += number;
    }
    this.updateDisplay();
  }

  setOperation(op) {
    if (this.operation !== null) this.calculate();
    this.previousVal = this.currentVal;
    this.operation = op;
    this.shouldResetScreen = true;
    this.updateDisplay();
  }

  async calculate() {
    if (this.operation === null || this.shouldResetScreen) return;
    const prev = parseFloat(this.previousVal);
    const curr = parseFloat(this.currentVal);

    if (isNaN(prev) || isNaN(curr)) return;

    let opSymbol = this.operation;
    if (opSymbol === '*') opSymbol = '×';
    if (opSymbol === '/') opSymbol = '÷';
    this.historyElem.textContent = `${this.previousVal} ${opSymbol} ${this.currentVal} =`;

    // Try evaluating calculation via Rust IPC bridge if available
    if (window.by && typeof window.by.invoke === 'function') {
      try {
        const result = await window.by.invoke('compute', {
          a: prev,
          b: curr,
          op: this.operation
        });
        if (result && typeof result.value === 'number') {
          this.currentVal = String(result.value);
          this.operation = null;
          this.updateDisplay();
          return;
        }
      } catch (err) {
        console.warn('Rust IPC invoke fallback:', err);
      }
    }

    // Local calculation fallback
    let result = 0;
    switch (this.operation) {
      case '+': result = prev + curr; break;
      case '-': result = prev - curr; break;
      case '*': result = prev * curr; break;
      case '/':
        result = curr === 0 ? 'Error' : prev / curr;
        break;
      default: return;
    }

    this.currentVal = String(Math.round(result * 100000000) / 100000000);
    this.operation = null;
    this.updateDisplay();
  }

  clear() {
    this.currentVal = '0';
    this.previousVal = null;
    this.operation = null;
    this.historyElem.textContent = '';
    this.updateDisplay();
  }

  negate() {
    this.currentVal = String(-parseFloat(this.currentVal));
    this.updateDisplay();
  }

  percent() {
    this.currentVal = String(parseFloat(this.currentVal) / 100);
    this.updateDisplay();
  }

  backspace() {
    if (this.currentVal.length > 1) {
      this.currentVal = this.currentVal.slice(0, -1);
    } else {
      this.currentVal = '0';
    }
    this.updateDisplay();
  }

  updateDisplay() {
    this.displayElem.textContent = this.currentVal;
    if (this.operation !== null) {
      let opSymbol = this.operation;
      if (opSymbol === '*') opSymbol = '×';
      if (opSymbol === '/') opSymbol = '÷';
      this.historyElem.textContent = `${this.previousVal} ${opSymbol}`;
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  new Calculator();
});
