import React from 'react';
import styles from './MarketIntelligence.module.scss';

export const MarketIntelligence = () => {
  const marketData = {
    title: 'Market intelligence',
    items: [
      { color: '#B93B3B', text: 'Rate hardening in Cyber market - +15% YoY' },
      { color: '#FDD261', text: 'New capacity entering Marine market' },
      { color: '#1E40AF', text: 'Environmental regulatory changes in CA' },
    ],
  };

  return (
    <div className={styles.intelligence}>
      <h2 className={styles.intelligence__title}>Market Intelligence</h2>
      <ul className={styles.intelligence__list}>
        {marketData.items.map((item, index) => (
          <React.Fragment key={index}>
            <li className={styles.intelligence__item}>
              <span
                className={styles.intelligence__indicator}
                style={{ backgroundColor: item.color }}
              ></span>
              <span className={styles.intelligence__text}>{item.text}</span>
            </li>
            <div className={styles.intelligence__line}></div>
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};