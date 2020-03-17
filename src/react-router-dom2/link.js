import React, { useContext } from 'react';
import RouterContext from './Context';
export default function Link(props) {
  let { to } = props;
  const routerContext = useContext(RouterContext);
  return (
    <a 
    {...props}
    onClick={() => routerContext.history.push(to)}
    >{props.children}</a>
  )
}