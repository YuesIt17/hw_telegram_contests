import {TColumnsValueAxis} from '../../api/telegramChart/types';

export type TColumnValue = {
  values: TColumnsValueAxis;
  type: string;
  name: string;
  color: string;
};

export type TChartDataLabel = {
  label: string;
  coordinate: number;
};

export type TChartDataLine = {
  type: string;
  name: string;
  color: string;
  points: string;
  isVisible: boolean;
};
