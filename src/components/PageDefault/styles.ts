import {css} from '@emotion/react';

export const useStyles = () => ({
  page: css({
    display: 'grid',
    justifyContent: 'center',
    alignContent: 'center',
    rowGap: 10,
    justifyItems: 'center',
    height: '100vh',
    backgroundColor: '#eff1f5',
  }),
  content: css({
    margin: '16px 0',
  }),
});
