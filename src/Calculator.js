// src/Calculator.js
import * as math from './math.js';

export class Calculator {
  constructor(displayElement) {
    this.displayElement = displayElement;
    this.clearAll();
  }

  // Resets the calculator
  clearAll() {
    this.currentOperand = '0';
    this.previousOperand = '';
    this.operation = undefined;
    this.memory = 0;
    this.updateDisplay();
  }

  // Clears the current entry
  clearEntry() {
    this.currentOperand = '0';
    this.updateDisplay();
  }

  // Adds a digit to the current operand
  addDigit(digit) {
    if (digit === '.' && this.currentOperand.includes('.')) return;
    if (this.currentOperand === '0' && digit !== '.') {
      this.currentOperand = digit;
    } else {
      this.currentOperand = this.currentOperand.toString() + digit.toString();
    }
    this.updateDisplay();
  }

  // Sets the operation
  chooseOperation(operation) {
    if (this.currentOperand === '') return;
    // If we already have a previous operand, compute first
    if (this.previousOperand !== '') {
      this.compute();
    }
    this.operation = operation;
    this.previousOperand = this.currentOperand;
    this.currentOperand = '';
  }

  // Performs the calculation
  compute() {
    let computation;
    const prev = parseFloat(this.previousOperand);
    const current = parseFloat(this.currentOperand);
    if (isNaN(prev) || isNaN(current)) return;

    try {
      switch (this.operation) {
        case 'add':
          computation = math.add(prev, current);
          break;
        case 'subtract':
          computation = math.subtract(prev, current);
          break;
        case 'multiply':
          computation = math.multiply(prev, current);
          break;
        case 'divide':
          computation = math.divide(prev, current);
          break;
        case 'power':
          computation = math.power(prev, current);
          break;
        case 'y-root':
          computation = math.nthRoot(prev, current);
          break;
        default:
          return;
      }
      if (!isFinite(computation) || isNaN(computation)) {
        throw new Error('Calculation overflow or invalid result');
      }

      this.currentOperand = computation.toString();
      this.operation = undefined;
      this.previousOperand = '';
      this.updateDisplay();
    } catch (error) {
      this.currentOperand = 'Error'; // Handle division by zero
      this.updateDisplay();
      this.currentOperand = '0'; // Reset after showing error
    }
  }

  // Handles single-number operations (unary)
  handleUnaryOperation(op) {
    const current = parseFloat(this.currentOperand);
    if (isNaN(current)) return;
    let result;
    try {
      switch (op) {
        case 'square':
          result = math.square(current);
          break;
        case 'cube':
          result = math.cube(current);
          break;
        case 'tenPower':
          result = math.tenPower(current);
          break;
        case 'inverse':
          result = math.inverse(current);
          break;
        case 'sqrt':
          result = math.sqrt(current);
          break;
        case 'cbrt':
          result = math.cbrt(current);
          break;
        case 'percent':
          result = math.percentage(current);
          break;
        case 'toggle-sign':
          result = math.changeSign(current);
          break;
        case 'factorial':
          result = math.factorial(current);
          break;
        default:
          return;
      }
      this.currentOperand = result.toString();
      this.updateDisplay();
    } catch (error) {
      this.currentOperand = 'Error';
      this.updateDisplay();
      this.currentOperand = '0';
    }
  }

  // --- Memory Functions ---
  memoryClear() {
    this.memory = 0;
  }
  memoryRecall() {
    if (!isFinite(this.memory) || isNaN(this.memory)) {
      this.currentOperand = 'Error';
    } else {
      this.currentOperand = this.memory.toString();
    }
    this.updateDisplay();
  }
  memoryAdd() {
    this.memory = math.add(this.memory, parseFloat(this.currentOperand) || 0);
  }
  memorySubtract() {
    this.memory = math.subtract(
      this.memory,
      parseFloat(this.currentOperand) || 0
    );
  }

  // Updates the display
  updateDisplay() {
    this.displayElement.innerText = this.currentOperand;
  }
}
