import React from 'react';
import {AuthProvider} from '../components/AuthProvider';
import {AppRouter} from '../router';

export default function App() {
  return (
    <AuthProvider>
      <AppRouter />
    </AuthProvider>
  );
}
