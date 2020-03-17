import RouterContext from './Context';
import React, { useContext, useState, useEffect } from 'react';
import { checkPropTypes } from 'prop-types';
export default function BrowserRouter(props) {
  let [currentState, setCurentState] = useState({
    location: {
      pathname: window.location.pathname,
      state: window.history.state
    }
  });

  useEffect(() => {
    window.onpopstate = function(e) {
      setCurentState({
        ...currentState,
        location: {
          ...currentState.location,
          pathname: window.location.pathname,
          state: e.state
        }
      })
    }

    window.onpushstate = function(state, title, url) {
      setCurentState({
        ...currentState,
        location: {
          ...currentState.location,
          pathname: url,
          state
        }
      })
    }
  }, []);
  let prompt = null;
  let globalHistory = window.history;
  let history = {
    push(to) {
      if(prompt) {
        let confirm = window.confirm(prompt(currentState.location.pathname));
        if(!confirm) {
          return;
        }
      }
      if(typeof to === 'object') {
        let {pathname, state} = to;
        globalHistory.pushState(state, null, pathname);
      }else{
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
  let location = {
    location: currentState.location,
    history
  }

  return (
    <RouterContext.Provider value={location}>
      {props.children}
    </RouterContext.Provider>
  )
}