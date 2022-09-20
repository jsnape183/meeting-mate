import { arrayRange } from "../helpers";

describe("arrayRange should", () => {
  test("output number range from 1 to 10", () => {
    const range = arrayRange(1, 10, 1);
    expect(range.length).toBe(10);
  });

  test("output number range from 2 to 10", () => {
    const range = arrayRange(1, 10, 2);
    expect(range.length).toBe(5);
  });
});
