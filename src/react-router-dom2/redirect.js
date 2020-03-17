import RouterContext from './Context';
import { useContext } from 'react';
export default function(props) {
  const routerContext = useContext(RouterContext);
  if(!props.from || props.from === routerContext.location.pathname) {
    routerContext.history.push(props.to);
    return null
  }
  return null;  
}