import {ChangeEvent, useCallback, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAuthContext} from '../../../../components/AuthProvider';
import {usePageHello} from '../../../../components/Page';
import {NavigationState} from '../../../../router/types';

export const useAuth = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {login} = useAuthContext();
  const [userName, setUserName] = useState<string>('');
  const {isVisiblePageHello} = usePageHello();

  const onLoginHandler = useCallback(() => {
    if (login && userName) {
      const state = location.state as NavigationState;
      login(userName);
      if (isVisiblePageHello) {
        navigate('/hello');
      } else {
        navigate(state?.from || '/');
      }
    }
  }, [login, userName, location.state, isVisiblePageHello]);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  return {onLoginHandler, onChangeHandler};
};
