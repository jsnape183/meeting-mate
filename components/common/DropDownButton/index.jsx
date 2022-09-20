import React, { useState } from "react";
import PropTypes from "prop-types";
import Popover from "@mui/material/Popover";
import MenuList from "@mui/material/MenuList";
import MenuItem from "@mui/material/MenuItem";
import Button from "../Button";
import { buttonSizes } from "../GlobalStyles";

export const DropDownButton = ({
  value,
  text,
  style,
  icon,
  menuItems,
  onChange,
  tooltip
}) => {
  const [showPicker, setShowPicker] = useState(null);

  const handleToggle = (e) => {
    setShowPicker(e.currentTarget);
  };

  const handleClose = () => {
    setShowPicker(null);
  };

  const handleChange = (v) => {
    setShowPicker(null);
    onChange(v);
  };

  return (
    <>
      <Button
        size="small"
        style={buttonSizes.small}
        color="secondary"
        onClick={handleToggle}
        tooltip={tooltip}
      >
        {text}
        {icon}
      </Button>
      <Popover
        open={Boolean(showPicker)}
        anchorEl={showPicker}
        onClose={handleClose}
        style={style}
      >
        <MenuList id="popover-menu">
          {menuItems.map((m) => (
            <MenuItem
              key={m.value}
              selected={m.value === value}
              onClick={() => handleChange(m.value)}
            >
              {m.text}
            </MenuItem>
          ))}
        </MenuList>
      </Popover>
    </>
  );
};

DropDownButton.propTypes = {
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.object
  ]).isRequired,
  text: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.element
  ]),
  style: PropTypes.object,
  icon: PropTypes.element,
  menuItems: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired,
  tooltip: PropTypes.string
};

export default DropDownButton;
