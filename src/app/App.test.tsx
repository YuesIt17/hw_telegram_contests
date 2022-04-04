import React from 'react';
import {render} from '@testing-library/react';
import {App} from './App';
import '@testing-library/jest-dom';

describe('App test', () => {
  test('Check render App component', () => {
    render(<App />);
  });
});
