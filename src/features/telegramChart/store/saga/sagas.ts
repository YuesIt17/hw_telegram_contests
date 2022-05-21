import {dataChart} from '@/api/telegramChart';
import {TChartData} from '@/api/telegramChart/types';
import {call, put, takeLatest} from 'redux-saga/effects';
import {getDataChart} from './actions';
import {actions} from '../reducers/chartData';
import {mockDataChart} from '@/api/telegramChart/mockDataChart';

export function* getChartDataSaga() {
  try {
    const hasApi =
      process.env.NEXT_PUBLIC_ENV_RUN_DEV === 'local' ||
      process.env.NODE_ENV === 'test';
    const result: TChartData = hasApi
      ? yield call(dataChart.get)
      : mockDataChart;

    yield put(actions.setAll({result}));
  } catch (e) {
    const message = e instanceof Error ? e.message : 'Error in saga';
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
