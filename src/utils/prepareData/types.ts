
export type TColumnValue = {
  values: (number | string)[];
  type: string;
  name?: string;
  color?: string;
}

export type TColumnKeys = Record<string, string>;

export type TChartData = {
  columns: (string | number)[][];
  types: TColumnKeys;
  names: TColumnKeys;
  colors: TColumnKeys;
}

export type TChartLabel = {
  label: string;
  coordinate: number;
}