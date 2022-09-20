import React from "react";
import PropTypes from "prop-types";
import ColorPicker from "../../common/ColorPicker";
import Icon from "../../common/Icon";
import { BorderStylePicker, BorderWidthPicker } from "./BorderPicker";

export const BorderSettings = ({ styles, onChange }) => (
  <>
    <ColorPicker
      icon={Icon.formatBorderColor}
      defaultValue={styles.borderColor}
      onChange={(v) =>
        onChange({
          styles: { ...styles, borderColor: `${v}` }
        })
      }
      tooltip="Border color"
    />
    <BorderStylePicker
      value={styles.borderStyle}
      onChange={(v) =>
        onChange({
          styles: { ...styles, borderStyle: v }
        })
      }
    />
    <BorderWidthPicker
      value={styles.borderWidth}
      onChange={(v) =>
        onChange({
          styles: { ...styles, borderWidth: v }
        })
      }
    />
  </>
);

BorderSettings.propTypes = {
  styles: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default BorderSettings;
