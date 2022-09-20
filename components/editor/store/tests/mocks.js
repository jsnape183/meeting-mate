import componentTreeMock from "../../tests/componentTreeMock";
export const initialState = {
  deckId: "1",
  slides: [
    {
      id: "1",
      slidePreview: ""
    },
    {
      id: "2",
      slidePreview: ""
    },
    {
      id: "3",
      slidePreview: ""
    }
  ],
  selectedSlide: {
    id: "1",
    blocks: componentTreeMock,
    selectedBlock: "1",
    loaded: false
  },
  loading: false,
  zoom: 1.0
};
