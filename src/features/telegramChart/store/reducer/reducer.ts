import {dataChart} from '@/api/telegramChart';
import {TChartData} from '@/api/telegramChart/types';
import {TChartDataLine} from '@/utils/types';
import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {filter, isArray, sortBy} from 'lodash';
import {MODULE_NAME} from '../../constants';

export const fetchDataChart = createAsyncThunk<TChartData>('data_charts', async () => {
  const response = await dataChart.get();
  return (await response.json()) as TChartData;
});

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
    updateOne: (
      state,
      action: PayloadAction<TChartDataLine[] | TChartDataLine>
    ) => {
      const {payload} = action;
      if (!isArray(payload) && payload?.name) {
        const lines = filter(state, (item) => item.name !== payload.name);
        const newState = [...lines, payload];
        return sortBy(newState, (item) => item.name);
      }
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchDataChart.fulfilled, (state, action) => {
  //     console.log('fulfilled', action.payload);
  //   });
  // },
});

export const {setAll, updateOne} = telegramChartSlice.actions;

export const telegramChartReducer = telegramChartSlice.reducer;
