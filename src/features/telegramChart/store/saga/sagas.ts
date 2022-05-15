import {dataChart} from '@/api/telegramChart';
import {TChartData} from '@/api/telegramChart/types';
import {call, put, takeLatest} from 'redux-saga/effects';
import {getDataChart} from './actions';
import {actions} from '../reducers/chartData';
import {mockDataChart} from '@/api/telegramChart/mockDataChart';

export function* getChartDataSaga() {
  try {
    const result: TChartData =
      process.env.NEXT_PUBLIC_ENV_LOCAL_RUN_DEV === 'true' ||
      process.env.NODE_ENV === 'test'
        ? yield call(dataChart.get)
        : mockDataChart;
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
