import React from 'react';
import styles from './WinDecreasing.module.scss';
import arrow from '../../assets/accounts/yellow_arrow.svg';

interface Factor {
  id: number;
  label: string;
  value: number;
}

interface Props {
  factors: Factor[];
}

export const WinDecreasing: React.FC<Props> = ({ factors }) => {
  return (
    <div className={styles.decrease}>
      <div className={styles.decrease__header}>
        <div className={styles['decrease__img-container']}>
          <img src={arrow} alt='arrow' />
        </div>
        <h3 className={styles.decrease__title}>Decreasing Winnability</h3>
      </div>
      <ul className={styles.decrease__list}>
        {factors.map((factor) => (
          <li key={factor.id} className={styles.decrease__item}>
            <div className={styles['decrease__block-left']}>
              <div className={styles['decrease__id-container']}>
                <span className={styles.decrease__id}>{factor.id}</span>
              </div>
            </div>
            <div className={styles['decrease__block-center']}>
              <p className={styles.decrease__label}>{factor.label}</p>
              <div className={styles['decrease__bar-container']}>
                <div
                  className={styles.decrease__bar}
                  style={{
                    width: `${factor.value}%`,
                    backgroundImage: 'linear-gradient(to left, #FDD261 0%, rgba(253, 210, 97, 0.6) 50%, transparent 100%)'
                  }}
                ></div>
                <span className={styles.decrease__value}>-{factor.value}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};