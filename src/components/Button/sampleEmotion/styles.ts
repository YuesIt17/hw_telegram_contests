import {css, Theme} from '@emotion/react';
import {TButton} from './types';

export const useStyles = ({variant}: Pick<TButton, 'variant'>) => ({
  button: (theme: Theme) =>
    css({
      backgroundColor:
        variant === 'primary'
          ? theme.colors.primary.main
          : theme.colors.secondary.light,
      color:
        variant === 'primary'
          ? theme.colors.secondary.light
          : theme.colors.primary.main,
      border: `1px solid ${theme.colors.primary.main}`,
      borderRadius: 4,
      padding: '4px 12px',
      fontSize: 14,
      minWidth: 64,
      textTransform: 'uppercase',
      cursor: 'pointer',
      lineHeight: 1.75,
      '&:hover': {
        backgroundColor:
          variant === 'primary'
            ? theme.colors.primary.dark
            : theme.colors.secondary.main,
      },
    }),
});
