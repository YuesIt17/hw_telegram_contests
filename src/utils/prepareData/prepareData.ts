import {
  TChartData,
  TColumnKeyValue,
  TColumnsValueAxis,
} from '../../api/telegramChart/types';
import {
  SPACE_BETWEEN_LABEL_X,
  SPACE_BETWEEN_LABEL_Y,
} from '../../features/telegramChart/constants';
import {TChartDataLabel, TChartDataLine, TColumnValue} from './types';

export function getColumnData(data: TChartData) {
  let dataValuesX: TColumnsValueAxis = [];
  const columnDataY: TColumnValue[] = [];

  const columnTypes = data.types as TColumnKeyValue;
  const columnNames = data.names as TColumnKeyValue;
  const columnColors = data.colors as TColumnKeyValue;

  data.columns.forEach(([key, ...values]) => {
    const column: TColumnValue = {
      values: [...values],
      type: columnTypes[key],
      name: columnNames[key],
      color: columnColors[key],
    };
    if (key === 'x') {
      dataValuesX = column.values;
    } else {
      columnDataY.push(column);
    }
  });

  return {dataValuesX, columnDataY};
}

export function parseDateTimeToInt(value: string, index: number, delta = 5) {
  const countDigit = value.toString().length;
  const rank = new Array(countDigit).fill(1).join('');
  return Math.round(Number(value) / Number(rank) + index * delta);
}

export function getPrepareDataAxisX(dataValuesX: TColumnsValueAxis) {
  const coordinatesX: number[] = [];
  const labelsX: TChartDataLabel[] = [];
  let maxDataX = 0;

  if (dataValuesX?.length > 0) {
    maxDataX = parseDateTimeToInt(
      Math.max(...dataValuesX.map((x) => Number(x))).toString(),
      dataValuesX.length
    );
    const countLabelX = Math.round(maxDataX / SPACE_BETWEEN_LABEL_X);
    const indexRangeX = Math.round(dataValuesX.length / countLabelX);

    dataValuesX.forEach((item, index) => {
      const x = parseDateTimeToInt(item.toString(), index);
      const remainderX = index % indexRangeX;

      if (index === 0 || remainderX === 0) {
        const dataX = new Date(item);
        const labelX: TChartDataLabel = {
          label: dataX.toLocaleString('en-US', {
            day: 'numeric',
            month: 'short',
          }),
          coordinate: x,
        };
        if (!labelsX.includes(labelX)) labelsX.push(labelX);
      }
      coordinatesX.push(x);
    });
  }

  return {coordinatesX, labelsX, maxDataX};
}

export function getPrepareDataAxisY(columnDataY: TColumnValue[]) {
  const maxDataY = Math.max(
    ...columnDataY.map((item) => Math.max(...item.values.map((y) => Number(y))))
  );
  const countLabelY = Math.round(maxDataY / SPACE_BETWEEN_LABEL_Y);

  const labelsY: TChartDataLabel[] = new Array(countLabelY)
    .fill(SPACE_BETWEEN_LABEL_Y)
    .reduce((result: number[], currentItem: number, currentIndex) => {
      const prevItem = currentIndex > 0 ? result[currentIndex - 1] : 0;
      const newItem = currentItem + prevItem;

      if (newItem < maxDataY || newItem <= SPACE_BETWEEN_LABEL_Y) {
        result.push(currentItem + prevItem);
      }

      return result;
    }, [])
    .map((item: number) => {
      return {
        label: item.toString(),
        coordinate: Math.abs(maxDataY - item),
      };
    });

  return {labelsY, maxDataY};
}

export function prepareData(data: TChartData) {
  const {dataValuesX, columnDataY} = getColumnData(data);

  const {coordinatesX, labelsX, maxDataX} = getPrepareDataAxisX(dataValuesX);
  const {labelsY, maxDataY} = getPrepareDataAxisY(columnDataY);

  const coordinates = columnDataY.map((item) => {
    const {values, ...data} = item;
    const points = values.map((value, index) => {
      return {
        x: coordinatesX[index],
        y: maxDataY - Number(value),
      };
    });

    return {
      ...data,
      points: [...points],
    };
  });

  const lines: TChartDataLine[] = coordinates.map((item) => {
    const {points, ...data} = item;
    return {
      points: points
        .map((element) => {
          const x = element.x;
          const y = element.y;
          return `${x},${y}`;
        })
        .join(' '),
      ...data,
      isVisible: true,
    };
  });

  return {lines, maxDataX, maxDataY, labelsX, labelsY};
}
