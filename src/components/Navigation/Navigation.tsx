import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.scss';
import { Paths } from '../../types/Paths';
import classNames from 'classnames';
import arrow_left from '../../assets/dashboard/arrow_left.svg';
import arrow_right from '../../assets/dashboard/arrow_right.svg';

export const Navigation = () => {
  const navLinksRef = useRef<HTMLDivElement>(null);
  const scrollStep = 100;
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const navLinks = [
    { path: Paths.Dashboard, label: 'Dashboard' },
    { path: Paths.Accounts, label: 'Accounts' },
    { path: Paths.Brokers, label: 'Brokers' },
    { path: Paths.Submissions, label: 'Submissions' },
    { path: Paths.Organizations, label: 'Organizations' },
    { path: Paths.Goals_rules, label: 'Goals&Rules' },
    { path: Paths.Admin, label: 'Admin' },
  ];

  const getActiveLink = ({ isActive }: { isActive: boolean }) =>
    classNames(styles.nav__link, {
      [styles['nav__link--active']]: isActive,
    });

  const updateScrollButtons = () => {
    if (navLinksRef.current) {
      setCanScrollLeft(navLinksRef.current.scrollLeft > 0);
      setCanScrollRight(
        navLinksRef.current.scrollLeft < navLinksRef.current.scrollWidth - navLinksRef.current.clientWidth
      );
    } else {
      setCanScrollLeft(false);
      setCanScrollRight(false);
    }
  };

  const scrollLeft = () => {
    if (navLinksRef.current) {
      navLinksRef.current.scrollLeft -= scrollStep;
    }
  };

  const scrollRight = () => {
    if (navLinksRef.current) {
      navLinksRef.current.scrollLeft += scrollStep;
    }
  };

  useEffect(() => {
    updateScrollButtons();
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  useEffect(() => {
    const currentRef = navLinksRef.current;

    if (currentRef) {
      currentRef.addEventListener('scroll', updateScrollButtons);
      return () => {
        currentRef.removeEventListener('scroll', updateScrollButtons);
      };
    }

    return () => {};
  }, []);

  return (
    <>
      <div className={styles.nav}>
        <div className={styles.nav__links} ref={navLinksRef}>
          {navLinks.map(({ path, label }) => (
            <NavLink
              key={path}
              to={path}
              className={getActiveLink}
            >
              {label}
            </NavLink>
          ))}
        </div>
        <div className={styles.nav__buttons}>
          <button
            className={classNames(styles.nav__button, {
              [styles['nav__button--active']]: canScrollLeft,
            })}
            onClick={scrollLeft}
          >
            <img src={arrow_left} alt='arrow' className={styles.nav__icon} />
          </button>
          <button className={classNames(styles.nav__button, {
            [styles['nav__button--active']]: canScrollRight,
          })}
            onClick={scrollRight}
          >
            <img src={arrow_right} alt='arrow' className={styles.nav__icon} />
          </button>
        </div>
      </div>
    </>
  );
};