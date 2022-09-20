import { colors } from "../../common/GlobalStyles";

export const getStyles = (selected) => ({
  width: 150,
  height: 75,
  border: `1px solid ${selected ? colors.primary : colors.default}`,
  cursor: "move"
});
