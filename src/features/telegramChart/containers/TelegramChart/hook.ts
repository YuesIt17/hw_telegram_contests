import {useEffect, useMemo} from 'react';

import {TChartDataLine} from '@/utils/types';
import {prepareData} from '@/utils';
import {fetchDataChart} from '../../store/thunk/chartData';
import {useAppDispatch, useAppSelector} from '@/redux/hooks';
import {setAll, updateOne} from '../../store';

export function useTelegramChart() {
  const dispatch = useAppDispatch();
  const chartData = useAppSelector((state) => state.telegramChart.chartData);
  const chartLines = useAppSelector((state) => state.telegramChart.chartLine);

  const {lines, maxDataX, maxDataY, labelsX, labelsY} = useMemo(() => {
    return prepareData(chartData);
  }, [chartData]);

  useEffect(() => {
    dispatch(fetchDataChart());
  }, []);

  useEffect(() => {
    dispatch(setAll(lines));
  }, [lines]);

  const onChangeHadler = (line: TChartDataLine, isVisible: boolean) => {
    dispatch(updateOne({...line, isVisible: isVisible}));
  };

  return {
    data: chartLines,
    maxDataX,
    maxDataY,
    labelsX,
    labelsY,
    onChangeHadler,
  };
}
