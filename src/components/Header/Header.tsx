import { useEffect, useState } from 'react';
import styles from './Header.module.scss';
import headerData from '../../data/header.json';
import { HeaderType } from '../../types/Header';

export const Header = () => {
  const [query, setQuery] = useState('');
  const [data, setData] = useState<HeaderType | null>(null);

  useEffect(() => {
    setData(headerData as HeaderType);
  }, []);

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.header__title}>
          {data && (
            `Hi ${data.name} , welcome! You have ${data.tasks} open tasks.`
          )}
        </h1>
        <div className={styles.header__block}>
          <input
            className={styles.header__search}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search...'
            type='text'
          />
          <div className={styles.header__initials}>{data?.initials}</div>
        </div>
      </div>
    </>
  );
};