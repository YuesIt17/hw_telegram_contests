import {CSSProperties} from 'react';
import {FONT_SIZE} from '../../constants';

export const useStyles = (): Record<'line' | 'label', CSSProperties> => ({
  line: {
    stroke: '#ccc',
    strokeWidth: 0.5,
  },
  label: {
    fontSize: FONT_SIZE,
    fill: '#ccc',
  },
});
