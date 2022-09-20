import React from "react";
import { memo } from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { getStyles } from "./DraggableWrapperStyles";

export const DraggableWrapper = memo(function DraggableWrapper({
  node,
  position,
  size,
  children
}) {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { ...node, position, size },
      collect: (monitor) => ({
        isDragging: monitor.isDragging()
      })
    }),
    [node, position, size]
  );

  console.log(isDragging);
  if (isDragging) return <div ref={drag} />;

  return (
    <div ref={drag} style={getStyles(position, size, isDragging)}>
      {children}
    </div>
  );
});

export const withDraggable = (node, position, size, block) => (
  <DraggableWrapper
    key={`${node.id}_draggable`}
    node={node}
    position={position}
    size={size}
  >
    {block}
  </DraggableWrapper>
);
