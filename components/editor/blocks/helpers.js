export const arrayRange = (start, end, increment) =>
  Array.from(Array(end + 1).keys()).filter(
    (n) => n >= start && n % increment === 0
  );

export const copyBlock = (block) => {
  return {
    ...block,
    position: { ...block.position },
    size: { ...block.size },
    styles: { ...block.styles }
  };
};
