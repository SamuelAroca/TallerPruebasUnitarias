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
});
