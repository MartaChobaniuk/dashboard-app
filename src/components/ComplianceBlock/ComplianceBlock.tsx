import styles from './ComplianceBlock.module.scss';
import items from '../../data/compliance.json';
import checkmark from '../../assets/accounts/checkmark_green.svg';

export const ComplianceBlock = () => {
  return (
    <div className={styles.compliance}>
      <ul className={styles.compliance__list}>
        {items.map((item, index) => (
          <li key={index} className={styles.compliance__item}>
            <div className={styles.compliance__icon}>
              <img src={checkmark} alt="Status" />
            </div>
            <span className={styles.compliance__label}>{item.label}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};