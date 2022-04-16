import {TChartDataLine} from '../../../../utils';

export type TTelegramChartFooter = {
  data: TChartDataLine[];
  onChange: (line: TChartDataLine, isVisible: boolean) => void;
};
