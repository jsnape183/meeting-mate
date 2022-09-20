import React from "react";
import { Text } from "./blocks/Text";

export const getBlockTypeFromNode = (node) => {
  switch (node.type) {
    case "Text":
      return Text;
    default:
      return null;
  }
};

export const BlockFactory = ({ node, mode, onChange, editorBounds }) => {
  const getBlockFromNode = (node, mode, onChange, editorBounds) => {
    switch (node.type) {
      case "Text":
        return (
          <Text
            key={node.id}
            id={node.id}
            {...node.props}
            position={node.position}
            size={node.size}
            mode={mode}
            onChange={onChange}
          />
        );
      default:
        return <></>;
    }
  };

  return <>{getBlockFromNode(node, mode, onChange, editorBounds)}</>;
};
