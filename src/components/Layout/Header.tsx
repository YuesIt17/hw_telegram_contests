import React, {FC, memo} from 'react';
import {useAuthContext} from '../AuthProvider';
import PropTypes from 'prop-types';

export const Header: FC = memo(({children}) => {
  const {logout} = useAuthContext();

  return (
    <header>
      {children}
      <button onClick={logout} type="button">
        Выйти
      </button>
    </header>
  );
});

Header.displayName = 'Header';
Header.propTypes = {
  children: PropTypes.node.isRequired,
};
