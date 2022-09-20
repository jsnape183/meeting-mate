import React from "react";
import {
  resizableStyles,
  resizers,
  makeResizer
} from "./ResizableWrapperStyles";

export const ResizableWrapper = ({
  id,
  position,
  size,
  zoom,
  editorBounds,
  onResize,
  children
}) => {
  const container = React.createRef();

  const minimumSize = 20;
  let mouseState = {
    resizable: null,
    draggable: null,
    resizeType: "",
    x: 0,
    y: 0,
    width: size.width,
    height: size.height,
    top: position.top,
    left: position.left
  };

  const resize = (e) => {
    e.preventDefault();
    e.stopPropagation();
    switch (mouseState.resizeType) {
      case "rz-bottom-right":
        mouseState.width = size.width + (e.pageX - mouseState.x);
        mouseState.height = size.height + (e.pageY - mouseState.y);
        break;
      case "rz-bottom-left":
        mouseState.width = size.width - (e.pageX - mouseState.x);
        mouseState.height = size.height + (e.pageY - mouseState.y);
        mouseState.left = position.left + (e.pageX - mouseState.x);
        break;
      case "rz-top-right":
        mouseState.width = size.width + (e.pageX - mouseState.x);
        mouseState.height = size.height - (e.pageY - mouseState.y);
        mouseState.top = position.top + (e.pageY - mouseState.y);
        break;
      case "rz-top-left":
        mouseState.width = size.width - (e.pageX - mouseState.x);
        mouseState.left = position.left + (e.pageX - mouseState.x);
        mouseState.height = size.height - (e.pageY - mouseState.y);
        mouseState.top = position.top + (e.pageY - mouseState.y);
        break;
      case "rz-left":
        mouseState.width = size.width - (e.pageX - mouseState.x);
        mouseState.left = position.left + (e.pageX - mouseState.x);
        break;
      case "rz-top":
        mouseState.height = size.height - (e.pageY - mouseState.y);
        mouseState.top = position.top + (e.pageY - mouseState.y);
        break;
      case "rz-right":
        mouseState.width = size.width + (e.pageX - mouseState.x);
        break;
      case "rz-bottom":
        mouseState.height = size.height + (e.pageY - mouseState.y);
        break;
      default:
        return;
    }

    if (mouseState.width < minimumSize) mouseState.width = minimumSize;

    if (mouseState.height < minimumSize) mouseState.height = minimumSize;

    mouseState.resizable.style.width = mouseState.width + "px";
    mouseState.resizable.style.height = mouseState.height + "px";

    if (mouseState.top !== position.top || mouseState.left !== position.left) {
      mouseState.draggable.style.transform = `translate3d(${mouseState.left}px, ${mouseState.top}px, 0px)`;
    }
    container.current.getElementsByClassName("rz-top")[0].style.left =
      mouseState.width / 2 + "px";

    container.current.getElementsByClassName("rz-bottom")[0].style.left =
      mouseState.width / 2 + "px";

    container.current.getElementsByClassName("rz-left")[0].style.top =
      mouseState.height / 2 + "px";

    container.current.getElementsByClassName("rz-right")[0].style.top =
      mouseState.height / 2 + "px";
  };

  const stopResizing = (e) => {
    e.preventDefault();
    e.stopPropagation();
    onResize(
      {
        top: mouseState.top,
        left: mouseState.left
      },
      {
        width: mouseState.width,
        height: mouseState.height
      }
    );
    window.removeEventListener("mousemove", resize);
    window.removeEventListener("mouseup", stopResizing);
  };

  const resizerMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
    mouseState = {
      resizable: e.target.parentNode.parentNode,
      draggable: e.target.parentNode.parentNode.parentNode,
      resizeType: e.target.className,
      x: e.pageX,
      y: e.pageY,
      width: size.width,
      height: size.height,
      top: position.top,
      left: position.left
    };
    window.addEventListener("mousemove", resize);
    window.addEventListener("mouseup", stopResizing);
  };
  return (
    <div style={resizableStyles} id={`resizable_${id}`} ref={container}>
      <div style={resizers}>
        <div
          className="rz-top-left"
          style={makeResizer(-10, -10, null, null, "nwse-resize")}
          onMouseDown={resizerMouseDown}
        />
        <div
          className="rz-top-right"
          style={makeResizer(null, -10, -10, null, "nesw-resize")}
          onMouseDown={resizerMouseDown}
        />
        <div
          className="rz-bottom-right"
          style={makeResizer(null, null, -10, -10, "nwse-resize")}
          onMouseDown={resizerMouseDown}
        />
        <div
          className="rz-bottom-left"
          style={makeResizer(-10, null, null, -10, "nesw-resize")}
          onMouseDown={resizerMouseDown}
        />

        <div
          className="rz-left"
          style={makeResizer(
            -10,
            mouseState.height / 2,
            null,
            null,
            "ew-resize"
          )}
          onMouseDown={resizerMouseDown}
        />
        <div
          className="rz-top"
          style={makeResizer(
            mouseState.width / 2,
            -10,
            null,
            null,
            "ns-resize"
          )}
          onMouseDown={resizerMouseDown}
        />
        <div
          className="rz-right"
          style={makeResizer(
            null,
            mouseState.height / 2,
            -10,
            null,
            "ew-resize"
          )}
          onMouseDown={resizerMouseDown}
        />
        <div
          className="rz-bottom"
          style={makeResizer(
            mouseState.width / 2,
            null,
            null,
            -10,
            "ns-resize"
          )}
          onMouseDown={resizerMouseDown}
        />
        {children}
      </div>
    </div>
  );
};

export const withResizable = (node, position, size, block, onResize) => (
  <ResizableWrapper
    id={node.id}
    position={position}
    size={size}
    onResize={(position, size) => onResize(node, position, size)}
  >
    {block}
  </ResizableWrapper>
);
