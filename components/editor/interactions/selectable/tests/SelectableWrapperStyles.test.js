import { getStyles } from "../SelectableWrapperStyles";

const position = {
  left: 100,
  top: 50
};

const size = {
  width: 75,
  height: 25
};

describe("SelectableWrapperStyles getStyles should", () => {
  test("have correct transform", () => {
    const style = getStyles(position, size);

    expect(style.transform).toBe("translate3d(100px, 50px, 0)");
  });

  test("have correct position", () => {
    const style = getStyles(position, size);
    const transform = `translate3d(${position.left}px, ${position.top}px, 0)`;
    expect(style.transform).toBe(transform);
    expect(style.WebkitTransform).toBe(transform);
  });

  test("have correct size", () => {
    const style = getStyles(position, size);

    expect(style.width).toBe(size.width);
    expect(style.height).toBe(size.height);
  });
});
