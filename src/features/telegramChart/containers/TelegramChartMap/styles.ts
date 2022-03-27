import {CSSProperties} from 'react';
import {TTelegramChartMapStyle} from './types';

export const useStyles = ({
  width,
}: TTelegramChartMapStyle): Record<'chartMap', CSSProperties | undefined> => ({
  chartMap: {
    width: width,
    height: '100%',
    backgroundColor: '#fafafa',
  },
});
