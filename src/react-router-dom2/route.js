import React, { useContext } from 'react';
import { pathToRegexp } from 'path-to-regexp';
import RouterContext from './Context';
export default function Route(props) {
  let routerContext = useContext(RouterContext);
  let {exact = false, path = '/', component:RouteComponent, children: RouteChildren} = props;
  let pathname = routerContext.location.pathname;
  let routeProps = {
    history: routerContext.history,
    location: routerContext.location
  };
  let paramsName = [];
  let regexp = pathToRegexp(path, paramsName, {end: exact});
  let matched = pathname.match(regexp);
  if(matched) {
    paramsName = paramsName.map(item => item.name);
    let [url, ...values] = matched;
    let params = {};
    paramsName.forEach((item, index) => {
      params[item] = values[index];
    });
    let match = {
      isExact: url === pathname,
      params,
      pathname
    }
    routeProps.match = match;
    if(routerContext) {

    }
    if(RouteComponent) {
      return <RouteComponent {...routeProps} />
    }else if(RouteChildren){
      return <RouteChildren {...routeProps} />
    }
  }else{
    if(RouteChildren) {
      return <RouteChildren {...routeProps} />
    }
  }
  return null;
}