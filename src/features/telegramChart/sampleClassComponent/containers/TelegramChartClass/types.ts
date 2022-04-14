import {TChartDataLine, TChartPrepareData} from '../../../../../utils';

export type TChartClassData = {
  lines: TChartDataLine[] | TChartDataLine;
} & Omit<TChartPrepareData, 'lines'>;
