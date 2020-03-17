import { Route } from '../react-router-dom2';
import React from 'react';
export default function withRouter(OldComponent) {
  return function(props) {
    return <Route
            children={routeProps => <OldComponent {...props} {...routeProps} />}
            >
            </Route>
  }
}