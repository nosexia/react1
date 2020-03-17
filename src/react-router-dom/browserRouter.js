import React, {useState, useEffect} from 'react';
import RouterContext from './routerContext';
export default function BrowserRouter(props) {
  const [currentState, setCurrentState] = useState({location: {pathname: '/'}});
  // 只在componentDidMount执行一次
  useEffect(() => {
    window.onpushstate = function(state, pathname) {
      setCurrentState({
        location: {
          ...currentState.location,
          pathname,
          state,
        }
      });
    }
    window.onpopstate = function(event) {
      setCurrentState({
        location: {
          ...currentState.location,
          pathname: window.location.pathname,
          state: event.state
        }
      })
    }
  }, []);
  const globalHistory = window.history;
  let history = {
    push(to) {
      if(typeof to === 'object') {
        let {pathname, state} = to;
        globalHistory.pushState(state, null, pathname);
      }else{
        globalHistory.pushState(null, null, to);
      }
    },
    block(message) {
      history.message = message;
    },
    unblock() {
      history.message = null;
    }
  }
  let routerValue = {
    location: currentState.location,
    history
  }
  return (
    <RouterContext.Provider value={routerValue}>
      {props.children}
    </RouterContext.Provider>
  )
}