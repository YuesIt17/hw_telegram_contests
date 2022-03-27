import {CSSProperties} from 'react';
import {TTelegramChartStyle} from './types';

export const useStyles = ({
  width,
}: TTelegramChartStyle): Record<'chart', CSSProperties | undefined> => ({
  chart: {
    width: width,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
  },
});
