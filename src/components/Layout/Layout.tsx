import React, {FC, memo} from 'react';
import {Header} from './Header';
import {useStyles} from './styles';

export const Layout: FC = memo(({children}) => {
  const styles = useStyles();
  return (
    <div>
      <Header />
      <main css={styles.main}>{children}</main>
    </div>
  );
});

Layout.displayName = 'Layout';
