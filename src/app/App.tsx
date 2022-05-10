import React, {FC, ReactElement} from 'react';
import {AppRouter} from '../router';
import {css, Global, Theme, ThemeProvider} from '@emotion/react';
import {AuthProvider} from '@/components/AuthProvider';
import {Provider} from 'react-redux';
import {store} from '../redux/initStore';

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
      dark: '#bdbdbd',
    },
    font: {
      dark: '#424242',
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

export const App: FC = (): ReactElement => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Global styles={globalStyle} />
      <div css={(theme: Theme) => theme.paper}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </div>
    </ThemeProvider>
  </Provider>
);
