import { anything, anything1 } from "../string";

describe("Strings", () => {
  test('anything should contain "UN"', () => {
    expect(anything).toContain("UN");
  });

  test('anything should not contain "P"', () => {
    expect(anything).not.toContain("P");
  });
  test('anything1 should contain the letter "n"', () => {
    expect(anything1).toContain("n");
  });
});
