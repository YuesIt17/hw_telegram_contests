import {
  TChartDataLine,
  TChartPrepareData,
} from '../../../../utils/prepareData/types';

export type TTelegramChartLine = {
  data: TChartDataLine[];
  width?: number;
} & Pick<TChartPrepareData, 'maxDataX' | 'maxDataY' | 'labelsX' | 'labelsY'>;
