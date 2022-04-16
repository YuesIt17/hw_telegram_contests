import React from 'react';
import {AuthProvider} from '../components/AuthProvider';
import {AppRouter} from '../router';
import {css, Global, Theme, ThemeProvider} from '@emotion/react';

const defaultColor = '#ffffff';

export const theme: Theme = {
  name: 'main',
  colors: {
    primary: {
      light: '#e3f2fd',
      main: '#1976d2',
      dark: '#1565c0',
    },
    secondary: {
      light: defaultColor,
      main: '#fafafa',
      dark: '#e0e0e0',
    },
  },
  paper: {
    backgroundColor: defaultColor,
  },
};

const globalStyle = css({
  body: {
    margin: 0,
  },
});

export function App() {
  return (
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <div css={(theme: Theme) => theme.paper}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}
