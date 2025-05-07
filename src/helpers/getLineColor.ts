export const getLineColor = (line: string) => {
  switch (line) {
    case 'MarineCargo':
      return '#3B82F6';
    case 'GeneralLiability':
      return '#3BB979';
    case 'WorkersComp':
      return '#6A3BF6';
    case 'Umbrella':
      return '#B93B3B';
    default:
      return '';
  }
};