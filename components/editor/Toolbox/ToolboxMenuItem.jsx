import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

export const ToolboxMenuItem = ({ icon, children }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover-2" : undefined;
  return (
    <>
      <ListItem
        button
        aria-describedby={id}
        key="Text Blocks"
        onClick={handleClick}
      >
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary="Text Blocks" />
      </ListItem>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right"
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left"
        }}
      >
        <div style={{ width: 200 }}>{children}</div>
      </Popover>
    </>
  );
};

export default ToolboxMenuItem;
