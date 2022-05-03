import {TChartDataLine} from '@/utils/types';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {filter, isArray, sortBy} from 'lodash';
import {MODULE_NAME} from '../../constants';

const initialState: TChartDataLine[] = [];

const telegramChartSlice = createSlice({
  name: MODULE_NAME,
  initialState,
  reducers: {
    setAll: (_, action: PayloadAction<TChartDataLine[] | TChartDataLine>) => {
      const {payload} = action;
      if (isArray(payload)) {
        return [...payload];
      }
    },
    updateOne: (state, action: PayloadAction<TChartDataLine[] | TChartDataLine>) => {
      const {payload} = action;
      if (!isArray(payload) && payload?.name) {
        const lines = filter(state, (item) => item.name !== payload.name);
        const newState = [...lines, payload];
        return sortBy(newState, item => item.name);
      }
    }
  }
});

export const { setAll, updateOne } = telegramChartSlice.actions;

export const telegramChartReducer = telegramChartSlice.reducer;
