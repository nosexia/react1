import React from 'react';
import { Redirect, Route } from '../react-router-dom';
export default function Private(props) {
  const { path = '/', component: RouteComponent } = props;
  return (
    <Route path={path} 
    render = {routeProps => (
      localStorage.getItem('login') ? <RouteComponent {...routeProps} /> :
      <Redirect to={{ pathname: `/login`, state: {from: routeProps.location.pathname} }} />
    )}
    />
  )
}