import React from 'react';
import RouterContext from './routerContext';
import { pathToRegexp }  from 'path-to-regexp';
export default class Route extends React.Component {
  static contextType = RouterContext;
  render() {
    let {path='/', exact = false, component: RouteComponent, render, children} = this.props;
    path = typeof path === 'object' ? path.pathname : path;
    let pathname = this.context.location.pathname;
    let paramsNames = [];
    let regexp = pathToRegexp(path, paramsNames, {end: exact});
    let matched = pathname.match(regexp);
    let routeProps = {
      location: this.context.location,
      history: this.context.history
    }
    if(matched) {
      let params = {};
      paramsNames = paramsNames.map(item => item.name);
      let [url, ...values] = matched;
      values.forEach((value, index) => {
        params[paramsNames[index]] = value;
      });
      const match = {
        url,
        params,
        isExact: pathname === url,
        path
      }
      routeProps.match = match;
      if(RouteComponent) {
        return <RouteComponent {...routeProps} />
      }else if(render) {
        return render(routeProps);
      }else if(children) {
        return children(routeProps);
      }else{
        return null;
      }
    }else{
      if(children) {
        return children(routeProps);
      }else{
        return null;
      }
    }
  }
}