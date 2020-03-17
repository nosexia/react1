import React, {useContext} from 'react';
import RouterContext from './Context';
import { Route, Redirect } from '../react-router-dom2';
export default function Private(props) {
  const routerContext = useContext(RouterContext);
  return localStorage.getItem('login') ?
  <Route {...props}></Route> :
  <Redirect to={{pathname: '/login', state: {from: routerContext.location.pathname}}}></Redirect>
}