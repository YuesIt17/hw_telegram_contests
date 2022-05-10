import {dataChart} from '@/api/telegramChart';
import {mockDataChart} from 'server/mockDataChart';
import {TChartData} from '@/api/telegramChart/types';
import {call, put, takeLatest} from 'redux-saga/effects';
import {getDataChart} from './actions';
import {actions} from '../reducers/chartData';

export function* getChartDataSaga() {
  try {
    const result: TChartData =
      process.env.NODE_ENV !== 'production'
        ? yield call(dataChart.get)
        : mockDataChart;
    yield put(actions.setAll({result}));
  } catch (e: any) {
    yield put(
      actions.setError({
        errors: `Error in getChartDataSaga: ${e.message}`,
      })
    );
  }
}

export function* chartSaga() {
  yield takeLatest(getDataChart, getChartDataSaga);
}
