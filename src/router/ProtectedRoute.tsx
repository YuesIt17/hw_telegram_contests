import React, {ReactElement, FC} from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {useAuthContext} from '../components/AuthProvider';
import {NavigationState} from './types';

export const ProtectedRoute: FC = ({children}) => {
  const {userName} = useAuthContext();
  const location = useLocation();
  if (userName) return React.Children.only(children as ReactElement);
  return (
    <Navigate to="/auth" state={{from: location} as NavigationState} replace />
  );
};
