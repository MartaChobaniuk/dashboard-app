import React from 'react';
import { GoalItem } from '../../types/Goals';
import styles from './LossRatioTarget.module.scss';
import blue_arrow from '../../assets/dashboard/blue_arrow.svg';
import green_arrow from '../../assets/dashboard/green_arrow.svg';

interface Props {
  goal: GoalItem;
}

export const LossRatioTarget: React.FC<Props> = ({ goal }) => {
  const { colorThresholds, colorOrder, currentValue, targetValue, name } = goal;

  const thresholds = {
    good: parseFloat(colorThresholds?.good || '0'),
    warning: parseFloat(colorThresholds?.warning || '0'),
    critical: parseFloat(colorThresholds?.critical || '0'),
  };

  const totalThreshold = Object.values(thresholds).reduce((sum, value) => sum + value, 0);

  const getColorAndWidth = (thresholdKey: 'good' | 'warning' | 'critical') => {
    const value = thresholds[thresholdKey];
    const width = (value / totalThreshold) * 100;
    let color = '';

    switch (thresholdKey) {
      case 'good':
        color = '#3BB979';
        break;
      case 'warning':
        color = '#FDD261';
        break;
      case 'critical':
        color = '#CC0101';
        break;
      default:
        color = 'transparent';
    }

    return { width, color };
  };

  const orderToRender = colorOrder || ['good', 'warning', 'critical'];

  const diff = (currentValue - targetValue).toFixed(1);

  return (
    <div className={styles.progress}>
      <h3 className={styles.progress__title}>{name}</h3>
      <div className={styles.progress__block}>
        <p className={styles.progress__target}>{`TG: ${targetValue}%`}</p>
        <img src={blue_arrow} alt="blue arrow" className={styles.progress__arrow} />
      </div>
      <div className={styles.progress__bar}>
        {orderToRender.map((key) => {
          const { width, color } = getColorAndWidth(key);
          return width > 0 ? (
            <div
              key={key}
              className={styles.progress__segment}
              style={{ width: `${width}%`, backgroundColor: color }}
            ></div>
          ) : null;
        })}
        <div
          className={styles['progress__current-value']}
        >
          {currentValue}%
        </div>
      </div>
      <div className={styles['progress__block-bottom']}>
          <img src={green_arrow} alt="blue arrow" className={styles.progress__arrow} />
          <p className={styles.progress__diff}>{`${diff}%(GOOD)`}</p>
        </div>
    </div>
  );
};