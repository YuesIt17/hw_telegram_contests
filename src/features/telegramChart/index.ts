import {MODULE_NAME} from './constants';
import {chartModuleReducer} from './store';

export {default} from './layouts';

export const chartReducer = {
  [MODULE_NAME]: chartModuleReducer,
};
