import { Container, Button } from '@mui/material';
import React from 'react';

const LoginForm = (props) => {

  let view = (
    <Container>
      <h3> {props.loginStatus ? "You are logged in!!!" : "Click the button to login"} </h3>
      <Button onClick={props.login}> Login </Button>
    </Container>
  )

  return view;
}

export default LoginForm;