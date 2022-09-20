import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import componentTreeMock from "./componentTreeMock";

import Editor from "../Editor";

export const noBlockSelected = {
  value: {
    blocks: componentTreeMock,
    selectedBlock: null
  }
};

export const block1Selected = {
  value: {
    blocks: componentTreeMock,
    selectedBlock: "1"
  }
};

export const block2Selected = {
  value: {
    blocks: componentTreeMock,
    selectedBlock: "2"
  }
};

const customRender = (ui) => {
  return render(<DndProvider backend={HTML5Backend}>{ui}</DndProvider>);
};

describe("Editor should", () => {
  test("render all blocks as selectable when no block selected", () => {
    customRender(
      <Editor
        blocks={noBlockSelected.value.blocks}
        selectedBlock={noBlockSelected.value.selectedBlock}
        onNodeChanged={() => {}}
        onSelectedNode={() => {}}
        zoom={1.0}
      />
    );
    expect(screen.getAllByTestId("selectable", { exact: false }).length).toBe(
      componentTreeMock.length
    );
  });

  test("render only block 2 as selectable when block 1 selected", () => {
    customRender(
      <Editor
        blocks={block1Selected.value.blocks}
        selectedBlock={block1Selected.value.selectedBlock}
        onNodeChanged={() => {}}
        onSelectedNode={() => {}}
        zoom={1.0}
      />
    );

    expect(screen.queryByTestId("selectable_1")).toBeNull();

    expect(screen.queryByTestId("selectable_2")).toBeTruthy();
  });

  test("render only block 1 as selectable when block 2 is selected", () => {
    customRender(
      <Editor
        blocks={block2Selected.value.blocks}
        selectedBlock={block2Selected.value.selectedBlock}
        onNodeChanged={() => {}}
        onSelectedNode={() => {}}
        zoom={1.0}
      />
    );

    expect(screen.queryByTestId("selectable_1")).toBeTruthy();

    expect(screen.queryByTestId("selectable_2")).toBeNull();
  });
});
