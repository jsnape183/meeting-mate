import React from "react";
import Icon from "../../common/Icon";
import ToolboxMenuItem from "./ToolboxMenuItem";
import { Drawer, List, ListItem, ListItemText, Toolbar } from "@mui/material";

const drawerWidth = 60;
const styles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerContainer: {
    width: drawerWidth,
    overflow: "hidden"
  },
  content: {
    flexGrow: 1,
    padding: 3
  }
};

export const Toolbox = ({ onBlockCreated }) => {
  return (
    <Drawer style={styles.drawerPaper} variant="permanent">
      <Toolbar />
      <div style={styles.drawerContainer}>
        <List>
          <ToolboxMenuItem icon={Icon.textBlocks}>
            <List>
              <ListItem button key="text block" onClick={onBlockCreated}>
                <ListItemText>Text Block</ListItemText>
              </ListItem>
            </List>
          </ToolboxMenuItem>
        </List>
      </div>
    </Drawer>
  );
};

export default Toolbox;
