import React from 'react';
import PropTypes from 'prop-types';
import { LoginContext, LoginProvider, logout } from './LoginProvider';

export {
  LoginContext,
  LoginProvider,
  logout
};

export const ContextManager = (props) => {
  const { children } = props;
  return (
    <LoginProvider>
      {children}
    </LoginProvider>
  );
};

ContextManager.propTypes = {
  children: PropTypes.node.isRequired
};