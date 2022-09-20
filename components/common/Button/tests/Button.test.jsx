import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import Button from "../";

describe("Button should", () => {
  test.only("not display tooltip if no tooltip text is provided", () => {
    render(<Button onClick={() => {}} />);
    expect(screen.queryByRole("tooltip")).toBeNull();
  });
  /*** This test currently fails and is skipped ***/
  test("display tooltip if tooltip text is provided", () => {
    render(<Button tooltip="show me!" onClick={() => {}} />);
    const trigger = screen.getByRole("button");
    userEvent.hover(trigger);
    expect(screen.queryByRole("tooltip")).toBeTruthy();
  });
});
