import React from "react";

import { getStyles } from "./SelectableWrapperStyles";

export const withSelectable = (
  block,
  position,
  size,
  component,
  onSelected
) => (
  <div
    key={`selectable_${block.id}`}
    id={`selectable_${block.id}`}
    data-testid={`selectable_${block.id}`}
    onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      onSelected(block);
    }}
    style={getStyles(position, size)}
  >
    {component}
  </div>
);
