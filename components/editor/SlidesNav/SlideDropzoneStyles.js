import { colors } from "../../common/GlobalStyles";

export const getStyles = (isOver) => ({
  width: 150,
  height: 10,
  background: isOver ? colors.primary : "transparent",
  opacity: 0.25,
  marginTop: 5,
  marginBottom: 5
});
