import React from "react";
import PropTypes from "prop-types";
import { useDrag } from "react-dnd";
import ContextMenu from "../../common/ContextMenu";
import { getStyles } from "./SlidePreviewStyles";

export const SlidePreview = ({ id, index, image, selected, onDelete }) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: "Slide",
      item: { id, index },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1
      })
    }),
    [id]
  );

  const renderImage = () =>
    image && image !== "" ? (
      <img
        id={id}
        ref={drag}
        src={image}
        alt="Slide Preview"
        style={{ ...getStyles(selected), opacity }}
      />
    ) : (
      <div ref={drag} style={{ ...getStyles(selected), opacity }}></div>
    );

  const handleContextMenu = (id, v) => {
    if (v === "Delete") onDelete(id);
  };

  return (
    <ContextMenu items={["Delete"]} onClick={(v) => handleContextMenu(id, v)}>
      {renderImage(selected)}
    </ContextMenu>
  );
};

SlidePreview.propTypes = {
  id: PropTypes.string,
  index: PropTypes.number,
  image: PropTypes.string,
  selected: PropTypes.bool
};

export default SlidePreview;
