import React from "react";
import { useDrop } from "react-dnd";
import { colors, boxShadows } from "../common/GlobalStyles";
import { ItemTypes } from "./interactions/draggable/ItemTypes";
import BlockRenderer from "./BlockRenderer";
import {
  getEditorBounds,
  getPercentPosition,
  getPercentSize
} from "./zoomHelpers";

const editorBounds = {
  width: 960,
  height: 530
};

const getStyles = (zoom) => ({
  ...getEditorBounds(editorBounds, zoom),
  border: `1px solid ${colors.default}`,
  boxShadow: boxShadows.default,
  outline: "none",
  position: "absolute"
});

export default function Editor({
  blocks,
  selectedBlock,
  onNodeChanged,
  onNodeSelected,
  zoom
}) {
  const editorZoom = getEditorBounds(editorBounds, zoom);

  const [, drop] = useDrop(
    () => ({
      accept: ItemTypes.BOX,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        let left = Math.round(item.position.left + delta.x);
        let top = Math.round(item.position.top + delta.y);
        onNodeChanged({
          ...item,
          size: getPercentSize(item.size, editorZoom),
          position: getPercentPosition({ left, top }, editorZoom)
        });
        return undefined;
      }
    }),
    [onNodeChanged]
  );

  const handleResize = (node) => onNodeChanged(node);

  const handleSelected = (id) => onNodeSelected(id);

  const handleEditorClick = (e) => {
    if (e.target.id !== "editor-paper") return true;
    onNodeSelected(null);
  };

  const handleChange = (node) => {
    onNodeChanged(node);
  };

  return (
    <div
      ref={drop}
      id="editor-paper"
      style={getStyles(zoom)}
      onClick={handleEditorClick}
    >
      <BlockRenderer
        blocks={blocks}
        selectedBlock={selectedBlock}
        editorBounds={editorZoom}
        onChange={handleChange}
        onSelected={handleSelected}
        onResize={handleResize}
      />
    </div>
  );
}
