import React from 'react';
import {render} from '@testing-library/react';
import {TelegramChart} from './TelegramChart';
import '@testing-library/jest-dom';

describe('Telegram Chart test', () => {
  test('Check render TelegramChart component', () => {
    const {queryByTestId} = render(<TelegramChart width={700} />);

    expect(queryByTestId('telegramChartMap')).toBeInTheDocument();
    expect(queryByTestId('telegramChartFooter')).toBeInTheDocument();
  });
});
