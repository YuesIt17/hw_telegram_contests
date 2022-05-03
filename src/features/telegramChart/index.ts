import {MODULE_NAME} from './constants';
import {telegramChartReducer} from './store';

export {default} from './layouts';

export const chartReducer = {
  [MODULE_NAME]: telegramChartReducer,
};