// components/SettingsPanel.js
import React from "react";
import { colors, boxShadows } from "../common/GlobalStyles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { getBlockTypeFromNode } from "./BlockFactory";

const styles = {
  paper: {
    position: "absolute",
    display: "flex",
    border: `1px solid ${colors.default}`,
    flexWrap: "wrap",
    width: "fit-content",
    padding: 5,
    backgroundColor: "#fff",
    boxShadow: boxShadows.default
  }
};

export const SettingsPanel = ({ node, onSettingsChanged }) => {
  const props = node.props;
  const blockType = getBlockTypeFromNode(node);

  return (
    <Paper elevation={0} style={styles.paper} role="menubar">
      <Grid container>
        {blockType.settingsPanel(node, (value) =>
          onSettingsChanged({ ...node, props: { ...props, ...value } })
        )}
      </Grid>
    </Paper>
  );
};
