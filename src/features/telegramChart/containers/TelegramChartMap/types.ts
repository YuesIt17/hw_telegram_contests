import {TChartDataLine} from '../../../../utils/prepareData/types';

export type TTelegramChartMap = {
  width: number;
  data: TChartDataLine[];
  maxDataX: number;
  maxDataY: number;
};

export type TTelegramChartMapStyle = Pick<TTelegramChartMap, 'width'>;