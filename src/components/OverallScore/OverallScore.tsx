import React from 'react';
import styles from './OverallScore.module.scss';

interface Props {
  score: number;
  rating: string;
}

export const OverallScore: React.FC<Props> = ({ score, rating }) => {
  const getVinnabilityDots = (vinnability: string) => {
    const baseColor = '#64748b';
    const activeColor = '#3b82f6';
    let dots = [];
    let activeCount = 0;

    switch (vinnability) {
      case 'Very Strong':
        activeCount = 4;
        break;
      case 'Strong':
        activeCount = 3;
        break;
      case 'Medium':
        activeCount = 2;
        break;
      default:
        activeCount = 1;
    }

    for (let i = 0; i < 4; i++) {
      dots.push(
        <span
          key={i}
          style={{
            width: '8px',
            height: '8px',
            borderRadius: '50%',
            backgroundColor: i < activeCount ? activeColor : baseColor,
            display: 'inline-block',
            marginRight: '4px',
          }}
        />
      );
    }

    return dots;
  };

  return (
    <div className={styles['overall-score']}>
      <div className={styles['overall-score__title']}>Overall Score</div>
      <div className={styles['overall-score__block']}>
        <div className={styles['overall-score__value']}>{score}%</div>
        <div className={styles['overall-score__rating']}>
          <span className={styles.accounts__vinnability}>
            {getVinnabilityDots(rating)} {rating}
          </span>
        </div>
      </div>
    </div>
  );
};