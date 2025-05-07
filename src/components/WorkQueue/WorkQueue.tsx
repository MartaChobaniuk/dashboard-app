import { useEffect, useState } from 'react';
import styles from './WorkQueue.module.scss';
import { WorkQueueItem } from '../../types/WorkQueueItem';
import workQueueData from '../../data/work-queue.json';
import details_img from '../../assets/dashboard/details_button.svg';
import classNames from 'classnames';
import { Tab } from '../../types/Tab';

export const WorkQueue = () => {
  const [data, setData] = useState<WorkQueueItem[]>([]);
  const [filteredData, setFilteredData] = useState<WorkQueueItem[]>([]);
  const [activeTab, setActiveTab] = useState<string>('');
  const [tabs, setTabs] = useState<Tab[]>([
    { label: 'Assigned to me', count: 0 },
    { label: 'Pending Review', count: 0 },
    { label: 'Referrals', count: 0 },
  ]);

  useEffect(() => {
    setData(workQueueData);
  }, []);

  useEffect(() => {
    let filtered: WorkQueueItem[] = [];
    if (activeTab === 'Assigned to me') {
      filtered = data;
    } else if (activeTab === 'Pending Review') {
      filtered = data.filter(item => item.status.label === 'Pending Review');
    } else if (activeTab === 'Referrals') {
      filtered = data.filter(item => item.type === 'Underwriter Referral');
    } else {
      filtered = data;
    }
    setFilteredData(filtered);
  }, [activeTab, data]);

  useEffect(() => {
    setTabs([
      { label: 'Assigned to me', count: data.length },
      { label: 'Pending Review', count: data.filter(item => item.status.label === 'Pending Review').length },
      { label: 'Referrals', count: data.filter(item => item.type === 'Underwriter Referral').length },
    ]);
  }, [data]);

  const handleTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel);
  };

  return (
    <div className={styles.queue}>
      <h3 className={styles.queue__title}>Work Queue</h3>
      <div className={styles.queue__tabs}>
        {tabs.map((tab) => (
          <button
            key={tab.label}
            className={classNames(styles.queue__tab, {
              [styles['queue__tab--active']]: activeTab === tab.label,
            })}
            onClick={() => handleTabClick(tab.label)}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>
      <table className={styles.queue__table}>
        <thead className={styles.queue__head}>
          <tr className={styles.queue__tr}>
            <th className={styles.queue__subtitle}>ORIGINATOR</th>
            <th className={styles.queue__subtitle}>CLIENT/LINE</th>
            <th className={styles.queue__subtitle}>TYPE</th>
            <th className={styles.queue__subtitle}>STATUS</th>
            <th className={styles.queue__subtitle}>CREATED</th>
            <th className={styles.queue__subtitle}></th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((row, index) => (
            <tr key={index} className={styles.queue__row}>
              <td className={styles.queue__column}>
                <div className={styles.queue__originator}>
                  <div className={styles.queue__initials}>
                    {row.originator.initials}
                  </div>
                  {row.originator.name}
                </div>
              </td>
              <td>
                <div>{row.clientLine.client}</div>
                <div className={styles.queue__line}>{row.clientLine.line}</div>
              </td>
              <td>{row.type}</td>
              <td>
                <div className={styles.queue__status}>
                  <span
                    className={styles['queue__status-dot']}
                    style={{ backgroundColor: `#${row.status.color}` }}
                  ></span>
                  {row.status.label}
                </div>
              </td>
              <td>{row.created}</td>
              <td
                className={styles.queue__details}
                onClick={() => {
                  alert(`Details for ${row.clientLine.client}`);
                }}
              >
                <img src={details_img} alt='info' className={styles.queue__icon} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};