import { initialState } from "./mocks";
import {
  selectSlides,
  selectedSlide,
  selectedSlideId,
  selectedBlock,
  selectSlideLoaded,
  selectZoom
} from "../selectors";

const state = {
  editor: {
    present: {
      ...initialState
    }
  }
};

describe("selectSlides should", () => {
  test("return an array of slides", () => {
    const result = selectSlides(state);
    expect(result.length).toBe(initialState.slides.length);
  });
});

describe("selectedSlide should", () => {
  test("return the currently selected slide", () => {
    const result = selectedSlide(state);
    expect(result).toEqual(initialState.selectedSlide);
  });
});
describe("selectedSlideId should", () => {
  test("return the currently selected slide id", () => {
    const result = selectedSlideId(state);
    expect(result).toBe(initialState.selectedSlide.id);
  });
});
describe("selectedBlock should", () => {
  test("return the currently selected block", () => {
    const result = selectedBlock(state);
    expect(result).toBe(initialState.selectedSlide.selectedBlock);
  });
});
describe("selectSlideLoaded should", () => {
  test("return the state of selectedSlide.loaded", () => {
    const result = selectSlideLoaded(state);
    expect(result).toBe(initialState.selectedSlide.loaded);
  });
});
describe("selectZoom should", () => {
  test("return the state of selectedSlide.zoom", () => {
    const result = selectZoom(state);
    expect(result).toBe(initialState.zoom);
  });
});
