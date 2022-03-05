import {TColumnsValueAxis} from '../../api/telegramChart/types';

export type TColumnValue = {
  values: TColumnsValueAxis;
  type: string;
  name?: string;
  color?: string;
};

export type TChartLabel = {
  label: string;
  coordinate: number;
};

export type TChartLine = {
  type: string;
  name: string;
  color?: string | undefined;
  points: string;
  isVisible?: boolean;
};
