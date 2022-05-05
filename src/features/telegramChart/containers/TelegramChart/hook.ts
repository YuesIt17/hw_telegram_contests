import {useEffect, useMemo, useReducer, useState} from 'react';

import {TChartDataLine} from '@/utils/types';
import {ChartAction} from '../../store/actions';
import {reducer} from '../../store/reducer';
import {prepareData} from '@/utils';
import {fetchDataChart} from '../../store/reducers/chartData';
import {useAppDispatch} from '@/redux/hooks';

const initialState: TChartDataLine[] = [];

export function useTelegramChart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [chartData] = useState<string>(
    () => localStorage.getItem('chartData') || ''
  );
  const {lines, maxDataX, maxDataY, labelsX, labelsY} = useMemo(() => {
    const data = chartData ? JSON.parse(chartData) : [];
    return prepareData(data);
  }, [chartData]);
  const appDispatch = useAppDispatch();

  useEffect(() => {
    appDispatch(fetchDataChart());
  }, []);

  useEffect(() => {
    dispatch({type: ChartAction.setAll, payload: lines});
  }, [lines]);

  const onChangeHadler = (line: TChartDataLine, isVisible: boolean) => {
    dispatch({
      type: ChartAction.updateOne,
      payload: {...line, isVisible: isVisible},
    });
  };

  return {data: state, maxDataX, maxDataY, labelsX, labelsY, onChangeHadler};
}
