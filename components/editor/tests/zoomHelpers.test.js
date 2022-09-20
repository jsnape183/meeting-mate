import {
  getPixelPosition,
  getPixelSize,
  getPercentPosition,
  getPercentSize,
  getEditorBounds
} from "../zoomHelpers";

const editorBounds = {
  width: 100,
  height: 200
};

describe("getPixelPosition should", () => {
  test("return the correct pixel position", () => {
    expect(getPixelPosition({ left: "25%", top: "25%" }, editorBounds)).toEqual(
      {
        left: 25,
        top: 50
      }
    );
  });
});

describe("getPixelSize should", () => {
  test("return the correct pixel size", () => {
    expect(getPixelSize({ width: "25%", height: "25%" }, editorBounds)).toEqual(
      {
        width: 25,
        height: 50
      }
    );
  });
});

describe("getPercentagePosition should", () => {
  test("return the correct pixel position", () => {
    expect(getPercentPosition({ left: 25, top: 25 }, editorBounds)).toEqual({
      left: "25%",
      top: "12.5%"
    });
  });
});

describe("getPercentageSize should", () => {
  test("return the correct pixel size", () => {
    expect(getPercentSize({ width: 25, height: 25 }, editorBounds)).toEqual({
      width: "25%",
      height: "12.5%"
    });
  });
});

describe("getEdiitorBounds should", () => {
  test("return the same size at 100% zoom", () => {
    expect(getEditorBounds(editorBounds, 1.0)).toEqual(editorBounds);
  });

  test("return the half size at 50% zoom", () => {
    expect(getEditorBounds(editorBounds, 0.5)).toEqual({
      width: 50,
      height: 100
    });
  });
});
