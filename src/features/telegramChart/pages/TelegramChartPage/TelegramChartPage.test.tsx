import React from 'react';
import {fireEvent, screen} from '@testing-library/react';
import {TelegramChartPage} from './TelegramChartPage';
import {themeTestRender} from '@/utils/tests';

describe('TelegramChartPage test', () => {
  test('Check render TelegramChartPage component with click checkbox Show/Hide Graph', () => {
    const {queryByTestId} = themeTestRender(<TelegramChartPage />);

    const isVisibleChart = screen.getByTestId('isVisibleChart');
    expect(isVisibleChart).toBeInTheDocument();

    fireEvent.click(isVisibleChart);
    expect(queryByTestId('telegramChart')).toBeNull();

    fireEvent.click(isVisibleChart);
    expect(queryByTestId('telegramChart')).toBeInTheDocument();

    const toggleClassComponent = screen.getByTestId('toggleClassComponent');
    expect(toggleClassComponent).toBeInTheDocument();
    fireEvent.click(toggleClassComponent);
    expect(queryByTestId('telegramChartClass')).toBeInTheDocument();
  });
});
