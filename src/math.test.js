// src/math.test.js
import * as math from './math.js';

describe('Custom Math Functions', () => {
  test('add(1, 2) should be 3', () => {
    expect(math.add(1, 2)).toBe(3);
  });

  test('subtract(5, 2) should be 3', () => {
    expect(math.subtract(5, 2)).toBe(3);
  });

  test('divide(6, 2) should be 3', () => {
    expect(math.divide(6, 2)).toBe(3);
  });

  test('divide(10, 0) should throw an error', () => {
    expect(() => math.divide(10, 0)).toThrow('Cannot divide by zero');
  });

  test('square(4) should be 16', () => {
    expect(math.square(4)).toBe(16);
  });

  test('power(2, 3) should be 8', () => {
    expect(math.power(2, 3)).toBe(8);
  });

  test('sqrt(9) should be 3', () => {
    expect(math.sqrt(9)).toBe(3);
  });

  test('sqrt(144) should be 12', () => {
    expect(math.sqrt(144)).toBe(12);
  });

  test('factorial(5) should be 120', () => {
    expect(math.factorial(5)).toBe(120);
  });

  test('factorial(0) should be 1', () => {
    expect(math.factorial(0)).toBe(1);
  });

  test('nthRoot(16, 4) should be 2', () => {
    expect(math.nthRoot(16, 4)).toBe(2);
  });

  // --- Tests for Unary Operations ---
  test('percentage(50) should be 0.5', () => {
    expect(math.percentage(50)).toBe(0.5);
  });

  test('changeSign(-10) should be 10', () => {
    expect(math.changeSign(-10)).toBe(10);
  });

  test('inverse(4) should be 0.25', () => {
    expect(math.inverse(4)).toBe(0.25);
  });

  test('inverse(0) should throw an error', () => {
    expect(() => math.inverse(0)).toThrow('Cannot divide by zero');
  });

  test('cube(3) should be 27', () => {
    expect(math.cube(3)).toBe(27);
  });

  test('tenPower(3) should be 1000', () => {
    expect(math.tenPower(3)).toBe(1000);
  });

  // --- Comprehensive nthRoot Tests ---
  test('nthRoot(8, 3) should be close to 2', () => {
    expect(math.nthRoot(8, 3)).toBeCloseTo(2, 6);
  });

  test('nthRoot(1024, 10) should be close to 2', () => {
    expect(math.nthRoot(1024, 10)).toBeCloseTo(2, 6);
  });

  test('nthRoot(-8, 3) should be close to -2', () => {
    expect(math.nthRoot(-8, 3)).toBeCloseTo(-2, 6);
  });

  test('nthRoot(-4, 2) should throw an error', () => {
    expect(() => math.nthRoot(-4, 2)).toThrow('Invalid operation');
  });
});
