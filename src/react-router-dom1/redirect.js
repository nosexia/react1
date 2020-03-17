import { useContext } from 'react';
import RouterContext from './routerContext';
export default function Redirect(props) {
  const routerContext = useContext(RouterContext);
  const {to, from} = props;
  if(!from || from === routerContext.location.pathname) {
    routerContext.history.push(to);
    return null;
  }
  return null;
}