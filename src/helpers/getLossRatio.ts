export const getLossRatioColor = (lossRatio: string | number): string => {
  const value = typeof lossRatio === 'number' ? lossRatio : parseInt(lossRatio, 10);
  if (isNaN(value)) {
    return '';
  } else if (value < 35) {
    return '#3BB979';
  } else if (value < 60) {
    return '#FDD261';
  } else {
    return '#CC0101';
  }
};