import {
  TChartDataLine,
  TChartPrepareData,
} from '../../../../../utils/prepareData/types';

export type TChartClassData = {
  lines: TChartDataLine[] | TChartDataLine;
} & Omit<TChartPrepareData, 'lines'>;
