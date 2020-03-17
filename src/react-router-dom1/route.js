import React, {useContext} from 'react';
import RouterContext from './routerContext';
import { pathToRegexp } from 'path-to-regexp';
export default function Route(props) {
  const routerContext = useContext(RouterContext);
  let {path='/', component: RouteComponent, exact=false, children} = props;
  let paramNames = [];
  let regexp = pathToRegexp(path, paramNames, {end: exact});
  const pathname = routerContext.location.pathname;
  const matched = pathname.match(regexp);
  let routeProps = {
    history: routerContext.history,
    location: routerContext.location
  };
  if(matched) {
    paramNames = paramNames.map(item => item.name);
    let [url, ...values] = matched;
    let params = values.reduce((acc, cur, index) => {
      acc[paramNames[index]] = cur;
      return acc;
    }, {});
    let match = {
      url,
      isExact: pathname === url,
      path,
      params
    }
    routeProps.match = match;
    if(RouteComponent) {
      return <RouteComponent {...routeProps} />
    }else if(children) {
      return children(routeProps);
    }
  }else{
    if(children) {
      return children(routeProps);
    }
  }
  return null;
}