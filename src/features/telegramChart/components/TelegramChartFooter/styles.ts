import {CSSProperties} from 'react'

export const useStyles = (): Record<'footer', CSSProperties | undefined> => ({
  footer: {
    display: 'flex',
    columnGap: 20,
  },
})
