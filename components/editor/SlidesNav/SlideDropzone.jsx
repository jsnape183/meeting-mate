import { useDrop } from "react-dnd";
import { getStyles } from "./SlideDropzoneStyles";

export const SlideDropzone = ({ index, onDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept: "Slide",
    drop: (item) => onDrop(item.id),
    canDrop: (item, monitor) =>
      item.index + 1 !== index && item.index !== index,
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  return <div ref={drop} style={getStyles(isOver && canDrop)}></div>;
};

export default SlideDropzone;
