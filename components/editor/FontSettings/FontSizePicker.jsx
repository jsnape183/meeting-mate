import React from "react";
import PropTypes from "prop-types";
import Select from "@mui/material/Select";
import { arrayRange } from "../blocks/helpers";
import { makePickerStyles, pickerSizes } from "../../common/GlobalStyles";

export const FontSizePicker = ({ value, onChange }) => (
  <Select
    native
    value={value}
    onChange={(e) => onChange(parseInt(e.target.value, 10))}
    inputProps={{
      name: "fontSize",
      id: "text-fontSize"
    }}
    style={{ ...makePickerStyles(70), ...pickerSizes.small }}
  >
    {arrayRange(2, 60, 2).map((r) => (
      <option key={`font_${r}`} value={r}>
        {r}
      </option>
    ))}
  </Select>
);

FontSizePicker.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  onChange: PropTypes.func.isRequired
};

export default FontSizePicker;
