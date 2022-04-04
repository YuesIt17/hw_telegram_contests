import {css} from '@emotion/react';
import {TTelegramChartMapStyle} from './types';

export const useStyles = ({width}: TTelegramChartMapStyle) => ({
  chartMap: css({
    width: width,
    height: '100%',
    backgroundColor: '#fafafa',
  }),
});
