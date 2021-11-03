import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Login from './components/Login';
import Counter from './components/Counter';
import WelcomeText from './components/WelcomeText';
import Posts from './components/Posts';
import Calculator from './components/Calculator';
import { AppBar, Toolbar, Grid, Typography, Button } from '@mui/material';

const App = () => {

  return (
    <BrowserRouter>
      <AppBar position="static">
        <Toolbar>
          <Grid container justifyContent='space-between'>
            <Grid item>
              <Typography variant={'h6'}>My App</Typography>
            </Grid>
            <Grid item>
              <Link to='/' style={{ textDecoration: 'none' }}> <Button style={{ color: "white" }}> Home </Button> </Link>
              <Link to='/counter' style={{ textDecoration: 'none' }}> <Button style={{ color: "white" }}> Counter </Button> </Link>
              <Link to='/posts' style={{ textDecoration: 'none' }}> <Button style={{ color: "white" }}> Posts </Button> </Link>
              <Link to='/calc' style={{ textDecoration: 'none' }}> <Button style={{ color: "white" }}> Calculator </Button> </Link>
              <Link to='/login' style={{ textDecoration: 'none' }}> <Button style={{ color: "white" }}> Login </Button> </Link>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <Switch>
        <Route path='/login'><Login /></Route>
        <Route path='/counter'> <Counter /> </Route>
        <Route path='/posts'> <Posts /> </Route>
        <Route path='/calc'> <Calculator /> </Route>
        <Route path='/'><WelcomeText /> </Route>
      </Switch>
    </BrowserRouter>
  )
}

export default App;
