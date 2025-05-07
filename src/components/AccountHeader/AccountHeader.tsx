import styles from './AccountHeader.module.scss';
import logo from '../../assets/accounts/marine_img.svg';

export const AccountHeader = () => {
  return (
    <div className={styles['account-header']}>
      <div className={styles['account-header__img-container']}>
        <img src={logo} alt='logo' className={styles['account-header__icon']} />
      </div>
      <div className={styles['account-header__block']}>
        <h3 className={styles['account-header__title']}>
          Maritime Logistics Corp
        </h3>
        <div className={styles['account-header__shell']}>
          <p className={styles['account-header__text']}>
            425 Harbor Boulevard, Suite 300<br />Seattle, WA 98104
          </p>
          <div className={styles['account-header__line']}></div>
          <p className={styles['account-header__text']}>
            <span className={styles['account-header__subtitle-gray']}>Existing account</span><br />
            <span className={styles['account-header__subtitle-white']}>54383</span>
          </p>
          <div className={styles['account-header__line']}></div>
          <p className={styles['account-header__text']}>
            <span className={styles['account-header__subtitle-gray']}>Broker</span><br />
            <span className={styles['account-header__subtitle-white']}>Marsh McLennan</span>
          </p>
          <div className={styles['account-header__line']}></div>
          <p className={styles['account-header__text']}>
            <span className={styles['account-header__subtitle-gray']}>UNDERWRITER</span><br />
            <span className={styles['account-header__subtitle-white']}>Kate Johnson</span>
          </p>
        </div>
      </div>
    </div>
  );
};