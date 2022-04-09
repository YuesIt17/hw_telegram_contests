import React from 'react';
import {useStyles} from './styles';
import {TInput} from './types';

export const Input = ({onChange}: TInput) => {
  const styles = useStyles();
  return <input css={styles.input} onChange={onChange}></input>;
};
