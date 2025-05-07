import { useEffect, useState } from 'react';
import styles from './ExposureDistribution.module.scss';
import { DistributionType } from '../../types/Distribution';
import distribution from '../../data/distribution.json';

export const ExposureDistribution = () => {
  const [distributionData, setDistributionData] = useState<DistributionType[]>([]);
  const barGradient = 'linear-gradient(to left, #3b82f6 0%, rgba(59, 130, 246, 0.5) 50%, transparent 100%)';

  useEffect(() => {
    setDistributionData(distribution as DistributionType[]);
  }, [])

  return (
    <div className={styles.distribution}>
      <h3 className={styles.distribution__title}>Exposure Distribution</h3>
      {distributionData.map(item => (
        <div key={item.label} className={styles.distribution__block}>
          <div className={styles['distribution__bar-container']}>
            <div
              className={styles.distribution__bar}
              style={{
                width: `${item.value}%`,
                background: barGradient,
              }}
            ></div>
          </div>
          <span className={styles.distribution__item}>{item.label}: {item.value}%</span>
        </div>
      ))}
    </div>
  );
};