import {css} from '@emotion/react';

export const useStyles = ({width}: {width?: number}) => ({
  chartPage: css({
    display: 'grid',
    justifyItems: 'center',
    marginTop: 20,
  }),
  toolbar: css({
    width: width,
    display: 'flex',
    columnGap: 10,
  }),
});
