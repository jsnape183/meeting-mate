import { colors } from "../../../common/GlobalStyles";
import { getStyles } from "../SlideDropzoneStyles";

describe("SlideDropzoneStyles getStyles should", () => {
  test("have correct background color when not hovered", () => {
    const style = getStyles(false);

    expect(style.background).toBe("transparent");
  });

  test("have correct background color when hovered", () => {
    const style = getStyles(true);

    expect(style.background).toBe(colors.primary);
  });
});
