export default (currentValue, width, scaledMax, scaledMin, stepWidth) => {
  const current = currentValue / width;

  const scaledCurrent =
    stepWidth * parseInt((current * (scaledMax - scaledMin)) / stepWidth);
  return {
    step: scaledMin + scaledCurrent,
    newLeft: (scaledCurrent / (scaledMax - scaledMin)) * 100,
  };
};
