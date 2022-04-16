import React, {FC, memo} from 'react';
import {useAuthContext} from '../../../../components/AuthProvider';
import {Button} from '../../../../components/Button';

export const AuthActions: FC = memo(() => {
  const {userName, logout} = useAuthContext();

  return (
    <>
      <h3>{userName}</h3>
      <Button variant="outlined" onClick={logout}>
        Logout
      </Button>
    </>
  );
});

AuthActions.displayName = 'AuthActions';
