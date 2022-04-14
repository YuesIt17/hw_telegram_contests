import {ThemeProvider} from '@emotion/react';
import {render, RenderOptions, RenderResult} from '@testing-library/react';
import React, {FC, ReactElement, ReactNode} from 'react';
import {theme} from '../app/App';
import {AuthProvider} from '../components/AuthProvider';

export const ThemeTestProvider: FC = ({children}) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export const themeTestRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => {
  return render(<ThemeTestProvider>{ui}</ThemeTestProvider>, options);
};

export const authTestRender = (
  ui: ReactElement,
  options?: RenderOptions
): RenderResult => {
  return render(
    <AuthProvider>
      <ThemeTestProvider>{ui}</ThemeTestProvider>
    </AuthProvider>,
    options
  );
};

export const authWrapper = ({children}: {children?: ReactNode | undefined}) => (
  <AuthProvider>{children}</AuthProvider>
);
