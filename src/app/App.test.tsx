import React from 'react';
import {render} from '@testing-library/react';
import {App} from './App';
import {initStore} from '@/redux/initStore';

describe('App test', () => {
  test('Check render App component', () => {
    const store = initStore();
    render(<App store={store} />);
  });
});
