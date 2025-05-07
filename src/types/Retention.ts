interface ColorThresholds {
  good?: string;
  warning?: string;
  critical?: string;
  warning2?: string;
}

export interface RetentionItem {
  name: string;
  colorThresholds: ColorThresholds;
  currentValue: number;
  targetValue: string;
  colorOrder?: ('good' | 'warning' | 'critical' | 'warning2')[];
}


