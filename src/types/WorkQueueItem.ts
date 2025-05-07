export interface WorkQueueItem {
  originator: {
    initials: string;
    name: string;
  };
  clientLine: {
    client: string;
    line: string;
  };
  type: string;
  status: {
    label: string;
    color: string;
  };
  created: string;
}