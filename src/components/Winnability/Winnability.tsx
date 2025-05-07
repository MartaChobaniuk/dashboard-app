import { useEffect, useState } from 'react';
import styles from './Winnability.module.scss';
import { WinnabilityType } from '../../types/Winnability';
import winnabilityData from '../../data/winnability.json';
import { OverallScore } from '../OverallScore';
import { HistoricalTrend } from '../HistoricalTrend';
import { Position } from '../Position';
import { WinIncreasing } from '../WinIncreasing';
import { WinDecreasing } from '../WinDecreasing';
import { RecommendationCard } from '../RecommendationCard';
import { Sidebar } from '../Sidebar';

export const Winnability = () => {
  const [data, setData] = useState<WinnabilityType | null>(null);

  useEffect(() => {
    setData(winnabilityData as WinnabilityType);
  }, []);

  return (
    <div className={styles.winnability}>
      <div className={styles.winnability__sidebar}>
        <Sidebar />
        <div className={styles.winnability__line}></div>
      </div>
      {data && (
        <div className={styles.winnability__block}>
          <h2 className={styles.winnability__title}>Winnability</h2>
          <div className={styles.winnability__top}>
            <OverallScore score={data.overallScore} rating={data.overallRating} />
            <HistoricalTrend data={data.historicalTrendData} />
            <Position positionData={data.positionData} />
          </div>
          <div className={styles.winnability__factors}>
            <WinIncreasing factors={data.increasingWinnabilityFactors} />
            <WinDecreasing factors={data.decreasingWinnabilityFactors} />
          </div>
          <RecommendationCard recommendations={data.aiRecommendations} />
        </div>
      )}
    </div>
  );
};