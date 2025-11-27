class Command {
  constructor(calculator) {
    this.calculator = calculator;
  }
  execute() {
    throw new Error('Execute method must be implemented');
  }
}

// Command for adding a digit
export class AddDigitCommand extends Command {
  constructor(calculator, digit) {
    super(calculator);
    this.digit = digit;
  }
  execute() {
    this.calculator.addDigit(this.digit);
  }
}

// Command for binary operations (+, -, *, /)
export class ChooseOperationCommand extends Command {
  constructor(calculator, operation) {
    super(calculator);
    this.operation = operation;
  }

  execute() {
    this.calculator.chooseOperation(this.operation);
  }
}

// Command for unary operations (x², √x)
export class UnaryOperationCommand extends Command {
  constructor(calculator, operation) {
    super(calculator);
    this.operation = operation;
  }
  execute() {
    this.calculator.handleUnaryOperation(this.operation);
  }
}

// Command for equals
export class ComputeCommand extends Command {
  execute() {
    this.calculator.compute();
  }
}

// Command for 'AC'
export class ClearAllCommand extends Command {
  execute() {
    this.calculator.clearAll();
  }
}

// Command for 'CE'
export class ClearEntryCommand extends Command {
  execute() {
    this.calculator.clearEntry();
  }
}

// Memory Commands
export class MemoryClearCommand extends Command {
  execute() {
    this.calculator.memoryClear();
  }
}
export class MemoryRecallCommand extends Command {
  execute() {
    this.calculator.memoryRecall();
  }
}
export class MemoryAddCommand extends Command {
  execute() {
    this.calculator.memoryAdd();
  }
}
export class MemorySubtractCommand extends Command {
  execute() {
    this.calculator.memorySubtract();
  }
}
