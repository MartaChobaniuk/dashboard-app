interface ColorThresholds {
  good?: string;
  warning?: string;
  critical?: string;
  warning2?: string;
}

export interface GoalItem {
  name: string;
  colorThresholds: ColorThresholds;
  currentValue: number;
  targetValue: number;
  colorOrder?: ('good' | 'warning' | 'critical')[];
}


