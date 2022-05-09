import {dataChart} from '@/api/telegramChart';
import {mockDataCharts} from '@/api/telegramChart/mockData';
import {TChartData} from '@/api/telegramChart/types';
import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {CHART_DATA_REDUCER, MODULE_NAME} from '../../constants';

export const fetchDataChart = createAsyncThunk(
  'data_charts/getDataChart',
  async () => {
    if (process.env.NODE_ENV === 'development') {
      const response = await dataChart.get();
      return (await response.json()) as TChartData;
    }
    return mockDataCharts;
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
      if (payload) {
        localStorage.setItem('chartData', JSON.stringify(payload));
        return payload;
      }
      return state;
    });
  },
});

export const chartDataReducer = chartDataSlice.reducer;
