// pages/editor.jsx
import React, { useCallback, useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ActionCreators } from "redux-undo";
import {
  nodeChanged,
  nodeDeleted,
  nodeAdded,
  nodeSelected,
  updatePreview,
  postSlideById
} from "./store/editorSlice";
import { selectedSlide, selectedSlideId, selectZoom } from "./store/selectors";
import { HotKeys } from "react-hotkeys";
import { v4 as uuidv4 } from "uuid";
import Grid from "@mui/material/Grid";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import * as htmlToImage from "html-to-image";
import Toolbox from "./Toolbox";
import SlidesNav from "./SlidesNav";
import { SettingsPanel } from "./SettingsPanel";
import Editor from "./Editor";
import BottomBar from "./BottomBar";
import definitions from "./blocks/definitions";
import { copyBlock } from "./blocks/helpers";

export default function ConnectedEditor() {
  const { blocks, selectedBlock, slidePreview } = useSelector(selectedSlide);
  const slideId = useSelector(selectedSlideId);
  const zoom = useSelector(selectZoom);
  const dispatch = useDispatch();
  const showSettingsPanel = Boolean(selectedBlock);

  useEffect(() => {
    if (!slideId) return;
    dispatch(postSlideById({ id: slideId, blocks, slidePreview }));
  }, [blocks, dispatch, slideId, slidePreview]);

  useEffect(() => {
    const node = document.getElementById("editor-paper");
    htmlToImage
      .toPng(node)
      .then(function (dataUrl) {
        //dispatch(updatePreview({ dataUrl: dataUrl }));
      })
      .catch(function (error) {
        console.error("oops, something went wrong!", error);
      });
  }, [blocks, dispatch]);

  const getSelectedBlock = useMemo(
    () => blocks.find((n) => n.id === selectedBlock),
    [selectedBlock, blocks]
  );

  const handleShortcut = (e, evt) => {
    e.preventDefault();
    e.stopPropagation();
    evt();
  };

  const handleBlockCreated = useCallback(() => {
    const block = copyBlock(definitions.text);
    block.id = uuidv4();
    dispatch(nodeAdded({ block: block }));
  }, [dispatch]);

  const handleNodeDeleted = useCallback(
    (nodeId) => {
      dispatch(nodeDeleted({ id: nodeId }));
    },
    [dispatch]
  );

  const handleNodeChanged = useCallback(
    (node) => {
      dispatch(nodeChanged({ node }));
    },
    [dispatch]
  );

  const handleNodeSelected = useCallback(
    (e, id) => {
      dispatch(nodeSelected({ id }));
    },
    [dispatch]
  );

  const handleUndo = useCallback(() => dispatch(ActionCreators.undo()), [
    dispatch
  ]);

  const handleRedo = useCallback(() => dispatch(ActionCreators.redo()), [
    dispatch
  ]);

  return (
    <>
      <Toolbox onBlockCreated={handleBlockCreated} />
      <div style={{ marginTop: 90, marginLeft: 80, height: "85vh" }}>
        {showSettingsPanel && (
          <SettingsPanel
            node={getSelectedBlock}
            onSettingsChanged={handleNodeChanged}
          ></SettingsPanel>
        )}
        <Grid container spacing={3} style={{ paddingTop: 60 }}>
          <Grid item xs={10}>
            <div
              tabIndex={-1}
              style={{ overflow: "scroll", width: "100%", height: "100%" }}
            >
              <HotKeys
                handlers={{
                  UNDO: (e) => handleShortcut(e, handleUndo),
                  REDO: (e) => handleShortcut(e, handleRedo),
                  DELETE_NODE: (e) =>
                    handleShortcut(e, () => handleNodeDeleted(selectedBlock))
                }}
              >
                <DndProvider backend={HTML5Backend}>
                  <Editor
                    blocks={blocks}
                    selectedBlock={selectedBlock}
                    onNodeChanged={handleNodeChanged}
                    onNodeSelected={handleNodeSelected}
                    zoom={zoom}
                  ></Editor>
                </DndProvider>
              </HotKeys>
            </div>
            <BottomBar />
          </Grid>
          <Grid item xs={2}>
            <SlidesNav />
          </Grid>
        </Grid>
      </div>
    </>
  );
}
