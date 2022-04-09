import React, {FC, memo} from 'react';
import {Input} from '../../../../components/Input';
import {PageDefault} from '../../../../components/Page';
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
      style={styles.page}
    >
      <Input onChange={onChangeHandler} />
    </PageDefault>
  );
});

Auth.displayName = 'Auth';
