import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const styles = {
  zIndex: 1201
};

export const TopBar = () => {
  return (
    <AppBar position="fixed" style={styles}>
      <Toolbar>
        <Typography variant="h6" noWrap>
          MeetingMate
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
