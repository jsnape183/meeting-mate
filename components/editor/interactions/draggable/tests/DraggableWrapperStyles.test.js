import { getStyles } from "../DraggableWrapperStyles";

const position = {
  left: 100,
  top: 50
};

const size = {
  width: 75,
  height: 25
};

describe("DraggableWrapperStyles getStyles should", () => {
  test("set correct transform", () => {
    const style = getStyles(position, size, false);

    expect(style.WebkitTransform).toBe("translate3d(100px, 50px, 0)");
  });

  test("set no opacity when dragging", () => {
    const style = getStyles(position, size, true);

    expect(style.opacity).toBe(0);
  });

  test("set full opacity when static", () => {
    const style = getStyles(position, size, false);

    expect(style.opacity).toBe(1);
  });

  test("set no height when dragging", () => {
    const style = getStyles(position, size, true);

    expect(style.height).toBe(0);
  });

  test("set full height when static", () => {
    const style = getStyles(position, size, false);

    expect(style.height).toBe(25);
  });

  test("set no width when dragging", () => {
    const style = getStyles(position, size, true);

    expect(style.width).toBe(0);
  });

  test("set full width when static", () => {
    const style = getStyles(position, size, false);

    expect(style.width).toBe(75);
  });
});
