const SAFE_EXPONENT_LIMIT = 1000000;
// --- Basic Operations ---
export const add = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;
export const divide = (a, b) => {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
};

// --- Functional Operations ---
export const percentage = (a) => a / 100;
export const changeSign = (a) => a * -1;
export const inverse = (a) => {
  if (a === 0) {
    throw new Error('Cannot divide by zero');
  }
  return 1 / a;
};

// --- Power Functions ---
// Helper for power
const powerHelper = (base, exp) => {
  if (exp === 0) return 1;
  if (exp > SAFE_EXPONENT_LIMIT) {
    if (base > 1) {
      // Any base greater than 1 raised to this huge power is Infinity.
      return Infinity;
    }
    if (base === 1) {
      return 1;
    }
    if (base === -1) {
      // -1^n is 1 or -1 depending on parity.
      return exp % 2 === 0 ? 1 : -1;
    }
    if (base >= 0 && base < 1) {
      // e.g., 0.5 ^ HUGE is virtually 0
      return 0;
    }
  }

  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
};

export const power = (base, exp) => {
  // Handle integer and simple fractional exponents
  // A full implementation for any float 'exp' is complex
  // This handles positive integer exponents
  if (exp < 0) {
    return 1 / powerHelper(base, -exp);
  }
  return powerHelper(base, exp);
};

export const square = (a) => a * a;
export const cube = (a) => a * a * a;
export const tenPower = (a) => power(10, a);

// --- Root Functions ---
// Uses Babylonian method for square root
export const sqrt = (num) => {
  if (num < 0) throw new Error('Cannot calculate square root of a negative');
  if (num === 0) return 0;
  let guess = num / 2;
  for (let i = 0; i < 20; i++) {
    // Iterate for precision
    guess = (guess + num / guess) / 2;
  }
  return guess;
};

// Uses Newton-Raphson method for n-th root
export const nthRoot = (num, n) => {
  if (num < 0 && n % 2 === 0) {
    throw new Error('Invalid operation');
  }
  if (num === 0) return 0;

  const precision = 1e-7;
  let guess = num / n;
  let prevGuess = guess + precision * 2; // Ensure loop runs at least once

  while (Math.abs(guess - prevGuess) > precision) {
    prevGuess = guess;
    // Newton-Raphson formula: x_k+1 = x_k - f(x_k) / f'(x_k)
    // Here f(x) = x^n - num
    // f'(x) = n * x^(n-1)
    let fx = power(guess, n) - num;
    let fpx = n * power(guess, n - 1);
    if (fpx === 0) break; // Avoid division by zero
    guess = guess - fx / fpx;
  }
  return guess;
};
export const cbrt = (num) => nthRoot(num, 3);

// --- Factorial ---
export const factorial = (num) => {
  if (num < 0) throw new Error('Factorial for negative numbers is not defined');
  if (num === 0 || num === 1) return 1;
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
};
