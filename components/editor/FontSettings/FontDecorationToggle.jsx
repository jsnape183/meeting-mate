import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import PropTypes from "prop-types";
import ToggleButton from "../../common/ToggleButton";
import Icon from "../../common/Icon";
import { buttonGroupStyles } from "../../common/GlobalStyles";

export const FontDecorationToggle = ({ styles, onChange }) => (
  <ButtonGroup
    style={buttonGroupStyles}
    variant="outlined"
    size="small"
    aria-label="small outlined button group"
  >
    <ToggleButton
      value={styles.fontWeight}
      trueValue="bold"
      falseValue="normal"
      icon={Icon.formatBold({ size: "small" })}
      onToggled={(v) =>
        onChange({
          styles: { ...styles, fontWeight: v }
        })
      }
      tooltip="Bold"
    />
    <ToggleButton
      value={styles.textDecoration}
      trueValue="underline"
      falseValue="none"
      icon={Icon.formatUnderline}
      onToggled={(v) =>
        onChange({
          styles: { ...styles, textDecoration: v }
        })
      }
      tooltip="Underline"
    />
    <ToggleButton
      value={styles.fontStyle}
      trueValue="italic"
      falseValue="normal"
      icon={Icon.formatItalic}
      onToggled={(v) =>
        onChange({
          styles: { ...styles, fontStyle: v }
        })
      }
      tooltip="Italic"
    />
  </ButtonGroup>
);

FontDecorationToggle.propTypes = {
  styles: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};

export default FontDecorationToggle;
