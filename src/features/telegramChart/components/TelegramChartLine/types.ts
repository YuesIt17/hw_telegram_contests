import {TChartDataLabel, TChartDataLine} from '../../../../utils/prepareData/types';

export type TTelegramChartLine = {
  data: TChartDataLine[];
  maxDataX: number;
  maxDataY: number;
  labelsX: TChartDataLabel[];
  labelsY: TChartDataLabel[];
  width?: number;
};
