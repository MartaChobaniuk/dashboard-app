import React from 'react';
import styles from './MetricCard.module.scss';
import factors from '../../assets/accounts/button_factors.svg';
import history from '../../assets/accounts/history.svg';
import trend from '../../assets/accounts/trend.svg';

interface Props {
  title: string;
  subtitle: string;
  text?: string;
}

export const MetricCard: React.FC<Props> = ({ title, subtitle, text }) => {
  const handleButtonClick = (buttonName: string) => {
    alert(`You clicked the button: ${buttonName}`);
  };

  return (
    <div className={styles.card}>
      <div className={styles.card__top}>
        <h3 className={styles.card__title}>{title}</h3>
        <span className={styles.card__subtitle}>{subtitle}</span>
        <span className={styles.card__text}>{text}</span>
      </div>

      <div className={styles.card__bottom}>
        {title === 'Winnability' && (
          <button
            className={styles.card__button}
            onClick={() => handleButtonClick('See Factors')}
          >
            <img src={factors} alt='See Factors' />
          </button>
        )}
        {title === 'Loss Ratio' && (
          <button
            className={styles.card__button}
            onClick={() => handleButtonClick('View History')}
          >
            <img src={history} alt='View history' />
          </button>
        )}
        {title === 'Premium Growth' && (
          <button
            className={styles.card__button}
            onClick={() => handleButtonClick('View Trend')}
          >
            <img src={trend} alt='View trend' />
          </button>
        )}
      </div>
    </div>
  );
};