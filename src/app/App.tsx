import React from 'react';
import {AuthProvider} from '../components/AuthProvider';
import {AppRouter} from '../router';
import {useStyles} from './styles';
import {Global, Theme, ThemeProvider} from '@emotion/react';

const defaultColor = '#ffff';

const theme: Theme = {
  colors: {
    primary: '#1976d2',
    outlined: defaultColor,
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
