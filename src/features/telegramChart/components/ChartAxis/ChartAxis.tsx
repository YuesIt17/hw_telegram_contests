import React from 'react';
import {FONT_SIZE} from '../../constants';
import {TChartAxis} from './types';

export const ChartAxis = ({
  points,
  typeAxis,
  labelPaddingX = 0,
  labelPaddingY = 0,
  labels,
  maxDataX,
}: TChartAxis) => (
  <g>
    <polyline stroke="#ccc" points={points} strokeWidth={0.5} />
    {typeAxis === 'x' &&
      labels.map((item, index) => (
        <text
          key={index}
          x={item.coordinate}
          y={labelPaddingY + FONT_SIZE * 2}
          style={{fontSize: FONT_SIZE}}
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
            style={{fontSize: FONT_SIZE}}
          >
            {item.label}
          </text>
          <polyline
            stroke="#ccc"
            strokeWidth={0.5}
            points={`${labelPaddingX},${item.coordinate} ${maxDataX},${item.coordinate}`}
          />
        </g>
      ))}
  </g>
);
