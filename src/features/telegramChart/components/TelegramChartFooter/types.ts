import {TChartDataLine} from '../../../../utils/prepareData/types';

export type TTelegramChartFooter = {
  data: TChartDataLine[];
  onChange: (line: TChartDataLine, isVisible: boolean) => void;
};
