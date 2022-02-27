
export type TChartCheckBox = TCheckboxField & {
  color: string | undefined; 
  onChange: (field: TCheckboxField) => void;
}

export type TCheckboxField = {
  name: string | undefined;
  value: boolean;
}
