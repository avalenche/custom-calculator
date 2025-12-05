import * as math from '../math';

describe('Basic Arithmetic Operations', () => {
  test('add(1, 2) should be 3', () => {
    expect(math.add(1, 2)).toBe(3);
  });

  test('subtract(5, 2) should be 3', () => {
    expect(math.subtract(5, 2)).toBe(3);
  });

  test('multiply(3, 4) should be 12', () => {
    expect(math.multiply(3, 4)).toBe(12);
  });

  test('divide(6, 2) should be 3', () => {
    expect(math.divide(6, 2)).toBe(3);
  });

  test('divide(10, 0) should throw "Cannot divide by zero"', () => {
    expect(() => math.divide(10, 0)).toThrow('Cannot divide by zero');
  });
});
