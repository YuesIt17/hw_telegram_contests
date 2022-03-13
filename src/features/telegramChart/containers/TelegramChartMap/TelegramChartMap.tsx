import React, {useMemo} from 'react';
import {TelegramChartLine} from '../../components';
import {TTelegramChartMap} from './types';
import {CHART_DELTA_MAP_Y} from '../../constants';
import {omit} from '../../../../utils/utils';
import {TChartDataLine} from '../../../../utils/prepareData/types';
import {useStyles} from './styles';

const getChartData = (data: TChartDataLine[]) =>
  data.map((item) => {
    const chartData = omit(item, 'points');
    return {
      ...chartData,
      points: item.pointsMap,
    };
  });

export const TelegramChartMap = ({
  data,
  maxDataX,
  maxDataY,
  width,
}: TTelegramChartMap) => {
  const styles = useStyles({width});
  const maxDataMapY = useMemo(
    () => Math.round(maxDataY / CHART_DELTA_MAP_Y),
    [maxDataY]
  );
  const chartData = getChartData(data);

  if (!chartData) return null;
  return (
    <div style={styles.chartMap} data-testid="telegramChartMap">
      <TelegramChartLine
        data={chartData}
        maxDataX={maxDataX}
        maxDataY={maxDataMapY}
      />
    </div>
  );
};
