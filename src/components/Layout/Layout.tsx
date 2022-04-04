import React, {FC, memo} from 'react';
import {Header} from './Header';

export const Layout: FC = memo(({children}) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
});

Layout.displayName = 'Layout';
