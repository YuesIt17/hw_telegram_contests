import {dataChart} from '@/api/telegramChart';
import {mockDataChart} from '@/api/telegramChart/mockDataChart';
import {TChartData} from '@/api/telegramChart/types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CHART_DATA_REDUCER, MODULE_NAME} from '../../constants';

export const fetchDataChart = createAsyncThunk(
  'data_charts/getDataChart',
  async () => {
    if (process.env.NODE_ENV === 'development') {
      const response = await dataChart.get();
      return response as TChartData;
    }
    return mockDataChart;
  }
);

export const initialState: TChartData = {
  columns: [],
  colors: {},
  names: {},
  types: {},
};

const chartDataSlice = createSlice({
  name: `${MODULE_NAME}.${CHART_DATA_REDUCER}`,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDataChart.fulfilled, (state, action) => {
      const {payload} = action;
      return payload || state;
    });
  },
});

export const chartDataReducer = chartDataSlice.reducer;
