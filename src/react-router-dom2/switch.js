import { useContext } from 'react';
import RouterContext from './Context';
import { pathToRegexp } from 'path-to-regexp';
export default function Switch(props) {
  let routerContext = useContext(RouterContext);
  let childrens = props.children;
  for(let i = 0; i < childrens.length; i++) {
    let child = childrens[i];
    let {path = '/', from, exact = false} = child.props;
    // 是否是redirect组件
    if(from) {
      let regexp = pathToRegexp(from, [], {end: exact});
      if(regexp.test(routerContext.location.pathname)) {
        return child;
      }
    }else{
      let regexp = pathToRegexp(path, [], {end: exact});
      if(regexp.test(routerContext.location.pathname)) {
        return child;
      }
    }

  }
  return null;
}