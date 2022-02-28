import {CSSProperties} from 'react'

export const useStyles = (): Record<'app', CSSProperties | undefined> => ({
  app: {
    display: 'grid',
    justifyItems: 'center',
  },
})
