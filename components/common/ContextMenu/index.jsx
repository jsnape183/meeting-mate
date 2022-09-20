import React, { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";

const initialState = {
  mouseX: null,
  mouseY: null
};

export const ContextMenu = ({ children, items, onClick }) => {
  const [state, setState] = useState(initialState);

  const handleClick = (event) => {
    event.preventDefault();
    setState({
      mouseX: event.clientX - 2,
      mouseY: event.clientY - 4
    });
  };

  const handleClose = () => {
    setState(initialState);
  };

  const handleMenuClick = (e) => {
    setState(initialState);
    onClick(e.target.getAttribute("data-value"));
  };

  return (
    <div onContextMenu={handleClick} style={{ cursor: "context-menu" }}>
      {children}
      <Menu
        keepMounted
        open={state.mouseY !== null}
        onClose={handleClose}
        anchorReference="anchorPosition"
        anchorPosition={
          state.mouseY !== null && state.mouseX !== null
            ? { top: state.mouseY, left: state.mouseX }
            : undefined
        }
      >
        {items.map((i) => (
          <MenuItem key={i} onClick={handleMenuClick} data-value={i}>
            {i}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default ContextMenu;
