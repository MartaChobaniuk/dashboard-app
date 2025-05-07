import React from 'react';
import styles from './CommunicationItem.module.scss';
import img from '../../assets/accounts/img_communc.svg';

interface Props {
  item: {
    type: 'new' | 'responded' | 'new_business';
    title: string;
    sender: string;
    date: string;
    message: string;
    attachments?: number;
  };
}

export const CommunicationItem: React.FC<Props> = ({ item }) => {
  const getTypeStyle = () => {
    switch (item.type) {
      case 'new':
        return styles.new;
      case 'responded':
        return styles.responded;
      case 'new_business':
        return styles.newBusiness;
      default:
        return '';
    }
  };

  const getTypeLabel = () => {
    switch (item.type) {
      case 'new':
        return 'NEW';
      case 'responded':
        return 'Responded';
      default:
        return '';
    }
  };

  return (
    <div className={styles.item}>
      <div className={styles.item__header}>
        {(item.type === 'new' || item.type === 'responded') && (
          <span className={`${styles.item__type} ${getTypeStyle()}`}>{getTypeLabel()}</span>
        )}
        <h3 className={styles.item__title}>{item.title}</h3>
      </div>
      <div className={styles.item__info}>
        <span className={styles.item__sender}>{item.sender} //</span>
        <span className={styles.item__date}>{item.date}</span>
      </div>
      <p className={styles.item__message}>{item.message}</p>
      <div className={styles.item__footer}>
        {item.attachments !== undefined && (
          <span
            className={styles.item__attachments}
            onClick={() => alert('Attachments clicked')}
          >
            <img src={img} alt='img' className={styles.item__icon} />
            {item.attachments} attachments
          </span>
        )}
        {(item.type === 'new' || item.type === 'new_business') && (
          <button
            className={styles.item__reply}
            onClick={() => alert('Reply clicked')}
          >
            Reply
          </button>
        )}
      </div>
    </div>
  );
}