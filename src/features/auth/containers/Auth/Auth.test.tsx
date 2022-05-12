import React from 'react';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {AppRouter} from '../../../../router';
import {authTestRender} from '@/utils/tests';
import {TChartDataLabel} from 'utils/types';
import {mockChartDataLine} from '@/share/mockDataTest';

jest.mock('@/features/telegramChart/containers/TelegramChart/hook', () => ({
  useTelegramChart: jest.fn(() => ({
    data: mockChartDataLine,
    maxDataX: 11,
    maxDataY: 37,
    labelsX: [
      {
        label: 'Nov 17',
        coordinate: 1,
      },
    ] as TChartDataLabel[],
    labelsY: [
      {
        label: '60',
        coordinate: 23,
      },
    ] as TChartDataLabel[],
  })),
}));

describe('Auth test', () => {
  test('Check user authorization', async () => {
    authTestRender(<AppRouter />);

    const user = userEvent.setup();

    const authorizationPage = screen.getByTestId('authorization');
    expect(authorizationPage).toBeInTheDocument();

    const loginInput = screen.getByPlaceholderText('User name');
    await userEvent.type(loginInput, 'User name');
    expect(loginInput).toHaveValue('User name');

    const loginButton = screen.getByRole('button', {name: /login/i});
    await user.click(loginButton);

    const helloPage = screen.getByTestId('hello!');
    expect(helloPage).toBeInTheDocument();
    const buttonGo = screen.getByRole('button', {name: /^go$/i});
    await user.click(buttonGo);

    const telegramChartPage = screen.getByTestId('telegramChartPage');
    expect(telegramChartPage).toBeInTheDocument();
  });
});
