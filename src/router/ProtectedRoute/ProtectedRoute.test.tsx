import React from 'react';
import {render, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import {ProtectedRoute} from './ProtectedRoute';

const contentPage = {
  protectedRoute: 'Hello in Protected Route',
  auth: 'Hello in Auth',
};

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(),
  Navigate: () => <div>{contentPage.auth}</div>,
}));

describe('ProtectedRoute test', () => {
  test('Check shows default value', () => {
    render(<ProtectedRoute>{contentPage.protectedRoute}</ProtectedRoute>);

    const content = screen.getByText(contentPage.auth);
    expect(content).toHaveTextContent(contentPage.auth);
  });
});
