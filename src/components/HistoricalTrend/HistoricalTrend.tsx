import React from 'react';
import styles from './HistoricalTrend.module.scss';
import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

interface Props {
  data: { month: string; value: number }[];
}

export const HistoricalTrend: React.FC<Props> = ({ data }) => {
  return (
    <div className={styles['historical-trend']}>
      <div className={styles['historical-trend__title']}>Historical trend</div>
      <div className={styles['historical-trend__chart-container']}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis
              dataKey="month"
              stroke="#8A8B98"
              tickLine={false}
              axisLine={false}
              tickMargin={-15}
              fontSize={16}
            />
            <YAxis
              stroke="#8A8B98"
              tickLine={false}
              axisLine={false}
              tickCount={0}
            />
            <Line
              type="linear"
              dataKey="value"
              stroke="#3B82F6"
              strokeWidth={5}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};