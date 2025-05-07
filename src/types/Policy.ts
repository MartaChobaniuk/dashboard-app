export interface Policy {
  line: string;
  policyNumber: string;
  effDate: string;
  expDate: string;
  status: 'Active' | 'Pending';
  expiringTech: number;
  expiringPremium: number;
  renewalToTech: number;
  renewalTech: number;
  renewalPremium: number;
  rateChange: number | 'N/A';
  lossRatio: string;
}