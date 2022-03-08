import React from 'react';
import {render, screen} from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

describe('App test', () => {
  test('Check render App component', () => {
    render(<App />);

    const checkBox = screen.getByTestId('isVisibleChart');
    expect(checkBox).toBeInTheDocument();

    const telegramChart = screen.getByTestId('telegramChart');
    expect(telegramChart).toBeInTheDocument();
  });
});
