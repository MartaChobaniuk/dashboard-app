export interface CommunicationItemType {
  type: 'new' | 'responded' | 'new_business';
  title: string;
  date: string;
  sender: string;
  message: string;
  attachments?: number;
}