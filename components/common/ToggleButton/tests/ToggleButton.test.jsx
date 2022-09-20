import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import ToggleButton from "../";

const notToggledState = {
  trueValue: "Bold",
  falseValue: "none",
  value: "none",
  onToggled: () => {}
};

const toggledState = {
  trueValue: "Bold",
  falseValue: "none",
  value: "Bold",
  onToggled: () => {}
};

describe("ToggleButton should", () => {
  test("not become toggled if a falsey value is supplied", () => {
    render(<ToggleButton {...notToggledState} />);
    expect(screen.getByRole("button")).toHaveClass("MuiButton-outlined");
  });

  test("become toggled if a falsey value is supplied", () => {
    render(<ToggleButton {...toggledState} />);
    expect(screen.getByRole("button")).toHaveClass("MuiButton-contained");
  });
});
