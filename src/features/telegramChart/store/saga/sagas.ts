import {dataChart} from '@/api/telegramChart';
import {mockDataCharts} from '@/api/telegramChart/mockData';
import {TChartData} from '@/api/telegramChart/types';
import {call, put, takeLatest} from 'redux-saga/effects';
import {getDataChart} from './actions';
import {actions} from '../reducers/chartData';

export function* getChartDataSaga() {
  try {
    const result: TChartData =
      process.env.NODE_ENV !== 'production'
        ? yield call(dataChart.get)
        : mockDataCharts;
    yield put(actions.setAll({result}));
  } catch (e) {
    const message = e instanceof Error ? e.message : '';
    yield put(
      actions.setError({
        errors: `Error in getChartDataSaga. ${message}`,
      })
    );
  }
}

export function* chartSaga() {
  yield takeLatest(getDataChart, getChartDataSaga);
}
