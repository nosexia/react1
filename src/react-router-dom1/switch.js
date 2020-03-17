import { useContext } from 'react';
import RouterContext from './routerContext';
import { pathToRegexp } from 'path-to-regexp';
export default function Switch(props) {
  const routerContext = useContext(RouterContext);
  const { children } = props;
  for(let i = 0; i < children.length; i++) {
    const { props } = children[i];
    const { path="/", exact=false, from } = props;
    const pathname = routerContext.location.pathname;

    // 平常的from
    if(from) {
      const regexp = pathToRegexp(from, [], {end: exact});
      const match = pathname.match(regexp);
      if(match) {
        return children[i];
      }
    }else{
      const regexp = pathToRegexp(path, [], {end: exact});
      const match = pathname.match(regexp);
      if(match) {
        return children[i];
      }
    }
  }
  return null;
}