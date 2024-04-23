import { div } from "../div";

describe("Division test", () => {
  test("Correct division", () => {
    const a = 10;
    const b = 2;

    const result = div(a, b);

    expect(result).toBe(5);
  });

  test("Division by zero", () => {
    const a = 10;
    const b = 0;

    const result = div(a, b);

    expect(result).toBe(Infinity);
  });
});
