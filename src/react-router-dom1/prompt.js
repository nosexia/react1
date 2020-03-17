import { useContext } from 'react';
import RouterContext from './routerContext';
export default function Prompt(props) {
  const routerContext = useContext(RouterContext);
  const {when, message} = props;
  if(when) {
    routerContext.history.block(message);
  }else{
    routerContext.history.unblock(null);
  }
  return null;
}