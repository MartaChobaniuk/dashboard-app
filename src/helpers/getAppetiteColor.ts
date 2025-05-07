import { Account } from '../types/Account';

export const getAppetiteColor = (appetite: Account['appetite']) => {
  switch (appetite) {
    case 'HIGH':
      return '#3BB979';
    case 'MEDIUM':
      return '#FDD261';
    case 'CAUTIOUS':
      return '#ef4444';
    default:
      return '';
  }
};
