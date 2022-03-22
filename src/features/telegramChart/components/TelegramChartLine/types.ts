import {
  TChartDataLine,
  TChartPrepareData,
} from '../../../../utils/prepareData/types';

export type TTelegramChartLine = {
  data: TChartDataLine[];
  width?: number;
  peddingSize?: number;
} & Omit<TChartPrepareData, 'lines'>;
