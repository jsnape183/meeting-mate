import React from "react";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFillOutlined";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import TextFormatIcon from "@mui/icons-material/TextFormat";
import LineWeightIcon from "@mui/icons-material/LineWeight";
import LineStyleIcon from "@mui/icons-material/LineStyle";
import TextFieldsIcon from "@mui/icons-material/TextFields";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import ZoomOutIcon from "@mui/icons-material/ZoomOut";
import ZoomInIcon from "@mui/icons-material/ZoomIn";

const Icon = {
  formatBorderColor: <BorderColorIcon />,
  formatBorderWeight: <LineWeightIcon />,
  formatBorderStyle: <LineStyleIcon />,
  formatColorFill: <FormatColorFillIcon />,
  formatBold: (props) => <FormatBoldIcon {...props} />,
  formatUnderline: <FormatUnderlinedIcon />,
  formatItalic: <FormatItalicIcon />,
  formatText: <TextFormatIcon />,
  formatLineWeight: <LineWeightIcon />,
  formatLineStyle: <LineStyleIcon />,
  textBlocks: <TextFieldsIcon />,
  addCircleOutlined: <AddCircleOutlineOutlinedIcon />,
  add: <AddIcon />,
  minus: <RemoveIcon />,
  zoomOut: <ZoomOutIcon />,
  zoomIn: <ZoomInIcon />
};

export default Icon;
