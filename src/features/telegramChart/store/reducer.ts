import {TChartLine} from '../../../utils/prepareData/types';
import {ChartAction} from './actions';

export function reducer(
  state: TChartLine[],
  {type, payload}: {type: ChartAction; payload: TChartLine[] | TChartLine}
) {
  switch (type) {
    case ChartAction.setAll:
      if (Array.isArray(payload)) {
        return [...payload];
      }
      break;
    case ChartAction.updateOne:
      if (!Array.isArray(payload) && payload.name) {
        const lines = state.filter((item) => item.name !== payload.name);
        const newState = [...lines, payload];
        return newState.sort((a, b) =>
          (a.name || '') > (b.name || '') ? 1 : -1
        );
      }
      break;
    default:
      return state;
  }
}
