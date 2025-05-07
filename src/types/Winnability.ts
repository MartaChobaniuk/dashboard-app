export interface WinnabilityType {
  overallScore: number;
  overallRating: string;
  historicalTrendData: { month: string; value: number }[];
  positionData: { yourScore: number; marketAvg: number; topCompetitor: number };
  increasingWinnabilityFactors: { id: number; label: string; value: number }[];
  decreasingWinnabilityFactors: { id: number; label: string; value: number }[];
  aiRecommendations: { id: number; label: string; text: string }[];
}