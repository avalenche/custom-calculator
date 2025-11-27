import './style.css';
import { Calculator } from './Calculator.js';
import * as Commands from './Commands.js';

// 1. Get all the elements
const displayElement = document.getElementById('display-text');
const buttons = document.querySelector('.buttons');

// 2. Create the Calculator (The "Receiver")
const calculator = new Calculator(displayElement);

// 3. Create a map of keys to commands
const commandMap = {
  add: () => new Commands.ChooseOperationCommand(calculator, 'add'),
  subtract: () => new Commands.ChooseOperationCommand(calculator, 'subtract'),
  multiply: () => new Commands.ChooseOperationCommand(calculator, 'multiply'),
  divide: () => new Commands.ChooseOperationCommand(calculator, 'divide'),
  power: () => new Commands.ChooseOperationCommand(calculator, 'power'),
  'y-root': () => new Commands.ChooseOperationCommand(calculator, 'y-root'),
  equals: () => new Commands.ComputeCommand(calculator),

  'clear-entry': () => new Commands.ClearEntryCommand(calculator),
  // Note: Your HTML doesn't have 'clear-all' (AC), but 'clear-entry' (CE)
  // You might want to add an 'AC' button

  square: () => new Commands.UnaryOperationCommand(calculator, 'square'),
  cube: () => new Commands.UnaryOperationCommand(calculator, 'cube'),
  'ten-power': () => new Commands.UnaryOperationCommand(calculator, 'tenPower'),
  inverse: () => new Commands.UnaryOperationCommand(calculator, 'inverse'),
  sqrt: () => new Commands.UnaryOperationCommand(calculator, 'sqrt'),
  cbrt: () => new Commands.UnaryOperationCommand(calculator, 'cbrt'),
  percent: () => new Commands.UnaryOperationCommand(calculator, 'percent'),
  'toggle-sign': () =>
    new Commands.UnaryOperationCommand(calculator, 'toggle-sign'),
  factorial: () => new Commands.UnaryOperationCommand(calculator, 'factorial'),

  'memory-clear': () => new Commands.MemoryClearCommand(calculator),
  'memory-recall': () => new Commands.MemoryRecallCommand(calculator),
  'memory-plus': () => new Commands.MemoryAddCommand(calculator),
  'memory-minus': () => new Commands.MemorySubtractCommand(calculator),
};

// 4. Add Event Listener (The "Invoker")
buttons.addEventListener('click', (event) => {
  if (!event.target.matches('button')) return; // Ignore clicks not on a button

  const key = event.target.dataset.key;

  // Handle numbers
  if (!isNaN(parseInt(key)) || key === 'decimal') {
    const digit = key === 'decimal' ? '.' : key;
    const command = new Commands.AddDigitCommand(calculator, digit);
    command.execute();
    return;
  }

  // Handle operations
  if (commandMap[key]) {
    const command = commandMap[key]();
    command.execute();
    return;
  }
});

// Initialize with a clear state
calculator.clearAll();
