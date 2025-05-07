import { Account } from '../types/Account';

export const getStatusColor = (status: Account['status']) => {
  switch (status) {
    case 'Active':
      return '#3BB979';
    case 'Under review':
      return '#1E40AF';
    default:
      return '';
  }
};