import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

export const BackdropProgress = () => (
  <Backdrop open sx={{ color: "#fff", zIndex: 1202 }}>
    <CircularProgress color="inherit" />
  </Backdrop>
);

export default BackdropProgress;
