import React from "react";
import {ChartAxis} from "../../../../components/ChartAxis";
import {ChartCheckBox} from "../../../../components/ChartCheckBox";
import ChartLine from "../../../../components/ChartLine";
import {PEDDING_CHART_SIZE} from "../../constants";
import {useStyles} from "./styles";
import {TTelegramChart} from "./types";
import {useTelegramChart} from "./hook";


export const TelegramChart = ({width = 700}: TTelegramChart) => {
  const styles = useStyles({width});
  const {data, maxDataX, maxDataY, labelsX, labelsY, onChangeHadler} = useTelegramChart();

  if (!data) return null;
  return (
    <div style={styles.chart}>
      <svg viewBox={`0 0 ${maxDataX + PEDDING_CHART_SIZE * 2} ${maxDataY + PEDDING_CHART_SIZE * 2}`}>
        {data.map(line =>
          <ChartLine key={line.name} points={line.points} stroke={line.color} isVisible={line.isVisible} />
        )}
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
      {data.map(line =>
        <ChartCheckBox 
          key={line.name}
          name={line.name}
          value={line.isVisible || false}
          color={line.color}
          onChange={(field) => onChangeHadler(line, field.value)} 
        />
      )}
    </div>
  )
}
