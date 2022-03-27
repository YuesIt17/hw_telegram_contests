import {COLOR_CHART_LINE_JOINED} from '../../api/telegramChart/mockData';
import {TChartData} from '../../api/telegramChart/types';
import {
  getColumnData,
  getPrepareDataAxisX,
  getPrepareDataAxisY,
  parseDateTimeToInt,
  prepareData,
} from './prepareData';
import {TChartDataLabel, TChartDataLine} from './types';

const inputData = {
  columns: [
    ['x', 1542412800000, 1542499200000],
    ['y0', 37, 20],
  ],
  types: {
    y0: 'line',
    x: 'x',
  },
  names: {
    y0: '#0',
  },
  colors: {
    y0: COLOR_CHART_LINE_JOINED,
  },
} as TChartData;

describe('Prepare data for chart', () => {
  test('Check prepare data', () => {
    const outputData = {
      lines: [
        {
          color: COLOR_CHART_LINE_JOINED,
          name: '#0',
          points: '1,0 6,17',
          pointsMap: '1,0 6,3',
          type: 'line',
          isVisible: true,
        },
      ] as TChartDataLine[],
      maxDataX: 11,
      maxDataY: 37,
      labelsX: [
        {
          label: 'Nov 17',
          coordinate: 1,
        },
      ] as TChartDataLabel[],
      labelsY: [
        {
          label: '60',
          coordinate: 23,
        },
      ] as TChartDataLabel[],
    };

    expect(prepareData(inputData)).toEqual(outputData);
  });

  test('Check get column data', () => {
    const columnData = {
      columnDataY: [
        {
          color: COLOR_CHART_LINE_JOINED,
          name: '#0',
          type: 'line',
          values: [37, 20],
        },
      ],
      dataValuesX: [1542412800000, 1542499200000],
    };

    expect(getColumnData(inputData)).toEqual(columnData);
  });

  test('Check parse format date time to int', () => {
    expect(parseDateTimeToInt('1542412800000', 1)).toBe(6);
  });

  test('Check get prepare data axis x', () => {
    const dataValuesX = [1542412800000, 1542499200000];
    const dataAxisX = {
      coordinatesX: [1, 6],
      labelsX: [
        {
          coordinate: 1,
          label: 'Nov 17',
        },
      ] as TChartDataLabel[],
      maxDataX: 11,
    };

    expect(getPrepareDataAxisX(dataValuesX)).toEqual(dataAxisX);
  });

  test('Check get prepare data axis y', () => {
    const columnDataY = [
      {
        color: COLOR_CHART_LINE_JOINED,
        name: '#0',
        type: 'line',
        values: [37, 20],
      },
    ];
    const dataAxisY = {
      labelsY: [
        {
          coordinate: 23,
          label: '60',
        },
      ],
      maxDataY: 37,
    };

    expect(getPrepareDataAxisY(columnDataY)).toEqual(dataAxisY);
  });
});
