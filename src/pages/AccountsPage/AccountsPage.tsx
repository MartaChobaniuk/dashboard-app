import styles from './AccountsPage.module.scss';
import arrow from '../../assets/accounts/button.svg';
import { Communication } from '../../components/Communication';
import { Policies } from '../../components/Policies';
import { Winnability } from '../../components/Winnability';
import { AccountStatus } from '../../components/AccountStatus';
import { ComplianceBlock } from '../../components/ComplianceBlock';
import { PoliciesBlock } from '../../components/PoliciesBlock';
import { PerformanceMetricsBlock } from '../../components/PerformanceMetricsBlock';
import { AccountHeader } from '../../components/AccountHeader';
import { NeedsAttention } from '../../components/NeedsAttention';
import { Link } from 'react-router-dom';
import { Paths } from '../../types/Paths';

export const AccountsPage = () => {
  return (
    <div className={styles.account}>
      <div className={styles.account__block}>
        <Link to={Paths.Dashboard} className={styles.account__link}>Dashboard // </Link>
        <Link to={Paths.Accounts} className={styles.account__link}>Accounts // </Link>
        <Link to={Paths.AccountsDetails} className={styles['account__link-detail']}>Maritime Logistic Corp</Link>
      </div>
      <div className={styles['account__double-block']}>
        <AccountHeader />
        <NeedsAttention />
      </div>
      <div className={styles.account__block}>
        <p className={styles.account__title}>Performance Metrics</p>
        <PerformanceMetricsBlock />
      </div>
      <div className={styles.account__block}>
        <p className={styles.account__title}>Policies</p>
        <PoliciesBlock />
      </div>
      <div className={styles['account__double-block']}>
        <div className={styles.account__status}>
          <p className={styles.account__title}>Account Status</p>
          <AccountStatus />
        </div>
        <div className={styles.account__compliance}>
          <div className={styles['account__compliance-shell']}>
            <p className={styles.account__title}>Compliance & Documentation</p>
            <button
              type='button'
              className={styles['account__compliance-button']}
              onClick={() => alert(`You clicked the button: See history`)}
            >
              <img
                src={arrow}
                alt='arrow'
                className={styles['account__compliance-button-icon']}
              />
            </button>
          </div>
          <ComplianceBlock />
        </div>
      </div>
      <div className={styles.account__block}>
        <p className={styles.account__title}>Account Details</p>
        <Winnability />
      </div>
      <div className={styles.account__block}>
        <p className={styles.account__title}>Communication</p>
        <Communication />
      </div>
      <div className={styles.account__block}>
        <p className={styles.account__title}>Policies</p>
        <Policies />
      </div>
    </div>
  );
};