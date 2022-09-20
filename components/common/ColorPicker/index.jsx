import React, { useRef } from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { buttonSizes } from "../GlobalStyles";

export const ColorPicker = ({
  defaultValue,
  palette,
  icon,
  onChange,
  tooltip
}) => {
  const pickerHtml = useRef(null);
  let pickerValue = defaultValue;

  const handleToggle = (e) => {
    pickerHtml.current.focus();
    pickerHtml.current.click();
  };

  const handleChange = (e) => {
    onChange(`${pickerValue}`);
  };

  return (
    <>
      <Button
        size="small"
        color="secondary"
        onClick={handleToggle}
        tooltip={tooltip}
        style={buttonSizes.small}
      >
        {icon}
      </Button>
      <input
        ref={pickerHtml}
        type="color"
        style={{ width: 1, height: 1, overflow: "hidden" }}
        onBlur={handleChange}
        onChange={(e) => (pickerValue = e.target.value)}
        value={defaultValue}
      />
    </>
  );
};

ColorPicker.propTypes = {
  defaultValue: PropTypes.string.isRequired,
  palette: PropTypes.array,
  icon: PropTypes.element.isRequired,
  onChange: PropTypes.func.isRequired,
  tooltip: PropTypes.string
};

export default ColorPicker;
