import {TChartLabel, TChartLine} from '../../../../utils/prepareData/types';

export type TTelegramChartLine = {
  data: TChartLine[];
  maxDataX: number;
  maxDataY: number;
  labelsX: TChartLabel[];
  labelsY: TChartLabel[];
  width?: number;
};
