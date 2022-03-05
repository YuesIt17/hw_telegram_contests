import {useEffect, useMemo, useReducer} from 'react';
import {mockDataCharts} from '../../../../api/telegramChart';
import {prepareData} from '../../../../utils/prepareData/prepareData';
import {TChartDataLine} from '../../../../utils/prepareData/types';
import {ChartAction} from '../../store/actions';
import {reducer} from '../../store/reducer';

const initialState: TChartDataLine[] = [];

export function useTelegramChart() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const {lines, maxDataX, maxDataY, labelsX, labelsY} = useMemo(
    () => prepareData(mockDataCharts),
    [mockDataCharts]
  );

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
