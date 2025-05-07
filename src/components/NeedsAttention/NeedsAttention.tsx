import styles from './NeedsAttention.module.scss';
import attention from '../../assets/accounts/attention_img.svg';
import details from '../../assets/accounts/detail.svg';
import report from '../../assets/accounts/report.svg';
import claims from '../../assets/accounts/claims.svg';

export const NeedsAttention = () => {
  return (
    <div className={styles.attention}>
      <div className={styles.attention__header}>
        <div className={styles['attention__img-container']}>
          <img src={attention} alt='attention' />
        </div>
        <h3 className={styles.attention__title}>Needs Attention</h3>
      </div>
      <div className={styles.attention__block}>
        <div className={styles.attention__shell}>
          <p className={styles.attention__subtitle}>Marine Survey Required</p>
          <p className={styles.attention__text}>Scheduled for 06/12/2025</p>
          <button
            type='button'
            className={styles.attention__button}
            onClick={() => alert(`You clicked the button: Review details link`)}
          >
            <img
              src={details}
              alt='details'
              className={styles['attention__button-icon']}
            />
          </button>
        </div>
        <div className={styles.attention__shell}>
          <p className={styles.attention__subtitle}>Loss Control Complete</p>
          <p className={styles.attention__text}>Last inspection: 02/15/2025</p>
          <button
            type='button'
            className={styles.attention__button}
            onClick={() => alert(`You clicked the button: Review report`)}
          >
            <img
              src={report}
              alt='report'
              className={styles['attention__button-icon']}
            />
          </button>
        </div>
        <div className={styles.attention__shell}>
          <p className={styles.attention__subtitle}>Claims Review Required</p>
          <p className={styles.attention__text}>3 open claims // $245,000 TTL</p>
          <button
            type='button'
            className={styles.attention__button}
            onClick={() => alert(`You clicked the button: Review claims`)}
          >
            <img
              src={claims}
              alt='claims'
              className={styles['attention__button-icon']}
            />
          </button>
        </div>
      </div>
    </div>
  );
};