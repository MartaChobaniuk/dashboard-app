import { useEffect, useRef, useState } from 'react';
import styles from './MyAccounts.module.scss';
import { Account } from '../../types/Account';
import accountsData from '../../data/my-accounts.json';
import { getStatusColor } from '../../helpers/getStatusColor';
import details_img from '../../assets/dashboard/details_button.svg';
import { getLossRatioColor } from '../../helpers/getLossRatio';
import classNames from 'classnames';

export const MyAccounts = () => {
  const [accounts, setAccounts] = useState<Account[]>([]);
  const [query, setQuery] = useState<string>('');
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const buttonsRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    setAccounts(accountsData as Account[]);
  }, []);

  const getVinnabilityDots = (vinnability: Account['vinnability']) => {
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

  const handleButtonClick = (buttonName: string) => {
    alert(`You clicked the button: ${buttonName}`);
    setActiveButton(buttonName);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (buttonsRef.current && !(buttonsRef.current as HTMLElement).contains(event.target as Node)) {
      setActiveButton(null);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className={styles.accounts}>
      <div className={styles.accounts__header} ref={buttonsRef}>
        <h3 className={styles.accounts__title}>My Accounts</h3>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          placeholder='Search'
          className={styles.accounts__input}
        />
        <button
          className={classNames(styles.accounts__button, {
            [styles['accounts__button--active']]: activeButton === 'Filter',
          })}
          type='button'
          onClick={() => handleButtonClick('Filter')}
        >
          <span className={styles['accounts__button-text']}>Filter</span>
        </button>
        <button
          className={classNames(styles.accounts__button, {
            [styles['accounts__button--active']]: activeButton === 'Sort',
          })}
          type='button'
          onClick={() => handleButtonClick('Sort')}
        >
          <span className={styles['accounts__button-text']}>Sort</span>
        </button>
        <button
          className={classNames(styles.accounts__button, {
            [styles['accounts__button--active']]: activeButton === 'Group',
          })}
          onClick={() => handleButtonClick('Group')}
          type='button'
        >
          <span className={styles['accounts__button-text']}>Group</span>
        </button>
        <button
          className={classNames(styles['accounts__button-new'], {
            [styles['accounts__button-new--active']]: activeButton === 'New',
          })}
          type='button'
          onClick={() => handleButtonClick('New')}
        >
          <span className={styles['accounts__button-text']}>+New</span>
        </button>
      </div>
      <table className={styles.accounts__table}>
        <thead className={styles.accounts__head}>
          <tr className={styles.accounts__tr}>
            <th className={styles.accounts__subtitle}>ACCOUNT NAME/TYPE</th>
            <th className={styles.accounts__subtitle}>LINE</th>
            <th className={styles.accounts__subtitle}>BROKER</th>
            <th className={styles.accounts__subtitle}>RENEWAL DATE</th>
            <th className={styles.accounts__subtitle}>PREMIUM</th>
            <th className={styles.accounts__subtitle}>RATED PREMIUM</th>
            <th className={styles.accounts__subtitle}>LOSS RATIO</th>
            <th className={styles.accounts__subtitle}>APPETITE</th>
            <th className={styles.accounts__subtitle}>STATUS</th>
            <th className={styles.accounts__subtitle}>TIER AGE</th>
            <th className={styles.accounts__subtitle}>VINNABILITY</th>
            <th className={styles.accounts__subtitle}></th>
          </tr>
        </thead>
        <tbody>
          {accounts.map((account, index) => (
            <tr key={index} className={styles.accounts__row}>
              <td className={styles.accounts__column}>
                <div>{account.accountNameType.name}</div>
                <div className={styles.accounts__type}>{account.accountNameType.type}</div>
              </td>
              <td className={styles.accounts__column}>{account.line}</td>
              <td className={styles.accounts__column}>{account.broker}</td>
              <td className={styles.accounts__column}>{account.renewalDate}</td>
              <td className={styles['accounts__column--blue']}>{account.premium}</td>
              <td className={styles.accounts__column}>{account.ratedPremium}</td>
              <td className={styles.accounts__column}>
                <span
                  className={classNames(styles.accounts__ratio, {
                    [styles['accounts__ratio--black-text']]:
                      parseInt(account.lossRatio, 10) >= 35 &&
                      parseInt(account.lossRatio, 10) < 60,
                  })}
                  style={{ backgroundColor: getLossRatioColor(account.lossRatio) }}
                >
                  {account.lossRatio}
                </span>
              </td>
              <td className={styles['accounts__column--appetite']}>
                <span className={styles.accounts__appetite}>
                  {account.appetite}
                </span>
              </td>
              <td className={styles.accounts__column}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      backgroundColor: getStatusColor(account.status),
                      display: 'inline-block',
                      padding: '0 4px',
                    }}
                  ></span>
                  {account.status}
                </div>
              </td>
              <td className={styles.accounts__сolumn}>
                <span className={styles.accounts__tier}>
                  {account.tierAge}
                </span>
              </td>
              <td className={styles.accounts__сolumn}>
                <span className={styles.accounts__vinnability}>
                  {getVinnabilityDots(account.vinnability)} {account.vinnability}
                </span>
              </td>
              <td
                className={styles.accounts__сolumn}
                onClick={() => {
                  alert(`Details for ${account.accountNameType.name}`);
                }}
              >
                <img src={details_img} alt='info' className={styles.accounts__icon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};