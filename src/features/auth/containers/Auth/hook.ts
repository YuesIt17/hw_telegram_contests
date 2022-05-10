import {useAuthContext} from '@/components/AuthProvider';
import {ChangeEvent, useCallback, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {usePageHello} from '../../../../router';
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
        navigate('/hw_telegram_contests/hello');
      } else {
        navigate(state?.from || '/hw_telegram_contests/');
      }
    }
  }, [login, userName, location.state, isVisiblePageHello]);

  const onChangeHandler = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  }, []);

  return {onLoginHandler, onChangeHandler};
};
