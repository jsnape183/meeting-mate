import React from "react";
import PropTypes from "prop-types";
import { makePickerStyles } from "../../common/GlobalStyles";
import Icon from "../../common/Icon";
import DropDownButton from "../../common/DropDownButton";

export const BorderStylePicker = ({ value, onChange }) => (
  <DropDownButton
    style={makePickerStyles(75)}
    value={value}
    icon={Icon.formatBorderStyle}
    tooltip="Border Style"
    onChange={(v) => onChange(v)}
    menuItems={[
      {
        value: "none",
        text: (
          <div style={{ width: 25, height: 1, borderStyle: "none" }}>
            &nbsp;
          </div>
        )
      },
      {
        value: "solid",
        text: (
          <div style={{ width: 25, height: 1, borderStyle: "solid" }}>
            &nbsp;
          </div>
        )
      },
      {
        value: "dotted",
        text: (
          <div style={{ width: 25, height: 1, borderStyle: "dotted" }}>
            &nbsp;
          </div>
        )
      },
      {
        value: "dashed",
        text: (
          <div style={{ width: 25, height: 1, borderStyle: "dashed" }}>
            &nbsp;
          </div>
        )
      }
    ]}
  />
);

export const BorderWidthPicker = ({ value, onChange }) => (
  <DropDownButton
    style={makePickerStyles(75)}
    value={value}
    icon={Icon.formatBorderWeight}
    onChange={(v) => onChange(v)}
    tooltip="Border Weight"
    menuItems={[
      {
        value: 0,
        text: (
          <div style={{ width: 25, height: 1, borderStyle: "none" }}>
            &nbsp;
          </div>
        )
      },
      {
        value: 1,
        text: (
          <div
            style={{
              width: 25,
              height: 1,
              borderBottomStyle: "solid",
              borderBottomWidth: 1
            }}
          >
            &nbsp;
          </div>
        )
      },
      {
        value: 2,
        text: (
          <div
            style={{
              width: 25,
              height: 1,
              borderBottomStyle: "solid",
              borderBottomWidth: 2
            }}
          >
            &nbsp;
          </div>
        )
      },
      {
        value: 4,
        text: (
          <div
            style={{
              width: 25,
              height: 1,
              borderBottomStyle: "solid",
              borderBottomWidth: 4
            }}
          >
            &nbsp;
          </div>
        )
      },
      {
        value: 8,
        text: (
          <div
            style={{
              width: 25,
              height: 1,
              borderBottomStyle: "solid",
              borderBottomWidth: 8
            }}
          >
            &nbsp;
          </div>
        )
      }
    ]}
  />
);

BorderStylePicker.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

BorderWidthPicker.propTypes = {
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
