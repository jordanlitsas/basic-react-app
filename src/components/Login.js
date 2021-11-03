import React, { useState } from 'react';

import { Container, Button } from '@mui/material';

import WelcomeText from './WelcomeText';
import LoginForm from './LoginForm';

const Login = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [showWelcomeText, setShowWelcomeText] = useState(true);

  const login = () => {
    setLoginStatus(true);
  }

  const toggleWelcomeText = () => {
    setShowWelcomeText(!showWelcomeText);
  }

  return (
    <Container>
      {showWelcomeText ? <WelcomeText /> : null}
      <LoginForm loginStatus={loginStatus} login={login} />
      <Button onClick={toggleWelcomeText}> Toggle Welcome Text </Button>
    </Container>
  )
}

export default Login;
