export const getStyles = (position, size, isDragging) => {
  const { left, top } = position;
  const { width, height } = size;
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    // IE fallback: hide the real node using CSS when dragging
    // because IE will ignore our custom "empty image" drag preview.
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : height,
    width: isDragging ? 0 : width,
    display: "inline-block",
    cursor: "move"
  };
};
