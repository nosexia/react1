import React, { useState, useEffect } from 'react';
import RouterContext from './Context';
let locationState;
export default function HashRouter(props) {
  let [state, setState] = useState({location: {
    pathname: window.location.hash.slice(1),
    state: locationState
  }});
  
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setState({
        ...state,
        location: {
          ...state.location,
          pathname: window.location.hash.slice(1) || '/',
          state:locationState
        }
      })
    })
    window.location.hash = window.location.hash.slice(1) || '/';
  }, []);
  let prompt = null;
  let history = {
    push(to) {
      if(prompt) {
        let confirm = window.confirm(prompt(state.location.pathname));
        if(!confirm) {
          return;
        }
      }
      if(typeof to === 'object') {
        let {pathname, state} = to;
        locationState = state;
        window.location.hash = pathname;
      }else{
        window.location.hash = to;
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
    location: state.location,
    history,
  }

  return (
    <RouterContext.Provider value={location}>
      {props.children}
    </RouterContext.Provider>
  )
}
