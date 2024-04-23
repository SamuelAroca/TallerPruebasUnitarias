import { sum } from "../sum";

describe("Sum of numbers", () => {
  test("The sum of two values is greater than 10", () => {
    const a = 5;
    const b = 6;

    const result = sum(a, b);

    expect(result).toBeGreaterThan(10);
  });
});
