import "regenerator-runtime/runtime";
import reducer, {
  nodeAdded,
  nodeDeleted,
  nodeChanged,
  nodeSelected,
  updatePreview,
  fetchSlideById,
  fetchDeckById,
  deleteSlideById,
  postSlide,
  reorderSlide,
  setZoom
} from "../editorSlice";
import { initialState } from "./mocks";

describe("Selecting a node should", () => {
  test("set the selected node to the node id provided", () => {
    expect(reducer(initialState, nodeSelected({ id: "2" }))).toEqual({
      ...initialState,
      selectedSlide: {
        ...initialState.selectedSlide,
        selectedBlock: "2"
      }
    });
  });
});

describe("Deleting a node should", () => {
  test("remove the block from the node list", () => {
    const state = reducer(initialState, nodeDeleted({ id: "2" }));
    expect(state.selectedSlide.blocks.length).toEqual(1);
    expect(
      state.selectedSlide.blocks.find((n) => n.id === "2")
    ).not.toBeTruthy();
  });
});

describe("Adding a node should", () => {
  test("add the block the block to the end of the node list", () => {
    const state = reducer(initialState, nodeAdded({ block: { id: "3" } }));
    expect(state.selectedSlide.blocks.length).toEqual(3);
    expect(state.selectedSlide.blocks.find((n) => n.id === "3")).toBeTruthy();
    expect(
      state.selectedSlide.blocks[state.selectedSlide.blocks.length - 1].id
    ).toBe("3");
  });
});

describe("Changing a node should", () => {
  test("modify the content of a block with the selected id", () => {
    const state = reducer(
      initialState,
      nodeChanged({ node: { id: "1", type: "Changed" } })
    );
    expect(state.selectedSlide.blocks).toEqual([
      {
        id: "2",
        type: "Text",
        props: {
          text: "I am another component",
          styles: {
            fontSize: 10,
            backgroundColor: "transparent",
            borderColor: "transparent",
            borderStyle: "none",
            borderWidth: 0,
            fontWeight: "normal",
            fontStyle: "normal",
            color: "#000000",
            fontFamily: "Arial, sans-serif",
            textDecoration: "none"
          }
        },
        position: { left: "10%", top: "10%" },
        size: { width: "20%", height: "5%" }
      },
      { id: "1", type: "Changed" }
    ]);
  });
});

describe("Updating a slide preview image should", () => {
  test("set the preview image of the selected slide", () => {
    const state = reducer(
      initialState,
      updatePreview({ dataUrl: "Hello world!" })
    );

    const slide = state.slides.find((s) => s.id === state.selectedSlide.id);
    expect(slide.slidePreview).toBe("Hello world!");
    expect(state.selectedSlide.slidePreview).toBe("Hello world!");
  });
});

describe("Fetching a slide should", () => {
  const payload = { data: { id: "100", blocks: ["A block"] } };

  test("set the loading state to true while pending", () => {
    const state = reducer(initialState, fetchSlideById.pending());
    expect(state.loading).toBe(true);
  });

  test("set the loading state to false when fulfilled", () => {
    const state = reducer(initialState, fetchSlideById.fulfilled(payload));
    expect(state.loading).toBe(false);
  });

  test("set the slide id when fulfilled", () => {
    const state = reducer(
      initialState,
      fetchSlideById.fulfilled({ ...payload })
    );
    expect(state.selectedSlide.id).toBe(payload.data.id);
  });

  test("set the blocks when fulfilled", () => {
    const state = reducer(
      initialState,
      fetchSlideById.fulfilled({ ...payload })
    );
    expect(state.selectedSlide.blocks.length).toBe(1);
    expect(state.selectedSlide.blocks[0]).toBe(payload.data.blocks[0]);
  });

  test("clear the selected block", () => {
    const state = reducer(
      initialState,
      fetchSlideById.fulfilled({ ...payload })
    );
    expect(state.selectedSlide.selectedBlock).not.toBeTruthy();
  });
});

describe("Fetching a deck should", () => {
  const payload = { data: { id: "100" } };
  test("set the loading state to true while pending", () => {
    const state = reducer(initialState, fetchDeckById.pending());
    expect(state.loading).toBe(true);
  });

  test("set the loading state to false when fulfilled", () => {
    const state = reducer(initialState, fetchDeckById.fulfilled(payload));
    expect(state.loading).toBe(false);
  });

  test("set the deck id when fulfilled", () => {
    const state = reducer(initialState, fetchDeckById.fulfilled(payload));
    expect(state.deckId).toBe(payload.data.id);
  });
});

describe("Adding a new slide should", () => {
  const payload = { data: { id: "3", order: 3, slidePreview: "New Slide!" } };

  test("set the loading state to true while pending", () => {
    const state = reducer(initialState, postSlide.pending());
    expect(state.loading).toBe(true);
  });

  test("set the loading state to false when fulfilled", () => {
    const state = reducer(initialState, postSlide.fulfilled({ ...payload }));
    expect(state.loading).toBe(false);
  });

  test("add a slide to the deck when fulfilled", () => {
    const state = reducer(initialState, postSlide.fulfilled({ ...payload }));
    expect(state.slides.length).toBe(initialState.slides.length + 1);
    expect(state.slides[state.slides.length - 1]).toEqual(payload.data);
  });
});

describe("Deleting a slide should", () => {
  const payload = { data: { id: "1" } };

  test("remove a slide from the deck when fulfilled", () => {
    const state = reducer(
      initialState,
      deleteSlideById.fulfilled({ ...payload })
    );
    expect(state.slides.length).toBe(initialState.slides.length - 1);
    expect(state.slides.find((s) => s.id === payload.data.id)).not.toBeTruthy();
  });
});

describe("Reordering a slide should", () => {
  test("move the slide to the end if the index is equal to list length", () => {
    const payload = { data: { slideId: "1", index: 3 } };
    const state = reducer(initialState, reorderSlide.fulfilled({ ...payload }));
    const slideIndex = state.slides.findIndex(
      (s) => s.id === payload.data.slideId
    );
    expect(slideIndex).toBe(state.slides.length - 1);
  });

  test("move the slide to the end if the index is greater than list length", () => {
    const payload = { data: { slideId: "1", index: 4 } };
    const state = reducer(initialState, reorderSlide.fulfilled({ ...payload }));
    const slideIndex = state.slides.findIndex(
      (s) => s.id === payload.data.slideId
    );
    expect(slideIndex).toBe(state.slides.length - 1);
  });

  test("move the slide to the end if the index is greater than list length", () => {
    const payload = { data: { slideId: "1", index: 4 } };
    const state = reducer(initialState, reorderSlide.fulfilled({ ...payload }));
    const slideIndex = state.slides.findIndex(
      (s) => s.id === payload.data.slideId
    );
    expect(slideIndex).toBe(state.slides.length - 1);
  });

  test("move the slide to the specified index if the index is less than list length", () => {
    const payload = { data: { slideId: "1", index: 1 } };
    const state = reducer(initialState, reorderSlide.fulfilled({ ...payload }));
    const slideIndex = state.slides.findIndex(
      (s) => s.id === payload.data.slideId
    );
    expect(slideIndex).toBe(payload.data.index);
  });
});

describe("Setting the zoom should", () => {
  test("populate the zoom value in state", () => {
    const state = reducer(initialState, setZoom(0.5));
    expect(state.zoom).toBe(0.5);
  });
});
