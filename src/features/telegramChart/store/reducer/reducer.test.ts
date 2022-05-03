import {COLOR_CHART_LINE_JOINED, COLOR_CHART_LINE_LEFT} from '@/api/telegramChart/constants';
import {TChartDataLine} from 'utils/types';
import {telegramChartReducer, setAll, updateOne} from './reducer'

const initState = [
  {
    color: COLOR_CHART_LINE_LEFT,
    name: 'name_1',
    points: '2,3 5,20',
    pointsMap: '1,0 6,3',
    type: 'line',
    isVisible: false,
  },
] as TChartDataLine[];

const payload = {
    color: COLOR_CHART_LINE_JOINED,
    name: 'name_2',
    points: '1,0 6,17',
    pointsMap: '1,0 6,3',
    type: 'line',
    isVisible: true,
} as TChartDataLine;

describe('TelegramChart test reducer', () => {
  test('Check return initial state', () => {
    const initAction = {type: '@@SOME_ACTION'};
    expect(telegramChartReducer(undefined, initAction)).toEqual([]);
  });

  test('Check action setAll with empty payload', () => {
    expect(telegramChartReducer(undefined, setAll([]))).toEqual([]);
  });

  test('Check action setAll with data payload', () => {
    expect(telegramChartReducer(undefined, setAll([payload]))).toEqual([payload]);
  });

  test('Check action setAll with data payload and state', () => {
    expect(telegramChartReducer(initState, setAll([payload]))).toEqual([payload]);
  });

  test('Check action setAll with one object data payload', () => {
    expect(telegramChartReducer(undefined, setAll(payload))).toEqual([]);
  });

  test('Check action updateOne with empty payload', () => {
    expect(telegramChartReducer(undefined, updateOne({} as TChartDataLine))).toEqual([]);
  });

  test('Check action updateOne with data payload and empty state', () => {
    expect(telegramChartReducer(undefined, updateOne(payload))).toEqual([payload]);
  });

  test('Check action updateOne with data payload and state', () => {
    expect(telegramChartReducer(initState, updateOne(payload))).toEqual([...initState, payload]);
  });

  test('Check action updateOne change data after init state', () => {
    const сhangedPayload = {
      ...initState[0],
      isVisible: true
    } as TChartDataLine;

    expect(telegramChartReducer(initState, updateOne(сhangedPayload))).toEqual([сhangedPayload]);
  });

  test('Check action updateOne change data payload and with data state', () => {
    const сhangedPayload = {
      ...payload,
      isVisible: false
    } as TChartDataLine;

    expect(telegramChartReducer(initState, updateOne(сhangedPayload))).toEqual([...initState, сhangedPayload]);
  });
})