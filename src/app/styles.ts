import {CSSProperties} from 'react';

export const useStyles = ({
  width,
}: {
  width?: number;
}): Record<'app' | 'toolbar', CSSProperties | undefined> => ({
  app: {
    display: 'grid',
    justifyItems: 'center',
  },
  toolbar: {
    width: width,
    display: 'flex',
    columnGap: 10,
  },
});
