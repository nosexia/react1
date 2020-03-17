import React, {useState, useEffect} from 'react';
import RouterContext from './routerContext';
let locationState = null;
export default function HashRouter(props) {
  let [state, setState] = useState({
    location: {
      pathname: window.location.hash.slice(1),
      state: window.history.state
    }
  });
  // 没有依赖项为空，相当于在componentDidMount执行一次,
  // 没有依赖项，相当于执行多次，每一次都会执行,
  // 有依赖项，只有依赖项改变了，才会执行
  useEffect(() => {
    window.addEventListener('hashchange', () => {
      setState({
        ...state,
        location: {
          ...state.location,
          pathname: window.location.hash.slice(1) || '/',
          state: locationState
        }
      });
    }, false);
    window.location.hash = window.location.hash.slice(1) || '/';
  }, []);
  let prompt = null;
  const history = {
    location: state.location,
    push(to) {
      if(prompt) {
        let comfrim = window.confirm(prompt(to));
        if(!comfrim) {
          return;
        }
      }
      if(typeof to === 'object') {
        let {pathname, state:_locationState} = to;
        locationState = _locationState;
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
  const location = {
    location: state.location,
    history
  }
  return (
    <RouterContext.Provider value={location}>
      {props.children}
    </RouterContext.Provider>
  )
}