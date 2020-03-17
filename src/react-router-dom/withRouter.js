import React from 'react';
import { Route } from '../react-router-dom';
export default function WithRouter(OldComponent) {
    return (
      props => (
        <Route
          render={routeProps => <OldComponent {...routeProps} {...props} /> }
        ></Route>
      )
    )
}