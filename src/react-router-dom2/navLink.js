import React from 'react';
import { Link, Route } from '../react-router-dom2';
export default function NavLink(props) {
  const { to, exact = false, children } = props;
  return <Route
    path={to}
    exact={exact}
    children={routeProps => (
      <Link
      to={to}
      className={routeProps.match ? 'current' : ''}
      >{children}</Link>
    )}
  ></Route>
}