import React, {useContext} from 'react';
import RouterContext from './routerContext';
export default function Link(props) {
  const routerContext = useContext(RouterContext);
  return (
    <a 
    {...props}
      onClick={e => routerContext.history.push(props.to)}>{props.children}
    </a>
  )
}