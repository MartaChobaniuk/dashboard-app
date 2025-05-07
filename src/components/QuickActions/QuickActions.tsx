import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import styles from './QuickActions.module.scss';

export const QuickActions = () => {
  const [activeButton, setActiveButton] = useState<string | null>(null);
  const quickActionsRef = useRef<HTMLDivElement | null>(null);

  const handleButtonClick = (buttonName: string) => {
    alert(`You clicked the button: ${buttonName}`);
    setActiveButton(buttonName);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (quickActionsRef.current && !(quickActionsRef.current as HTMLElement).contains(event.target as Node)) {
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
    <div className={styles.actions} ref={quickActionsRef}>
      <h2 className={styles.actions__title}>Quick Actions</h2>
      <div className={styles.actions__buttons}>
        <button
          type='button'
          className={classNames(styles.actions__button, {
            [styles['actions__button--active']]: activeButton === 'New Submission',
          })}
          onClick={() => handleButtonClick('New Submission')}
        >
          <span className={styles['actions__button-text']}>New Submission</span>
        </button>

        <button
          type='button'
          className={classNames(styles.actions__button, {
            [styles['actions__button--active']]: activeButton === 'Quote Builder',
          })}
          onClick={() => handleButtonClick('Quote Builder')}
        >
          <span className={styles['actions__button-text']}>Quote Builder</span>
        </button>

        <button
          type='button'
          className={classNames(styles.actions__button, {
            [styles['actions__button--active']]: activeButton === 'Risks Models',
          })}
          onClick={() => handleButtonClick('Risks Models')}
        >
          <span className={styles['actions__button-text']}>Risks Models</span>
        </button>

        <button
          type='button'
          className={classNames(styles.actions__button, {
            [styles['actions__button--active']]: activeButton === 'Documents Upload',
          })}
          onClick={() => handleButtonClick('Documents Upload')}
        >
          <span className={styles['actions__button-text']}>Documents Upload</span>
        </button>
      </div>
    </div>
  );
};