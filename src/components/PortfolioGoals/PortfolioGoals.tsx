import React, { useEffect, useState } from 'react';
import { GoalItem } from '../../types/Goals';
import { LossRatioTarget } from '../LossRatioTarget';
import styles from './PortfolioGoals.module.scss';
import lossRatio from '../../data/loss-ratio.json';
import renewalRetention from '../../data/renewal-retention.json';
import { RenewalRetention } from '../RenewalRetention';
import { RetentionItem } from '../../types/Retention';
import { ProgressOverview } from '../ProgressOverview';

export const PortfolioGoals: React.FC = () => {
  const [lossRatioData, setLossRatioData] = useState<GoalItem>();
  const [renewalRetentionData, setRenewalRetentionData] = useState<RetentionItem>();

  useEffect(() => {
    setLossRatioData(lossRatio as GoalItem);
    setRenewalRetentionData(renewalRetention as RetentionItem);
  }, []);

  return (
    <div className={styles.portfolioGoals}>
      <h2 className={styles.portfolioGoals__title}>Portfolio goals</h2>
      <div className={styles.portfolioGoals__shell}>
        {lossRatioData && (
          <LossRatioTarget goal={lossRatioData} />
        )}
      </div>

      <div className={styles.portfolioGoals__shell}>
        {renewalRetentionData && (
          <RenewalRetention goal={renewalRetentionData} />
        )}
      </div>

      <ProgressOverview />
    </div>
  );
};