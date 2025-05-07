export const getLineColor = (line: string) => {
  switch (line) {
    case 'Marine Cargo':
      return '#3B82F6';
    case 'General Liability':
      return '#3BB979';
    case 'Workers Comp':
      return '#6A3BF6';
    case 'Umbrella':
      return '#B93B3B';
    default:
      return '';
  }
};