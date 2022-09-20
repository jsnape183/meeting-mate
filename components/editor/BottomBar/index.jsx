import { useSelector, useDispatch } from "react-redux";
import { setZoom } from "../store/editorSlice";
import { selectZoom } from "../store/selectors";
import UncontrolledBottomBar from "./BottomBar";

export const BottomBar = () => {
  const zoom = useSelector(selectZoom);
  const dispatch = useDispatch();

  const handleZoomChange = (value) => {
    dispatch(setZoom(value / 100));
  };

  return (
    <UncontrolledBottomBar zoom={zoom * 100} onZoomChange={handleZoomChange} />
  );
};

export default BottomBar;
