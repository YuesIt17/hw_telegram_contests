import {TChartDataLine} from '@/utils/types';

export type TTelegramChartFooter = {
  data: TChartDataLine[];
  onChange: (line: TChartDataLine, isVisible: boolean) => void;
};
