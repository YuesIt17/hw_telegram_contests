import {css, Theme} from '@emotion/react';
import {TButton} from './types';

export const useStyles = ({variant}: Pick<TButton, 'variant'>) => ({
  button: (theme: Theme) =>
    css({
      backgroundColor:
        variant === 'primary' ? theme.colors.primary : theme.colors.outlined,
      color: variant === 'primary' ? '#FFFF' : theme.colors.primary,
      border: `1px solid ${theme.colors.primary}`,
      borderRadius: 4,
      padding: '4px 12px',
      fontSize: 14,
      minWidth: 64,
      textTransform: 'uppercase',
      cursor: 'pointer',
      lineHeight: 1.75,
      '&:hover': {
        backgroundColor:
          variant === 'primary' ? '#1565c0' : 'rgba(25, 118, 210, 0.04)',
      },
    }),
});
