import React, { useContext, useEffect } from 'react';
import { LoginContext } from '../providers';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import { AuthState, onAuthUIStateChange } from '@aws-amplify/ui-components';
import { Typography } from '@mui/material';

const Login = () => {
  const { setLoginStatus, setAccessToken } = useContext(LoginContext);


  useEffect(() => {
    return onAuthUIStateChange((nextAuthState, authData) => {
      console.log(authData);
      if (nextAuthState === AuthState.SignedIn) {
        setLoginStatus(true);
        setAccessToken(authData.signInUserSession.idToken.jwtToken);
      } else {
        setLoginStatus(false);
        setAccessToken(null);
      }
    });
  }, [setLoginStatus, setAccessToken]);

  return (
    // use the AmplifyAuthenticator component to render the login form
    <AmplifyAuthenticator></AmplifyAuthenticator>
  );
}

export default Login;