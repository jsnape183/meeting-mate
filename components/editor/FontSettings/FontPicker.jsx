import React from "react";
import PropTypes from "prop-types";
import { Select, MenuItem } from "@mui/material";
import { makePickerStyles, pickerSizes } from "../../common/GlobalStyles";

const fontFamilies = {
  Arial: "Arial, sans-serif",
  Veranda: "Verdana, sans-serif",
  Helvetca: "Helvetica, sans-serif",
  Tahoma: "Tahoma, sans-serif",
  Trebuchet: "'Trebuchet MS', sans-serif",
  TimesNewRoman: "'Times New Roman', serif",
  Georgia: "Georgia, serif",
  Garamond: "Garamond , serif",
  CourierNew: "'Courier New', monospace",
  BrushScript: "'Brush Script MT', cursive"
};

const FontPicker = ({ value, onChange }) => (
  <Select
    style={{ ...makePickerStyles(170), ...pickerSizes.small }}
    value={value}
    onChange={(e) => onChange(e.target.value)}
  >
    {Object.keys(fontFamilies).map((k) => (
      <MenuItem value={fontFamilies[k]} key={k}>
        <div style={{ fontFamily: fontFamilies[k] }}>
          {k.split(/(?=[A-Z])/).join(" ")}
        </div>
      </MenuItem>
    ))}
  </Select>
);

FontPicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired
};

export default FontPicker;
