import {css, Theme} from '@emotion/react';

export const useStyles = () => ({
  header: css({
    display: 'flex',
    justifyContent: 'flex-end',
    backgroundColor: '#fafafa',
  }),
  actions: (theme: Theme) =>
    css({
      minHeight: 64,
      display: 'flex',
      alignItems: 'center',
      padding: '0 26px',
      columnGap: 26,
      color: theme.colors.primary,
    }),
  content: css({
    paddingTop: 20,
  }),
});
