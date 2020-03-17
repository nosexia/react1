import React, { useState, useEffect } from 'react';
import RouterContext from './routerContext';
export default function BorwserRouter(props) {
  let [currentState, setCurrentState] = useState({location: {
    pathname: '/'
  }});

  useEffect(() => {
    window.onpushstate = function(state, pathname) {
      setCurrentState({
        ...currentState,
        location: {
          pathname,
          state
        }
      })
    }
    window.onpopstate = function(e) {
      setCurrentState({
        ...currentState,
        location: {
          pathname: window.location.pathname,
          state: e.state
        }
      })
    }
  }, []);
  const prompt = null;
  const globalHistory = window.history;
  const history = {
    location: currentState.location,
    push(to) {
      console.log(to, '----');
      if(prompt) {
        let confirm = window.confirm(prompt(to));
        if(!confirm) {
          return;
        }
      }
      if(typeof to === 'object') {
        const {pathname, state} = to;
        globalHistory.pushState(state, null, pathname);
      }else{
        console.log(to, '----');
        globalHistory.pushState(null, null, to);
      }
    },
    block(message) {
      prompt = message;
    },
    unblock() {
      prompt = null;
    }
  }
  const routeProps = {
    location: currentState.location,
    history
  }
  return (
    <RouterContext.Provider value={routeProps}>
      {props.children}
    </RouterContext.Provider>
  )
}