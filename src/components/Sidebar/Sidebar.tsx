import { useEffect, useState } from 'react';
import styles from './Sidebar.module.scss';
import { SidebarType } from '../../types/Sidebar';
import sidebarData from '../../data/sidebar.json';
import classNames from 'classnames';

export const Sidebar = () => {
  const [data, setData] = useState<SidebarType[]>([]);
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  useEffect(() => {
    setData(sidebarData as SidebarType[]);
  }, []);

  const handleItemClick = (itemName: string) => {
    setActiveItem(itemName);
    alert(`You selected: ${itemName}`);
  };

  const handleSectionClick = (sectionId: string) => {
    if (expandedSections.includes(sectionId)) {
      setExpandedSections(expandedSections.filter((id) => id !== sectionId));
    } else {
      setExpandedSections([...expandedSections, sectionId]);
    }
  };

  return (
    <div className={styles.sidebar}>
      {data.map((section) => (
        <div key={section.title} className={styles.sidebar__section}>
          <div
            className={classNames(styles.sidebar__header, {
              [styles['sidebar__header--active']]: expandedSections.includes(section.id),
            })}
            onClick={() => handleSectionClick(section.id)}
          >
            <p className={styles.sidebar__title}>
              {section.title}
            </p>
            {section.count !== undefined && (
              <p
                className={classNames(styles.sidebar__count, {
                  [styles['sidebar__count--active']]: expandedSections.includes(section.id),
                })}
              >
                {section.count}
              </p>
            )}
          </div>
          {section.items &&
            section.items.length > 0 &&
            expandedSections.includes(section.id) && (
              <ul className={styles.sidebar__list}>
                {section.items.map((item) => (
                  <li
                    key={item.name}
                    className={classNames(styles.sidebar__item, {
                      [styles['sidebar__item--active']]: activeItem === item.name,
                    })}
                    onClick={() => handleItemClick(item.name)}
                  >
                    {item.name}
                  </li>
                ))}
              </ul>
            )}
        </div>
      ))}
    </div>
  );
};