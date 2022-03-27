import React from 'react';
import renderer from 'react-test-renderer';
import {TelegramChart} from './TelegramChart';
import '@testing-library/jest-dom';

describe('Telegram Chart test', () => {
  test('Check render TelegramChart component', () => {
    const telegramChart = renderer
      .create(<TelegramChart width={700} />)
      .toJSON();

    expect(telegramChart).toMatchSnapshot();
  });
});
