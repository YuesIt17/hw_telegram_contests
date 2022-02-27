import React, {useState} from "react";
import {CheckCircleIcon} from "../Icons";
import {useStyles} from "./styles";
import {TChartCheckBox} from "./types";

export function ChartCheckBox({name, value, color, onChange}: TChartCheckBox) {
  const styles = useStyles();
  const [field, setFieldValue] = useState({name, value});
  const checkedColor = field.value ? color : 'transparent';
  const onClickHandler = () => {
    const updatedField = {name, value: !value};
    setFieldValue(updatedField);
    onChange(updatedField);
  }

  return (
    <button style={styles.button}
      onClick={onClickHandler}  
    >
      <div style={styles.icon}>
        <CheckCircleIcon fill={checkedColor} stroke={color} />
      </div> 
      <div style={styles.label}>{name}</div>
    </button>
  )
}