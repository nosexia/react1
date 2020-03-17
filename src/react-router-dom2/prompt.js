import { useContext } from 'react';
import RouterContext from './Context';
export default function Prompt({when, message}) {
  const routerContext = useContext(RouterContext);
  if(when) {
    routerContext.history.block(message);
  }else{
    routerContext.history.unblock();
  }
  return null;
}