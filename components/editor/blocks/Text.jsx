// components/user/Text.js
import React from "react";
import PropTypes from "prop-types";
import ContentEditable from "react-contenteditable";
import Divider from "@mui/material/Divider";
import ColorPicker from "../../common/ColorPicker";
import FontSettings from "../FontSettings";
import BorderSettings from "../BorderSettings";
import Icon from "../../common/Icon";
import { container } from "./BlockStyles";
import { blockMode } from "./constants";

const Text = ({ id, mode, text, styles, size, position, onChange }) => {
  const { width, height } = size;

  const handleChange = (e) => {
    onChange(id, {
      props: {
        text: e.target.value.replace(/<\/?[^>]+(>|$)/g, ""),
        styles: { ...styles }
      }
    });
  };

  return (
    <div style={{ ...container, ...styles, width: "100%", height: "100%" }}>
      <ContentEditable
        html={text}
        disabled={mode !== blockMode.edit}
        style={{ width: "100%", height: "100%", outline: "none" }}
        onChange={handleChange}
      />
    </div>
  );
};

Text.propTypes = {
  mode: PropTypes.string,
  text: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  styles: PropTypes.object,
  size: PropTypes.object,
  onChange: PropTypes.func
};

Text.settingsPanel = (node, handleChange) => {
  return (
    <>
      <ColorPicker
        icon={Icon.formatColorFill}
        defaultValue={node.props.styles.backgroundColor}
        onChange={(v) =>
          handleChange({
            ...node.props,
            styles: { ...node.props.styles, backgroundColor: `${v}` }
          })
        }
        tooltip="Fill color"
      />

      <Divider orientation="vertical" flexItem />
      <BorderSettings
        styles={node.props.styles}
        onChange={(styles) => handleChange({ ...node.props, ...styles })}
      />

      <Divider orientation="vertical" flexItem />
      <FontSettings
        styles={node.props.styles}
        onChange={(styles) => handleChange({ ...node.props, ...styles })}
      />
    </>
  );
};

export { Text };
