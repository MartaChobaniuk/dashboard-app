import { ExposureDistribution } from '../ExposureDistribution';
import { MetricCard } from '../MetricCard';
import styles from './PerformanceMetricsBlock.module.scss';

export const PerformanceMetricsBlock = () => {
  return (
    <div className={styles.metrics}>
      <div className={styles.metrics__block}>
        <MetricCard title='Winnability' subtitle='Very Strong' />
        <MetricCard title='Loss Ratio' subtitle='25%' text=' vs 42% target' />
      </div>
      <div className={styles.metrics__block}>
        <MetricCard title='Premium Growth' subtitle='12.4%' text='YoY increase $123M vs $150M Target' />
        <ExposureDistribution />
      </div>
    </div>
  );
};