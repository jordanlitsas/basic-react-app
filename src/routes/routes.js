import React, { useContext, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { LoginContext } from '../providers';
import Posts from '../components/Posts';
import Login from '../components/Login';

export const AppRoutes = (props) => {
  const { loginStatus } = useContext(LoginContext);

  useEffect(() => {
    console.log('AppRoutes: ', loginStatus);
  }, [loginStatus]);

  return (
    <Switch>
      <Route exact path='/' render={() => ((!loginStatus
        ? <Redirect to={{ pathname: '/login' }} />
        : <Redirect to={{
          pathname: "/posts"
        }} />))} />


      <Route exact path='/login' render={() => ((!loginStatus
        ? <Login />
        : <Redirect to={{ pathname: '/posts' }} />))} />

      <Route exact path='/posts' render={() => ((!loginStatus
        ? <Redirect to={{ pathname: '/login' }} />
        : <Posts />))} />
    </Switch>
  )
}