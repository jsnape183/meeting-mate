import React from "react";
import PropTypes from "prop-types";
import Button from "../Button";
import { buttonSizes } from "../GlobalStyles";

export const ToggleButton = ({
  trueValue,
  falseValue,
  value,
  icon,
  onToggled,
  tooltip
}) => (
  <Button
    variant={value === trueValue ? "contained" : "outlined"}
    size="small"
    style={{ ...buttonSizes.small }}
    tooltip={tooltip}
    color="secondary"
    onClick={() => onToggled(value === trueValue ? falseValue : trueValue)}
  >
    {icon}
  </Button>
);

ToggleButton.propTypes = {
  trueValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  falseValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  icon: PropTypes.element,
  tooltip: PropTypes.string,
  onToggled: PropTypes.func.isRequired
};

export default ToggleButton;
