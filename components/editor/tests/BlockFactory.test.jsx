import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import { BlockFactory } from "../BlockFactory";
import componentTreeMock from "./componentTreeMock";

describe("BlockFactory should", () => {
  test("display 'I am a component' block", () => {
    render(<BlockFactory node={componentTreeMock[0]} />, () => {});
    expect(screen.getByText("I am a component")).toBeVisible();
  });
});
