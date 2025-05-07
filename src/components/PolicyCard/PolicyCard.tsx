import React from 'react';
import { PolicyItemType } from '../../types/PolicyItem';
import styles from './PolicyCard.module.scss';
import marineCargoImage from '../../assets/accounts/marine.png';
import generalLiabilityImage from '../../assets/accounts/general.png';
import workersCompImage from '../../assets/accounts/workers.png';
import propertyImage from '../../assets/accounts/property.png';
import umbrellaImage from '../../assets/accounts/umbrella.png';

interface Props {
  item: PolicyItemType;
}

export const PolicyCard: React.FC<Props> = ({ item }) => {
  let imageSrc;

  switch (item.policyName) {
    case 'Marine Cargo':
      imageSrc = marineCargoImage;
      break;
    case 'General Liability':
      imageSrc = generalLiabilityImage;
      break;
    case 'Workers Comp':
      imageSrc = workersCompImage;
      break;
    case 'Property':
      imageSrc = propertyImage;
      break;
    case 'Umbrella':
      imageSrc = umbrellaImage;
      break;
    default:
      imageSrc = marineCargoImage;
  }

  return (
    <div className={styles.policy}>
      <div className={styles.policy__header}>
        <div className={styles['policy__img-container']}>
          <img src={imageSrc} alt={item.policyName} className={styles.policy__icon} />
        </div>
        <h4 className={styles.policy__name}>
          {item.policyName}
        </h4>
      </div>
      <div className={styles.policy__info}>
        <span className={styles.policy__label}>Premium:</span>
        <span className={styles.policy__value}>{item.premium}</span>
      </div>
      <div className={styles.policy__info}>
        <span className={styles.policy__label}>Eff. Date:</span>
        <span className={styles.policy__value}>{item.effDate}</span>
      </div>
    </div>
  );
};