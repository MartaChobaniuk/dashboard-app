export const getPolicyStatusColor = (status: string) => {
  switch (status) {
    case 'Active':
      return '#3BB979';
    case 'Pending':
      return '#FDD261';
    default:
      return '';
  }
}