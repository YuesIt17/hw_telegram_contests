import {css} from '@emotion/react';

export const useStyles = () => ({
  button: css({
    background: 'transparent',
    border: '1px solid #E0E0E0',
    borderRadius: 24,
    alignItems: 'center',
    display: 'flex',
    padding: 6,
  }),
  icon: css({
    width: 16,
    height: 16,
  }),
  label: css({
    padding: '0 8px',
    fontSize: 12,
    color: '#424242',
  }),
});
