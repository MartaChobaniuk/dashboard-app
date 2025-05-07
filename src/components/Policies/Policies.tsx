import { useEffect, useState } from 'react';
import styles from './Policies.module.scss';
import policiesData from '../../data/policies.json';
import { Policy } from '../../types/Policy';
import { getPolicyStatusColor } from '../../helpers/getPolicyStatusColor';
import details_img from '../../assets/dashboard/details_button.svg';
import classNames from 'classnames';
import { getLossRatioColor } from '../../helpers/getLossRatio';
import { getLineColor } from '../../helpers/getLineColor';

export const Policies = () => {
  const [policies, setPolicies] = useState<Policy[]>([]);
  const [query, setQuery] = useState<string>('');
  const [activeButton, setActiveButton] = useState<string | null>(null);

  useEffect(() => {
    setPolicies(policiesData as Policy[]);
  }, []);

  const handleButtonClick = (buttonName: string) => {
    alert(`You clicked the button: ${buttonName}`);
    setActiveButton(buttonName);
  };

  const validRateChanges = policies
    .map((policy) => Number(policy.rateChange))
    .filter((rate) => !isNaN(rate));

  const averageRateChange =
    validRateChanges.length > 0
      ? validRateChanges.reduce((sum, rate) => sum + rate, 0) / validRateChanges.length
      : 'N/A';

  const numericLossRatios = policies
    .map((policy) => Number(policy.lossRatio))
    .filter((lossRatio) => !isNaN(lossRatio));

  const averageLossRatio =
    numericLossRatios.length > 0
      ? numericLossRatios.reduce((sum, ratio) => sum + ratio, 0) / numericLossRatios.length
      : 'N/A';

  return (
    <div className={styles.policies}>
      <div className={styles.policies__header}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          placeholder='Search'
          className={styles.policies__input}
        />
        <button
          className={classNames(styles.policies__button, {
            [styles['policies__button--active']]: activeButton === 'Filter',
          })}
          type='button'
          onClick={() => handleButtonClick('Filter')}
        >
          <span className={styles['policies__button-text']}>Filter</span>
        </button>
        <button
          className={classNames(styles.policies__button, {
            [styles['policies__button--active']]: activeButton === 'Group',
          })}
          type='button'
          onClick={() => handleButtonClick('Group')}
        >
          <span className={styles['policies__button-text']}>Group</span>
        </button>
      </div>
      <table className={styles.policies__table}>
        <thead className={styles.policies__head}>
          <tr className={styles.policies__tr}>
            <th className={styles.policies__subtitle}>LINE</th>
            <th className={styles.policies__subtitle}>EFF DATE</th>
            <th className={styles.policies__subtitle}>EXP DATE</th>
            <th className={styles.policies__subtitle}>STATUS</th>
            <th className={styles.policies__subtitle}>EXPIRING TECH</th>
            <th className={styles.policies__subtitle}>EXPIRING PREMIUM</th>
            <th className={styles.policies__subtitle}>RENEWAL TO TECH</th>
            <th className={styles.policies__subtitle}>RENEWAL TECH</th>
            <th className={styles.policies__subtitle}>RENEWAL PREMIUM</th>
            <th className={styles.policies__subtitle}>RATE CHANGE</th>
            <th className={styles.policies__subtitle}>LOSS RATIO</th>
            <th className={styles.policies__subtitle}></th>
          </tr>
        </thead>
        <tbody className={styles.policies__body}>
          {policies.map((policy) => (
            <tr key={policy.policyNumber} className={styles.policies__row}>
              <td className={styles.policies__column}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '30px',
                      height: '30px',
                      borderRadius: '50%',
                      backgroundColor: getLineColor(policy.line),
                      display: 'block',
                    }}
                  ></span>
                  {policy.line}
                </div>
              </td>
              <td className={styles.policies__column}>{policy.effDate}</td>
              <td className={styles.policies__column}>{policy.expDate}</td>
              <td className={styles.policies__column}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: getPolicyStatusColor(policy.status),
                      display: 'inline-block',
                      padding: '0 2px',
                    }}
                  ></span>
                  {policy.status}
                </div>
              </td>
              <td className={styles.policies__column}>${Number(policy.expiringTech).toLocaleString()}</td>
              <td className={styles.policies__column}>${Number(policy.expiringPremium).toLocaleString()}</td>
              <td className={styles.policies__column}>${Number(policy.renewalToTech).toLocaleString()}</td>
              <td className={styles.policies__column}>${Number(policy.renewalTech).toLocaleString()}</td>
              <td className={styles.policies__column}>${Number(policy.renewalPremium).toLocaleString()}</td>
              <td
                style={{ color: Number(policy.rateChange) > 5 ? 'red' : 'inherit' }}
                className={styles.policies__column}
              >
                {isNaN(Number(policy.rateChange)) ? policy.rateChange : `${policy.rateChange}%`}
              </td>
              <td className={styles.policies__column}>
                <span
                  className={classNames(styles.policies__ratio, {
                    [styles['policies__ratio--black-text']]:
                      parseInt(policy.lossRatio, 10) >= 35 &&
                      parseInt(policy.lossRatio, 10) < 60,
                  })}
                  style={{ backgroundColor: getLossRatioColor(policy.lossRatio) }}
                >
                  {isNaN(Number(policy.lossRatio)) ? policy.lossRatio : `${policy.lossRatio}%`}
                </span>
              </td>
              <td className={styles.policies__column}>
                <img
                  src={details_img} alt='info'
                  className={styles.policies__icon}
                  onClick={() => alert('Details clicked:' + policy.line)}
                />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot className={styles.policies__foot}>
          <tr>
            <td className={styles.policies__column}></td>
            <td className={styles.policies__column}></td>
            <td className={styles.policies__column}></td>
            <td className={styles.policies__column}>TOTAL ({policies.length})</td>
            <td className={styles.policies__column}>
              ${policies.reduce((sum, policy) => sum + Number(policy.expiringTech), 0).toLocaleString()}
            </td>
            <td className={styles.policies__column}>
              ${policies.reduce((sum, policy) => sum + Number(policy.expiringPremium), 0).toLocaleString()}
            </td>
            <td className={styles.policies__column}>
              ${policies.reduce((sum, policy) => sum + Number(policy.renewalToTech), 0).toLocaleString()}
            </td>
            <td className={styles.policies__rcolumn}>
              ${policies.reduce((sum, policy) => sum + Number(policy.renewalTech), 0).toLocaleString()}
            </td>
            <td className={styles.policies__column}>
              ${policies.reduce((sum, policy) => sum + Number(policy.renewalPremium), 0).toLocaleString()}
            </td>
            <td className={styles.policies__column}>
              {typeof averageRateChange === 'number'
                ? `${averageRateChange.toFixed(1)}%`
                : averageRateChange}
            </td>
            <td className={styles.policies__column}>
              <span
                className={classNames(styles.policies__ratio, {
                  [styles['policies__ratio--black-text']]:
                    typeof averageLossRatio === 'number' && averageLossRatio >= 35 && averageLossRatio < 60,
                })}
                style={{ backgroundColor: getLossRatioColor(averageLossRatio) }}
              >
                {typeof averageLossRatio === 'number'
                  ? `${averageLossRatio.toFixed(1)}%`
                  : averageLossRatio}
              </span>
            </td>
            <td className={styles.policies__column}></td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};