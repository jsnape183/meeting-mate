import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import dynamic from "next/dynamic";
import { HotKeys } from "react-hotkeys";
import { fetchDeckById } from "../../components/editor/store/editorSlice";
import BackdropProgress from "../../components/common/BackdropProgress";
const Editor = dynamic(() => import("../../components/editor"), { ssr: false });

const keyMap = {
  UNDO: ["command+z", "control+z"],
  REDO: ["command+y", "control+y"],
  DELETE_NODE: ["del", "backspace"]
};

export const EditorWrapper = ({ deckId }) => {
  const loading = useSelector((state) => state.editor.present.loading);
  const dispatch = useDispatch();
  useEffect(() => {
    if (!deckId) return;
    dispatch(fetchDeckById(deckId));
  }, [deckId, dispatch]);

  return loading ? (
    <BackdropProgress />
  ) : (
    <HotKeys keyMap={keyMap}>
      <Editor />
    </HotKeys>
  );
};

export default EditorWrapper;
