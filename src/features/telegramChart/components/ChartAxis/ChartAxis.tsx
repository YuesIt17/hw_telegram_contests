import React, {memo} from 'react';
import {FONT_SIZE} from '../../constants';
import {useStyles} from './styles';
import {TChartAxis} from './types';

export const ChartAxis = memo(
  ({
    points,
    typeAxis,
    labelPaddingX = 0,
    labelPaddingY = 0,
    labels,
    maxDataX,
  }: TChartAxis) => {
    const styles = useStyles();
    return (
      <g>
        <polyline css={styles.line} points={points} />
        {typeAxis === 'x' &&
          labels.map((item, index) => (
            <text
              key={index}
              x={item.coordinate}
              y={labelPaddingY + FONT_SIZE * 2}
              css={styles.label}
            >
              {item.label}
            </text>
          ))}
        {typeAxis === 'y' &&
          labels.map((item, index) => (
            <g key={index}>
              <text
                x={labelPaddingX}
                y={item.coordinate - FONT_SIZE}
                css={styles.label}
              >
                {item.label}
              </text>
              <polyline
                css={styles.line}
                points={`${labelPaddingX},${item.coordinate} ${maxDataX},${item.coordinate}`}
              />
            </g>
          ))}
      </g>
    );
  }
);

ChartAxis.displayName = 'ChartAxis';
