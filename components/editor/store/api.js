import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiGet, apiPost, apiDelete } from "../../../api";

export const fetchDeckById = createAsyncThunk(
  "decks/fetchDeckById",
  async (deckId, thunkAPI) => {
    return await apiGet(`/api/decks/${deckId}`);
  }
);

export const fetchSlideById = createAsyncThunk(
  "slides/fetchSlideById",
  async (slideId, thunkAPI) => {
    return await apiGet(`/api/slides/${slideId}`);
  }
);

export const postSlideById = createAsyncThunk(
  "slides/postSlideById",
  async (slide, thunkAPI) => {
    return apiPost(`/api/slides/${slide.id}`, slide);
  }
);

export const deleteSlideById = createAsyncThunk(
  "slides/deleteSlideById",
  async (slide, thunkAPI) => {
    return apiDelete(`/api/slides/${slide.id}`);
  }
);

export const postSlide = createAsyncThunk(
  "slides/postSlide",
  async (slide, thunkAPI) => {
    return apiPost("/api/slides", slide);
  }
);

export const reorderSlide = createAsyncThunk(
  "decks/reorderSlide",
  async (data, thunkAPI) => {
    return apiPost(`/api/decks/${data.deckId}/reorder`, data);
  }
);
