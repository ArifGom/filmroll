export default (min, max, value) => {
  return Math.max(min, Math.min(max, value));
};
