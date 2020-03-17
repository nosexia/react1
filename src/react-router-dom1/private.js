import React, { useContext } from 'react';
import { Redirect, Route } from '../react-router-dom1';
import RouterContext from './routerContext';
export default function Private(props) {
  const routerContext = useContext(RouterContext);
  return(
    localStorage.getItem('login') 
    ? <Route {...props} />
    :<Redirect to={{ pathname: '/login', 
      state: {from: routerContext.location.pathname} }} />
  )
}