import { colors } from "../../../common/GlobalStyles";
import { getStyles } from "../SlidePreviewStyles";

describe("SlidePreviewStyles getStyles should", () => {
  test("have correct border color when not selected", () => {
    const style = getStyles(false);

    expect(style.border).toBe(`1px solid ${colors.default}`);
  });

  test("have correct border color when selected", () => {
    const style = getStyles(true);

    expect(style.border).toBe(`1px solid ${colors.primary}`);
  });
});
