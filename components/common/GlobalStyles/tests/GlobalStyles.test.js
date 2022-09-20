import { makePickerStyles } from "../";

describe("GlobalStyles makePickerStyles should", () => {
  test("return the correct width", () => {
    const styles = makePickerStyles(100);
    expect(styles.width).toBe(100);
  });
});
