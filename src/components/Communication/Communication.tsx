import { useEffect, useState } from 'react';
import styles from './Communication.module.scss';
import communicationData from '../../data/communication.json';
import { CommunicationItemType } from '../../types/Communication';
import { CommunicationItem } from '../CommunicationItem';
import classNames from 'classnames';

export const Communication = () => {
  const [communications, setCommunications] = useState<CommunicationItemType[]>([]);
  const [query, setQuery] = useState<string>('');
  const [activeButton, setActiveButton] = useState<string | null>(null);

  useEffect(() => {
    setCommunications(communicationData as CommunicationItemType[]);
  }, []);

  const handleButtonClick = (buttonName: string) => {
    alert(`You clicked the button: ${buttonName}`);
    setActiveButton(buttonName);
  };

  return (
    <div className={styles.communication}>
      <div className={styles.communication__header}>
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          type='text'
          placeholder='Search'
          className={styles.communication__input}
        />
        <button
          className={classNames(styles.communication__button, {
            [styles['communication__button--active']]: activeButton === 'Filter',
          })}
          type='button'
          onClick={() => handleButtonClick('Filter')}
        >
          <span className={styles['communication__button-text']}>Filter</span>
        </button>
        <button
          className={classNames(styles.communication__button, {
            [styles['communication__button--active']]: activeButton === 'Group',
          })}
          type='button'
          onClick={() => handleButtonClick('Group')}
        >
          <span className={styles['communication__button-text']}>Group</span>
        </button>
      </div>
      <div className={styles.communication__list}>
        {communications.map((item, index) => (
          <CommunicationItem key={index} item={item} />
        ))}
      </div>
    </div >
  );
}