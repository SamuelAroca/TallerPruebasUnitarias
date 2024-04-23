import { sum } from "../sum";

describe("Sum of numbers", () => {
  test("The sum of two values is greater than 10", () => {
    const a = 5;
    const b = 6;

    const result = sum(a, b);

    expect(result).toBeGreaterThan(10);
  });

  test('The sum of two values is greater than or equal to 20', () => {
    const a = 10;
    const b = 10;

    const result = sum(a, b);

    expect(result).toBeGreaterThanOrEqual(20);
  });

  test('The sum of two values is less than or equal to 8', () => {
    const a = 3;
    const b = 4;

    const result = sum(a, b);

    expect(result).toBeLessThanOrEqual(8);
  });

  test('The sum of two values is less than 12', () => {
    const a = 5;
    const b = 6;

    const result = sum(a, b);

    expect(result).toBeLessThan(12);
  });

  test('The sum of two values is equal to 9', () => {
    const a = 4;
    const b = 5;

    const result = sum(a, b);

    expect(result).toEqual(9);
  });
});
