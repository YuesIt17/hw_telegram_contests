import React, {FC, memo} from 'react';
import {PageDefault} from '../../../../components/PageDefault';
import {useAuth} from './hook';
import {useStyles} from './styles';

export const Auth: FC = memo(() => {
  const styles = useStyles();
  const {onLoginHandler, onChangeHandler} = useAuth();

  return (
    <PageDefault
      title="Authorization"
      buttonText="Login"
      buttonHandler={onLoginHandler}
    >
      <input css={styles.input} onChange={onChangeHandler}></input>
    </PageDefault>
  );
});

Auth.displayName = 'Auth';
