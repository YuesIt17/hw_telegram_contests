import {TChartData} from '@/api/telegramChart/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {CHART_DATA_REDUCER, MODULE_NAME} from '../../constants';
import {TChartState} from '../types';

export const initialState: TChartState = {
  result: {
    columns: [],
    colors: {},
    names: {},
    types: {},
  } as TChartData,
  errors: '',
};

const chartDataSlice = createSlice({
  name: `${MODULE_NAME}.${CHART_DATA_REDUCER}`,
  initialState,
  reducers: {
    setAll: (state, {payload}: PayloadAction<TChartState>) => {
      const {result, errors} = payload;
      return {
        result: result || state.result,
        errors: errors || '',
      };
    },
  },
});

export const chartDataReducer = chartDataSlice.reducer;
export const actions = chartDataSlice.actions;
