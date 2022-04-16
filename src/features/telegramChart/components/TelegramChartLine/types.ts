import {TChartDataLine, TChartPrepareData} from '../../../../utils';

export type TTelegramChartLine = {
  data: TChartDataLine[];
  width?: number;
  peddingSize?: number;
} & Omit<TChartPrepareData, 'lines'>;
