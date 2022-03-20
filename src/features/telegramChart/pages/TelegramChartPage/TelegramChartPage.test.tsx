import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {TelegramChartPage} from './TelegramChartPage';
import '@testing-library/jest-dom';

describe('TelegramChartPage test', () => {
  test('Check render TelegramChartPage component with click checkbox Show/Hide Graph', () => {
    const {queryByTestId} = render(<TelegramChartPage />);

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
