import { createSlice } from "@reduxjs/toolkit";
import {
  fetchDeckById,
  fetchSlideById,
  postSlideById,
  deleteSlideById,
  postSlide,
  reorderSlide
} from "./api";

const initialState = {
  deckId: null,
  slides: [],
  selectedSlide: {
    id: null,
    blocks: [],
    selectedBlock: null,
    loaded: false
  },
  zoom: 1.0,
  loading: true
};

export const editorSlice = createSlice({
  name: "editor",
  initialState,
  reducers: {
    nodeChanged: (state, action) => {
      state.selectedSlide.blocks = [
        ...state.selectedSlide.blocks.filter(
          (n) => n.id !== action.payload.node.id
        ),
        action.payload.node
      ];
    },
    nodeDeleted: (state, action) => {
      state.selectedSlide.selectedBlock = null;
      state.selectedSlide.blocks = state.selectedSlide.blocks.filter(
        (n) => n.id !== action.payload.id
      );
    },
    nodeAdded: (state, action) => {
      state.selectedSlide.blocks = [
        ...state.selectedSlide.blocks,
        action.payload.block
      ];
      state.selectedSlide.selectedBlock = action.payload.block.id;
    },
    nodeSelected: (state, action) => {
      state.selectedSlide.selectedBlock = action.payload.id;
    },
    updatePreview: (state, action) => {
      const index = state.slides.findIndex(
        (s) => s.id === state.selectedSlide.id
      );
      state.selectedSlide.slidePreview = action.payload.dataUrl;
      state.slides[index].slidePreview = action.payload.dataUrl;
    },
    setZoom: (state, action) => {
      state.zoom = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDeckById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchDeckById.fulfilled, (state, action) => {
      state.loading = false;
      state.deckId = action.payload.data.id;
      state.slides = action.payload.data.slides;
    });
    builder.addCase(fetchSlideById.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(fetchSlideById.fulfilled, (state, action) => {
      state.loading = false;
      state.selectedSlide.loaded = true;
      state.selectedSlide.id = action.payload.data.id;
      state.selectedSlide.blocks = action.payload.data.blocks;
      state.selectedSlide.selectedBlock = null;
    });
    builder.addCase(postSlideById.pending, (state, action) => {});
    builder.addCase(postSlideById.fulfilled, (state, action) => {});
    builder.addCase(postSlide.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(postSlide.fulfilled, (state, action) => {
      state.loading = false;
      state.slides = [...state.slides, { ...action.payload.data }];
    });
    builder.addCase(deleteSlideById.pending, (state, action) => {});
    builder.addCase(deleteSlideById.fulfilled, (state, action) => {
      state.slides = state.slides.filter(
        (s) => s.id !== action.payload.data.id
      );
    });
    builder.addCase(reorderSlide.pending, (state, action) => {});
    builder.addCase(reorderSlide.fulfilled, (state, action) => {
      const slides = state.slides.filter(
        (s) => s.id !== action.payload.data.slideId
      );
      const slide = state.slides.find(
        (s) => s.id === action.payload.data.slideId
      );
      if (action.payload.data.index >= state.slides.length) {
        slides.push({ ...slide });

        state.slides = [...slides];
        return state;
      }
      slides.splice(action.payload.data.index, 0, { ...slide });
      state.slides = [...slides];
    });
  }
});

export const {
  nodeChanged,
  nodeDeleted,
  nodeAdded,
  nodeSelected,
  updatePreview,
  slideAdded,
  setZoom
} = editorSlice.actions;

export {
  fetchDeckById,
  fetchSlideById,
  postSlideById,
  deleteSlideById,
  postSlide,
  reorderSlide
};

export default editorSlice.reducer;
