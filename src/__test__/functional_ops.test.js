import * as math from '../math';

describe('Functional and Utility Operations', () => {
  test('percentage(50) should be 0.5', () => {
    expect(math.percentage(50)).toBe(0.5);
  });

  test('changeSign(-10) should be 10', () => {
    expect(math.changeSign(-10)).toBe(10);
  });

  test('inverse(4) should be 0.25', () => {
    expect(math.inverse(4)).toBe(0.25);
  });

  test('inverse(0) should throw "Cannot divide by zero"', () => {
    expect(() => math.inverse(0)).toThrow('Cannot divide by zero');
  });
});
