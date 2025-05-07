export interface Account {
  accountNameType: { name: string; type: string };
  line: string;
  broker: string;
  renewalDate: string;
  premium: string;
  ratedPremium: string;
  lossRatio: string;
  appetite: 'HIGH' | 'MEDIUM' | 'CAUTIOUS';
  status: 'Active' | 'Under review';
  tierAge: number;
  vinnability: 'Very Strong' | 'Strong' | 'Medium';
}