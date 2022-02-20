import React from "react";
import { TChartAxis } from "./types";

const FONT_SIZE = 14;
const PADDING_AXIS_X = 20;

const ChartAxis = ({points, typeAxis, labelPaddingX = 0, labelPaddingY = 0, labels, maxDataX}: TChartAxis) => (
  <g>
    <polyline fill="none" stroke="#ccc" points={points} />
    {typeAxis === 'x' && (
      labels.map((item, index) => 
        <text key={index} x={item.coordinate} y={labelPaddingY + FONT_SIZE * 2} style={{fontSize: FONT_SIZE}}>{item.label}</text>
      )
    )}
    {typeAxis === 'y' && (
      labels.map((item, index) => 
        <g key={index}>
          <text x={labelPaddingX} y={item.coordinate - FONT_SIZE} style={{fontSize: FONT_SIZE}}>{item.label}</text>
          <polyline fill="none" stroke="#ccc" points={`${labelPaddingX},${item.coordinate} ${maxDataX},${item.coordinate}`} />
        </g>
      )
    )}
  </g>
);

export default ChartAxis;
