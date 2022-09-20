import React from "react";
import PropTypes from "prop-types";
import MUIButton from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

export const Button = ({
  children,
  onClick,
  style,
  tooltip,
  color = "primary",
  variant = "outlined",
  size = "large"
}) => (
  <>
    {tooltip && (
      <Tooltip title={tooltip} role="tooltip">
        <MUIButton
          size={size}
          sx={{ ...style }}
          onClick={onClick}
          role="button"
          variant={variant}
          color={color}
        >
          {children}
        </MUIButton>
      </Tooltip>
    )}
    {!tooltip && (
      <MUIButton
        size={size}
        sx={{ ...style }}
        onClick={onClick}
        role="button"
        variant={variant}
        color={color}
      >
        {children}
      </MUIButton>
    )}
  </>
);

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  style: PropTypes.object,
  tooltip: PropTypes.string,
  color: PropTypes.string
};

export default Button;
