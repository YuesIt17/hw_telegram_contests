import React from 'react';
import {useStyles} from './styles';
import {TTelegramChart} from './types';
import {useTelegramChart} from './hook';
import {TelegramChartFooter, TelegramChartLine} from '../../components';

export const TelegramChart = ({width}: TTelegramChart) => {
  const styles = useStyles({width});
  const {data, maxDataX, maxDataY, labelsX, labelsY, onChangeHadler} =
    useTelegramChart();

  if (!data) return null;
  return (
    <div style={styles.chart}>
      <TelegramChartLine
        data={data}
        maxDataX={maxDataX}
        maxDataY={maxDataY}
        labelsX={labelsX}
        labelsY={labelsY}
      />
      <TelegramChartFooter data={data} onChange={onChangeHadler} />
    </div>
  );
};
