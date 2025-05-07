import React, { useEffect, useState } from 'react';
import styles from './PoliciesBlock.module.scss';
import policiesData from '../../data/account-policy.json';
import { PolicyCard } from '../PolicyCard';
import { PolicyItemType } from '../../types/PolicyItem';

export const PoliciesBlock: React.FC = () => {
  const [policies, setPolicies] = useState<PolicyItemType[]>([]);

  useEffect(() => {
    setPolicies(policiesData as PolicyItemType[]);
  }, []);

  return (
    <div className={styles['policies-block']}>
      <div className={styles['policies-block__cards']}>
        {policies.map((policy, index) => (
          <PolicyCard key={index} item={policy} />
        ))}
      </div>
    </div>
  );
};