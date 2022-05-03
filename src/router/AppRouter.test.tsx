import React from 'react';
import {screen} from '@testing-library/react';
import {AppRouter} from './AppRouter';
import {themeTestRender} from '@/utils/tests';

describe('AppRouter test', () => {
  test('Check render AppRouter component', async () => {
    themeTestRender(<AppRouter />);

    const authorization = screen.getByTestId('authorization');
    expect(authorization).toBeInTheDocument();
  });
});
