import React from "react";
import PropTypes from "prop-types";
import { BlockFactory } from "./BlockFactory";
import { withResizable } from "./interactions/resizable/ResizableWrapper";
import { withDraggable } from "./interactions/draggable/DraggableWrapper";
import { withSelectable } from "./interactions/selectable/withSelectable";
import { blockMode } from "./blocks/constants";
import {
  getPercentPosition,
  getPercentSize,
  getPixelPosition,
  getPixelSize
} from "./zoomHelpers";

export const BlockRenderer = ({
  blocks,
  selectedBlock,
  editorBounds,
  onChange,
  onSelected,
  onResize
}) => {
  const handleResize = (node, position, size) => {
    onResize({
      ...node,
      position: getPercentPosition(position, editorBounds),
      size: getPercentSize(size, editorBounds)
    });
  };

  const handleSelected = (block) => onSelected(block.id);

  const handleChange = (id, value) => {
    const node = blocks.find((n) => n.id === id);
    if (!node) return;
    onChange({ ...node, ...value });
  };

  return blocks.map((n) => {
    const pixelPosition = getPixelPosition(n.position, editorBounds);
    const pixelSize = getPixelSize(n.size, editorBounds);

    return n.id === selectedBlock
      ? withDraggable(
          n,
          pixelPosition,
          pixelSize,
          withResizable(
            n,
            pixelPosition,
            pixelSize,
            <BlockFactory
              node={n}
              mode={blockMode.edit}
              onChange={handleChange}
            />,
            handleResize
          )
        )
      : withSelectable(
          n,
          pixelPosition,
          pixelSize,
          <BlockFactory node={n} mode={blockMode.view} />,
          handleSelected
        );
  });
};

BlockRenderer.propTypes = {
  blocks: PropTypes.array.isRequired,
  selectedBlock: PropTypes.string,
  editorBounds: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelected: PropTypes.func.isRequired,
  onResize: PropTypes.func.isRequired
};

export default BlockRenderer;
