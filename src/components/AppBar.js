import React, { useContext } from 'react';
import {
  Link,
} from "react-router-dom";
import { AppBar, Toolbar, Grid, Typography, Button } from '@mui/material';
import { LoginContext } from '../providers';
import { Auth } from 'aws-amplify';

const App = () => {
  const { setLoginStatus } = useContext(LoginContext);

  const signOut = async () => {
    try {
      await Auth.signOut({ global: true });
    } catch (error) {
      console.log('error signing out: ', error);
    }
  }

  const handleLogout = () => {
    window.localStorage.clear();
    setLoginStatus(false);
    signOut();
  }

  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent='space-between'>
          <Grid item>
            <Typography variant={'h6'}>My App</Typography>
          </Grid>
          <Grid item>
            <Link to='/posts' style={{ textDecoration: 'none' }}> <Button style={{ color: "white" }}> Posts </Button> </Link>
            <Button style={{ color: "white" }} onClick={handleLogout}> Logout </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default App;
