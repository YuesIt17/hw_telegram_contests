export type TCheckBox = TCheckboxField & {
  label: string;
  color: string | undefined;
  onChange?: (field: TCheckboxField) => void;
};

export type TCheckboxField = {
  name: string;
  value: boolean;
};
