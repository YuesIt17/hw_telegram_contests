import {css} from '@emotion/react';
import {FONT_SIZE} from '../../constants';

export const useStyles = () => ({
  line: css({
    stroke: '#ccc',
    strokeWidth: 0.5,
  }),
  label: css({
    fontSize: FONT_SIZE,
    fill: '#ccc',
  }),
});
