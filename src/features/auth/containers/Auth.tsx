import React, {FC, useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import {useAuthContext} from '../../../components/AuthProvider';
import {NavigationState} from '../../../router/types';

export const Auth: FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const {login} = useAuthContext();
  const [userName, setUserName] = useState<string>('');

  const onClick = () => {
    if (login && userName) {
      const state = location.state as NavigationState;
      login(userName);
      navigate(state?.from || '/');
    }
  };

  return (
    <div>
      <div>Авторизация</div>
      <input onChange={(e) => setUserName(e.target.value)}></input>
      <button type="button" onClick={onClick}>
        Вход
      </button>
    </div>
  );
};
