
export type TColumnValue = {
  values: (number | string)[];
  type: string;
  name?: string;
  color?: string;
}

export type TChartLabel = {
  label: string;
  coordinate: number;
}

export type TChartLine = {
  type: string;
  name?: string | undefined;
  color?: string | undefined;
  points: string;
  isVisible?: boolean;
}