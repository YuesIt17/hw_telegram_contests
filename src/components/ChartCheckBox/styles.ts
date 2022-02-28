import {CSSProperties} from 'react'

export const useStyles = (): Record<
  'button' | 'icon' | 'label',
  CSSProperties | undefined
> => ({
  button: {
    background: 'transparent',
    border: '1px solid #E0E0E0',
    borderRadius: 24,
    alignItems: 'center',
    display: 'flex',
    padding: 6,
  },
  icon: {
    width: 16,
    height: 16,
  },
  label: {
    padding: '0 8px',
    fontSize: 12,
    color: '#424242',
  },
})
