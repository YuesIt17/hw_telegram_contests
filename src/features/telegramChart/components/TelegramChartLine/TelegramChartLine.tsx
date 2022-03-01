import React from 'react';
import {ChartAxis} from '../ChartAxis';
import {ChartLine} from '../ChartLine';
import {PEDDING_CHART_SIZE} from '../../constants';
import {TTelegramChartLine} from './types';

export const TelegramChartLine = ({
  data,
  maxDataX,
  maxDataY,
  labelsX,
  labelsY,
  width,
}: TTelegramChartLine) => {
  if (!data) return null;
  return (
    <svg
      viewBox={`0 0 ${maxDataX + PEDDING_CHART_SIZE * 2} ${
        maxDataY + PEDDING_CHART_SIZE
      }`}
      style={{width}}
    >
      {data.map((line) => (
        <ChartLine
          key={line.name}
          points={line.points}
          stroke={line.color}
          isVisible={line.isVisible}
        />
      ))}
      <ChartAxis
        typeAxis="x"
        labels={labelsX}
        labelPaddingY={maxDataY}
        points={`${0},${maxDataY} ${maxDataX},${maxDataY}`}
      />
      <ChartAxis
        typeAxis="y"
        labels={labelsY}
        points={`${0},${0} ${0},${maxDataY}`}
        maxDataX={maxDataX}
      />
    </svg>
  );
};
