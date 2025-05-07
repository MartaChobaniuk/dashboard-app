export const getProgressBarStyle = (value: number, isLossRatio = false) => {
  let backgroundColor = '';
  if (isLossRatio) {
    if (value < 55) {
      backgroundColor = `linear-gradient(to right, #3BB979 ${value}%, #CC0101 ${value}%)`;
    } else {
      backgroundColor = `linear-gradient(to right, #CC0101 ${value}%, #3BB979 ${value}%)`;
    }
  } else {
    backgroundColor = `linear-gradient(to right, #CC0101 ${Math.max(0, 100 - value)}%, #FDD261 ${Math.max(0, 100 - value)}%, #3BB979 ${value}%)`;
  }
  return {
    width: `${Math.abs(value)}%`,
    backgroundColor,
  };
};