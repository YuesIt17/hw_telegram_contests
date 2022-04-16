import React, {useState} from 'react';
import {CheckCircleIcon} from '../Icons';
import {useStyles} from './styles';
import {TCheckBox} from './types';

export function CheckBox({label, name, value, color, onChange}: TCheckBox) {
  const styles = useStyles();
  const [field, setFieldValue] = useState({name, value});
  const checkedColor = field.value ? color : 'transparent';
  const onClickHandler = () => {
    const updatedField = {name, value: !field.value};
    setFieldValue(updatedField);
    onChange && onChange(updatedField);
  };

  return (
    <button css={styles.button} onClick={onClickHandler} data-testid={name}>
      <div css={styles.icon}>
        <CheckCircleIcon fill={checkedColor} stroke={color} />
      </div>
      <div css={styles.label}>{label}</div>
    </button>
  );
}
