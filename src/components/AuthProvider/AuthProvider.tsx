import React, {
  createContext,
  FC,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {TAuthContex} from './types';

const AuthContext = createContext<TAuthContex>({});

export const useAuthContext = (): TAuthContex => useContext(AuthContext);

export const AuthProvider: FC = ({children}) => {
  const [userName, setUserName] = useState<string>(
    localStorage.getItem('userName') || ''
  );

  useEffect(() => {
    if (userName) {
      localStorage.setItem('userName', userName);
    } else {
      localStorage.removeItem('userName');
    }
  }, [userName]);

  const login = useCallback((userName: string) => {
    setUserName(userName);
  }, []);

  const logout = useCallback(() => {
    setUserName('');
  }, []);

  const contextValue = {userName, login, logout} as TAuthContex;

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
