import React from 'react';
import {AuthProvider} from '../components/AuthProvider';
import {AppRouter} from '../router';
import {useStyles} from './styles';
import {Global, Theme, ThemeProvider} from '@emotion/react';

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

export function App() {
  const styles = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <Global styles={styles.global} />
      <div css={(theme: Theme) => theme.paper}>
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
      </div>
    </ThemeProvider>
  );
}
