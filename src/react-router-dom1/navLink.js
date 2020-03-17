import React from 'react';
import { Link, Route } from '../react-router-dom1';
import './navLink.css';

export default function NavLink(props) {
  const { exact, to, children } = props;
  return (
    <Route
      exact={exact}
      path={to}
      children={routeProps => (
        <Link
        to={to}
        className={routeProps.match ? 'active' : ''}
        >{children}</Link>
      )}
    ></Route>
  )
}