export const getStyles = (position, size) => {
  const { left, top } = position;
  const { width, height } = size;
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    height,
    width,
    display: "inline-block",
    cursor: "move"
  };
};
