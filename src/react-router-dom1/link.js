import React, {useContext} from 'react';
import RouterContext from './routerContext';
export default function(props) {
  let { to, children } = props;
  to = typeof to === 'object' ? to.pathname : to;
  const routerContext = useContext(RouterContext);
  return (
    <a 
    {...props}
    onClick={() => routerContext.history.push(to)}>{children}</a>
  )
}