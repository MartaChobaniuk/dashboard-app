import React from 'react';
import styles from './WinIncreasing.module.scss';
import arrow from '../../assets/accounts/green_arrow.svg';

interface Factor {
  id: number;
  label: string;
  value: number;
}

interface Props {
  factors: Factor[];
}

export const WinIncreasing: React.FC<Props> = ({ factors }) => {
  return (
    <div className={styles.increase}>
      <div className={styles.increase__header}>
        <div className={styles['increase__img-container']}>
          <img src={arrow} alt='arrow' />
        </div>
        <h3 className={styles.increase__title}>Increasing Winnability</h3>
      </div>
      <ul className={styles.increase__list}>
        {factors.map((factor) => (
          <li key={factor.id} className={styles.increase__item}>
            <div className={styles['increase__block-left']}>
              <div className={styles['increase__id-container']}>
                <span className={styles.increase__id}>{factor.id}</span>
              </div>
            </div>
            <div className={styles['increase__block-center']}>
              <p className={styles.increase__label}>{factor.label}</p>
              <div className={styles['increase__bar-container']}>
                <div
                  className={styles.increase__bar}
                  style={{
                    width: `${factor.value}%`,
                    backgroundImage: 'linear-gradient(to left, #3BB979 0%, rgba(59, 185, 121, 0.6) 50%, transparent 100%)',
                  }}
                ></div>
                <span className={styles.increase__value}>+{factor.value}%</span>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};