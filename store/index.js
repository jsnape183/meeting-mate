import { configureStore } from "@reduxjs/toolkit";
import undoable from "redux-undo";
import editorReducer from "../components/editor/store/editorSlice";

export const store = configureStore({
  reducer: {
    editor: undoable(editorReducer)
  }
});
