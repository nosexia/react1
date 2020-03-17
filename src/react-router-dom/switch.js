import {useContext} from 'react';
import RouterContext from './routerContext';
import {pathToRegexp} from 'path-to-regexp';
export default function Switch(props) {
  const routerContext = useContext(RouterContext);
  const pathname = routerContext.location.pathname;
  let child = props.children;
  child = Array.isArray(child) ? child : [child];
  for(let i = 0; i < child.length; i++) {
    const {path = '/', exact = false} = child[i].props;
    // p.end = p.end !== false
    const regexp = pathToRegexp(path, [], {end: exact});
    if(pathname.match(regexp)) {
      return child[i];
    }
  }
  return null;
}