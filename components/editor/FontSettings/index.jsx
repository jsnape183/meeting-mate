import React from "react";
import PropTypes from "prop-types";
import { Divider } from "@mui/material";
import ColorPicker from "../../common/ColorPicker";
import Icon from "../../common/Icon";
import FontSizePicker from "./FontSizePicker";
import FontPicker from "./FontPicker";
import FontDecorationToggle from "./FontDecorationToggle";

const FontSettings = ({ styles, onChange }) => (
  <>
    <FontPicker
      value={styles.fontFamily}
      onChange={(v) =>
        onChange({
          styles: { ...styles, fontFamily: v }
        })
      }
    />
    <FontSizePicker
      value={styles.fontSize}
      onChange={(v) => onChange({ styles: { ...styles, fontSize: v } })}
    />
    <Divider orientation="vertical" flexItem />
    <ColorPicker
      icon={Icon.formatText}
      defaultValue={styles.color}
      onChange={(v) =>
        onChange({
          styles: { ...styles, color: `${v}` }
        })
      }
      tooltip="Font Color"
    />
    <Divider orientation="vertical" flexItem />
    <FontDecorationToggle
      styles={styles}
      onChange={(v) => onChange({ ...styles, ...v })}
    />
  </>
);

FontSettings.propTypes = {
  styles: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FontSettings;
