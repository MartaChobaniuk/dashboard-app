import styles from './AccountStatus.module.scss';
import statusItems from '../../data/account-status.json'
import checkmark from '../../assets/accounts/checkmark_green.svg';
import checkmark_dis from '../../assets/accounts/checkmark_gray.svg';
import classNames from 'classnames';
import React from 'react';

export const AccountStatus = () => {
  return (
    <div className={styles.status}>
      <ul className={styles.status__list}>
        {statusItems.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div
              className={classNames(styles.status__line, {
                [styles['status__line--dis']]: !item.completed,
              })}
                style={{
                  width: `calc(100% - ${37 * 1.5}px)`,
                  left: `calc(${42 * 0.75}px)`,
                  top: '18px',
                  transform: 'translateY(-50%)',
                  position: 'absolute',
                }}
              ></div>
            )}
            <li key={index} className={styles.status__item}>
              <div
                className={classNames(styles['status__img-container'], {
                  [styles['status__img-container--dis']]: !item.completed,
                })}
              >
                {item.completed && <img src={checkmark} alt="Completed" />}
                {!item.completed && <img src={checkmark_dis} alt="Not completed" />}
              </div>
              <span className={styles.status__label}>{item.label}</span>
            </li>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};