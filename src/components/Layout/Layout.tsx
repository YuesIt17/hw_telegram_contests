import React, {FC, memo} from 'react';
import {Header} from './Header';
import PropTypes from 'prop-types';

export const Layout: FC = memo(({children}) => (
  <div>
    <Header />
    <main>{children}</main>
  </div>
));

Layout.displayName = 'Layout';
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
