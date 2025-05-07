import { useEffect, useState } from 'react';
import styles from './ProgressOverview.module.scss';
import { OverviewItem } from '../../types/Overview';
import progress from '../../data/progress-overview.json';

export const ProgressOverview = () => {
  const [progressOverview, setProgressOverview] = useState<OverviewItem[]>([]);
  const barGradient = 'linear-gradient(to left, #3b82f6 0%, rgba(59, 130, 246, 0.5) 50%, transparent 100%)';

  useEffect(() => {
    setProgressOverview(progress as OverviewItem[]);
  }, [])

  return (
    <div className={styles.overview}>
      {progressOverview.map(item => (
        <div key={item.target} className={styles.overview__block}>
          <h3 className={styles.overview__title}>{item.target}</h3>
          <div className={styles.overview__shell}>
            <div className={styles['overview__bar-container']}>
              <div
                className={styles.overview__bar}
                style={{
                  width: `${item.achieved_percent}%`,
                  background: barGradient,
                }}
              ></div>
            </div>
            <span className={styles.overview__item}>{`${item.target_value}`}</span>
          </div>
          <div className={styles.overview__percent}>
            {`${item.achieved_percent}%`}
          </div>
          <div className={styles.overview__value}>
            {item.achieved_value}
          </div>
        </div>
      ))}
    </div>
  )
};