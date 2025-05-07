import React from 'react';
import styles from './Position.module.scss';

interface Props {
  positionData: { yourScore: number; marketAvg: number; topCompetitor: number };
}

export const Position: React.FC<Props> = ({ positionData }) => {
  const barGradient = 'linear-gradient(to left, #3b82f6 0%, rgba(59, 130, 246, 0.5) 50%, transparent 100%)';

  const yourScoreBarStyle = {
    width: `${positionData.yourScore}%`,
    background: barGradient,
  };

  const marketAvgBarStyle = {
    width: `${positionData.marketAvg}%`,
    background: barGradient,
  };

  const topCompetitorBarStyle = {
    width: `${positionData.topCompetitor}%`,
    background: barGradient,
  };

  return (
    <div className={styles.position}>
      <div className={styles.position__title}>Position</div>
      <div className={styles.position__block}>
        <div className={styles['position__bar-container']}>
          <div
            className={styles.position__bar}
            style={yourScoreBarStyle}
          ></div>
        </div>
        <p className={styles.position__item}>Your score: {positionData.yourScore}%</p>
      </div>

      <div className={styles.position__block}>
        <div className={styles['position__bar-container']}>
          <div
            className={styles.position__bar}
            style={marketAvgBarStyle}
          ></div>
        </div>
        <p className={styles.position__item}>Market Avg: {positionData.marketAvg}%</p>
      </div>

      <div className={styles.position__block}>
        <div className={styles['position__bar-container']}>
          <div
            className={styles.position__bar}
            style={topCompetitorBarStyle}
          ></div>
        </div>
        <p className={styles.position__item}>Top competitor:{positionData.topCompetitor}%</p>
      </div>
    </div>
  );
};
