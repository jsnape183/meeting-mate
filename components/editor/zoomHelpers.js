export const getPixelPosition = (position, editorBounds) => ({
  left: editorBounds.width * (parseInt(position.left, 10) / 100),
  top: editorBounds.height * (parseInt(position.top, 10) / 100)
});

export const getPixelSize = (size, editorBounds) => ({
  width: editorBounds.width * (parseInt(size.width, 10) / 100),
  height: editorBounds.height * (parseInt(size.height, 10) / 100)
});

export const getPercentPosition = (position, editorBounds) => ({
  left: `${(position.left / editorBounds.width) * 100}%`,
  top: `${(position.top / editorBounds.height) * 100}%`
});

export const getPercentSize = (size, editorBounds) => ({
  width: `${(size.width / editorBounds.width) * 100}%`,
  height: `${(size.height / editorBounds.height) * 100}%`
});

export const getEditorBounds = (editorBounds, zoom) => ({
  width: editorBounds.width * zoom,
  height: editorBounds.height * zoom
});
