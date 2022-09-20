import { makeResizer } from "../ResizableWrapperStyles";

describe("DraggableWrapperStyles makeResizer should", () => {
  test("have correct position", () => {
    const resizer = makeResizer(10, 20, 30, 40, "icon");

    expect(resizer.left).toBe(10);
    expect(resizer.top).toBe(20);
    expect(resizer.right).toBe(30);
    expect(resizer.bottom).toBe(40);
  });

  test("have correct cursor icon", () => {
    const resizer = makeResizer(10, 20, 30, 40, "icon");

    expect(resizer.cursor).toBe("icon");
  });
});
