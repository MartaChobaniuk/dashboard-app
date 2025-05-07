import styles from './DashboardPage.module.scss';
import { MyAccounts } from '../../components/MyAccounts';
import { WorkQueue } from '../../components/WorkQueue';
import { PortfolioGoals } from '../../components/PortfolioGoals';
import { QuickActions } from '../../components/QuickActions';
import { MarketIntelligence } from '../../components/MarketIntelligence';

export const DashboardPage = () => {
  return (
    <div className={styles.dashboard}>
      <div className={styles.dashboard__queue}>
        <WorkQueue />
      </div>
      <div className={styles.dashboard__goals}>
        <PortfolioGoals />
      </div>
      <div className={styles.dashboard__actions}>
        <QuickActions />
      </div>
      <div className={styles.dashboard__intelligence}>
        <MarketIntelligence />
      </div>
      <div className={styles.dashboard__accounts}>
        <MyAccounts />
      </div>
    </div>
  );
}