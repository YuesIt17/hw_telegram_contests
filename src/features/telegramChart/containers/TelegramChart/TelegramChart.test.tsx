import React from 'react';
import {themeTestRenderer} from '@/utils/tests';
import {TelegramChart} from './TelegramChart';

describe('Telegram Chart test', () => {
  test('Check render TelegramChart component', () => {
    const telegramChart = themeTestRenderer(
      <TelegramChart width={700} />
    ).toJSON();

    expect(telegramChart).toMatchSnapshot();
  });
});
