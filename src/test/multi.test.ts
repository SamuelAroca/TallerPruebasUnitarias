import { n, number } from "../multi";

describe("Multi test", () => {
  test("n should be null", () => {
    expect(n).toBe(null);
  });

  test("n should be defined (not is undefined)", () => {
    expect(n).toBeDefined();
  });

  test("number should be 0", () => {
    expect(number).toBe(0);
  });

});
