import {useEffect, useMemo, useReducer} from 'react';

import {TChartDataLine} from '@/utils/types';
import {ChartAction} from '../../store/actions';
import {reducer} from '../../store/reducer';
import {prepareData} from '@/utils';
import {mockDataCharts} from '@/api/telegramChart';
// import {useDispatch} from 'react-redux';
// import {fetchDataChart} from '../../store/reducer/reducer';

const initialState: TChartDataLine[] = [];

export function useTelegramChart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {lines, maxDataX, maxDataY, labelsX, labelsY} = useMemo(
    () => prepareData(mockDataCharts),
    [mockDataCharts]
  );
  // const dispatch1 = useDispatch();
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = await dispatch1(fetchDataChart()).unwrap();
  //     console.log('data', data);
  //   };
  //   fetchData();
  // }, []);

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
