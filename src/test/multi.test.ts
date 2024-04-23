import { n, number, notFalse, notTrue } from "../multi";

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
  test("notTrue should be false", () => {
    expect(notTrue).toBe(false);
  });

  test("notFalse should be true", () => {
    expect(notFalse).toBe(true);
  });
});
