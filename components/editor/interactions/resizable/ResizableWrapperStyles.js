export const resizableStyles = {
  background: "white",
  width: "100%",
  height: "100%",
  position: "relative"
};

export const resizers = {
  width: "100%",
  height: "100%",
  border: "3px solid #4286f4",
  boxSizing: "border-box"
};

export const makeResizer = (left, top, right, bottom, icon) => ({
  width: 10,
  height: 10,
  borderRadius: "50%",
  background: "white",
  border: "3px solid #4286f4",
  position: "absolute",
  left,
  top,
  right,
  bottom,
  cursor: icon
});
