import React from 'react';
import {CheckBox} from '../../../../components/CheckBox';
import {useStyles} from './styles';
import {TTelegramChartFooter} from './types';

export const TelegramChartFooter = ({data, onChange}: TTelegramChartFooter) => {
  const styles = useStyles();

  if (!data) return null;
  return (
    <div style={styles.footer}>
      {data.map((line) => (
        <CheckBox
          key={line.name}
          label={line.name}
          name={line.name}
          value={line.isVisible || false}
          color={line.color}
          onChange={(field) => onChange(line, field.value)}
        />
      ))}
    </div>
  );
};
