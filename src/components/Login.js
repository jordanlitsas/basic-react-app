import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../providers';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Typography } from '@mui/material';

const Login = () => {
  const { setLoginStatus } = useContext(LoginContext);


  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      console.log(authData);
      if (nextAuthState === AuthState.SignedIn) {
        setLoginStatus(true);
      } else {
        setLoginStatus(false);
      }
    });
  }, [setLoginStatus]);

  return (
    <AmplifyAuthenticator />
  );
}

export default Login;