import {TChartData, TColumnKeyValue} from "../../api/telegramChart/types";
import {TChartLabel, TChartLine, TColumnValue} from "./types";

const SPACE_BETWEEN_LABEL_X = 60;
const SPACE_BETWEEN_LABEL_Y = 60;

export function parseDateTimeToInt(value: string, index: number, delta = 5) {
  const countDigit = value.toString().length;
  const rank = new Array(countDigit).fill(1).join('');
  return Math.round(((Number(value) / Number(rank)) + index * delta));
}

export function prepareData(data: TChartData) {
  let dataValuesX: (number | string)[] = [];
  let columnDataY: TColumnValue[] = [];

  const columnTypes = data.types as TColumnKeyValue;
  const columnNames = data.names as TColumnKeyValue;
  const columnColors = data.colors as TColumnKeyValue;

  data.columns.forEach(([key, ...values]) => {
    let column: TColumnValue = {
      values: [...values],
      type: columnTypes[key], 
      name: columnNames[key],
      color: columnColors[key]
    };
    if (key === 'x') {
      dataValuesX = column.values;
    } else {
      columnDataY.push(column);
    }
  });

  const maxDataX = parseDateTimeToInt(Math.max(...dataValuesX.map(x => Number(x))).toString(), dataValuesX.length);
  const maxDataY = Math.round(Math.max(...columnDataY.map(item => Math.max(...item.values.map(y => Number(y))))) / 100) * 100;

  const countLabelX = Math.round(maxDataX / SPACE_BETWEEN_LABEL_X);
  const indexRangeX = Math.round(dataValuesX.length / countLabelX);

  let labelsX: TChartLabel[] = [];
  const coordinatesX = dataValuesX.map((item, index) => {
    const x = parseDateTimeToInt(item.toString(), index);

    const remainderX = index % indexRangeX; 
   
    if (index === 0 || remainderX === 0) {
      const dataX = new Date(item);
      const labelX: TChartLabel = {
        label: dataX.toLocaleString('en-US', {day: 'numeric', month: 'short'}),
        coordinate: x
      }
      if(!labelsX.includes(labelX))
        labelsX.push(labelX);
    }

    return x;
  });

  const countLabelY = Math.round(maxDataY / SPACE_BETWEEN_LABEL_Y);
  
  const labelsY: TChartLabel[] = new Array(countLabelY)
    .fill(SPACE_BETWEEN_LABEL_Y)
    .reduce((result: number[], currentItem: number, currentIndex) => {
      const prevItem = currentIndex > 0 ? result[currentIndex - 1] : 0;
      const newItem = currentItem + prevItem;

      if (newItem < maxDataY) {
        result.push(currentItem + prevItem);
      }
      
      return result;
    }, [])
    .map((item: number) => {
      return {
        label: item.toString(),
        coordinate: maxDataY - item,
      }
    });

  const coordinates = columnDataY
    .map((item) => {
      const {values, ...data} = item;
      const points = values
        .map((value, index) => {
          return {
            x: coordinatesX[index],
            y: maxDataY - Number(value),
          }  
        });
      
        return {
          ...data,
          points: [...points],
        }
    });
  
  const lines: TChartLine[] = coordinates
    .map(item => {
      const {points, ...data} = item;
      return {
        points: points.map(element => {
          const x = element.x;
          const y = element.y;
          return `${x},${y}`;
        })
        .join(" "),
        ...data,
        isVisible: true,
      }
    });

  return {lines, maxDataX, maxDataY, labelsX, labelsY};
}