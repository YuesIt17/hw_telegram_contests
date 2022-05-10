import React from 'react';
import {App} from '@/app';
import {AppProps} from 'next/app';

const isServer = typeof window === 'undefined';

function AppNext({pageProps}: AppProps) {
  return (
    <div suppressHydrationWarning>
      {isServer ? null : <App {...pageProps} />}
    </div>
  );
}

export default AppNext;
