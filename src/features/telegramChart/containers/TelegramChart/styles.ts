import {css} from '@emotion/react';
import {TTelegramChartStyle} from './types';

export const useStyles = ({width}: TTelegramChartStyle) => ({
  chart: css({
    width: width,
    padding: '20px 0',
    alignSelf: 'flex-start',
  }),
});
