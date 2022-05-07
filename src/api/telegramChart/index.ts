import {Fetcher} from '..';

export const dataChart = {
  get: () => Fetcher.request({url: 'data_chart'}),
};


