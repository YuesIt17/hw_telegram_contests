import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react';
import {App} from './App';
import '@testing-library/jest-dom';

describe('App test', () => {
  test('Check render App component with click checkbox Show/Hide Graph', () => {
    const {queryByTestId} = render(<App />);

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
