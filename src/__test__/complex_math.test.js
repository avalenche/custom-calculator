import * as math from '../math';

describe('Complex Mathematical Functions', () => {
  test('square(4) should be 16', () => {
    expect(math.square(4)).toBe(16);
  });

  test('cube(3) should be 27', () => {
    expect(math.cube(3)).toBe(27);
  });

  test('power(2, 3) should be 8', () => {
    expect(math.power(2, 3)).toBe(8);
  });

  test('power(10, 3) should be 1000 (tenPower)', () => {
    expect(math.tenPower(3)).toBe(1000);
  });

  test('sqrt(144) should be close to 12', () => {
    expect(math.sqrt(144)).toBeCloseTo(12, 6);
  });

  test('nthRoot(8, 3) should be close to 2', () => {
    expect(math.nthRoot(8, 3)).toBeCloseTo(2, 6);
  });

  test('nthRoot(1024, 10) should be close to 2', () => {
    expect(math.nthRoot(1024, 10)).toBeCloseTo(2, 6);
  });

  test('nthRoot(-8, 3) should be close to -2 (odd root)', () => {
    expect(math.nthRoot(-8, 3)).toBeCloseTo(-2, 6);
  });

  test('nthRoot(-4, 2) should throw "Invalid operation" (even root of negative)', () => {
    expect(() => math.nthRoot(-4, 2)).toThrow('Invalid operation');
  });

  test('factorial(5) should be 120', () => {
    expect(math.factorial(5)).toBe(120);
  });

  test('factorial(0) should be 1', () => {
    expect(math.factorial(0)).toBe(1);
  });

  test('factorial(-1) should throw "Factorial for negative numbers is not defined"', () => {
    expect(() => math.factorial(-1)).toThrow(
      'Factorial for negative numbers is not defined'
    );
  });
});
