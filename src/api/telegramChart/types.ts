
export type TColumnKeyValue = Record<string, string>;

export type TChartData = {
  columns: (string | number)[][];
  types: TColumnKeyValue;
  names: TColumnKeyValue;
  colors: TColumnKeyValue;
}
