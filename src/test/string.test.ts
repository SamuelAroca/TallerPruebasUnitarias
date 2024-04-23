import { anything } from "../string";

describe('Strings', () => {
  test('anything should contain "UN"', () => {
    expect(anything).toContain("UN");
  });

  test('anything should not contain "P"', () => {
    expect(anything).not.toContain("P");
  });
});