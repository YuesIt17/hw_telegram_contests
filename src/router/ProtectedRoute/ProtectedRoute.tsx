import {useAuthContext} from '@/components/AuthProvider';
import React, {ReactElement, FC} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {NavigationState} from '../types';

export const ProtectedRoute: FC = ({children}) => {
  const {isUserAuthorization} = useAuthContext();
  const location = useLocation();

  if (isUserAuthorization) return React.Children.only(children as ReactElement);
  return (
    <Navigate
      to="/hw_telegram_contests/auth"
      state={{from: location} as NavigationState}
      replace
    />
  );
};
