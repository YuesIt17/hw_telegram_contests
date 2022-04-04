import {css} from '@emotion/react';
import {TTelegramChartStyle} from './types';

export const useStyles = ({width}: TTelegramChartStyle) => ({
  chart: css({
    width: width,
    marginTop: 20,
    marginBottom: 20,
    alignSelf: 'flex-start',
  }),
});
