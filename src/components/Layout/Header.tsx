import React, {FC, memo} from 'react';
import {useAuthContext} from '../AuthProvider';
import {Button} from '../Button';
import {useStyles} from './styles';

export const Header: FC = memo(() => {
  const styles = useStyles();
  const {userName, logout} = useAuthContext();

  return (
    <header css={styles.header}>
      <div css={styles.actions}>
        <h3>{userName}</h3>
        <Button variant="outlined" onClick={logout}>
          Logout
        </Button>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
