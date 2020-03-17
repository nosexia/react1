import React from 'react';
import RouterContext from './routerContext';
export default class HashRouter extends React.Component {
  state = {
    location: {
      pathname: window.location.hash.slice(1),
      state: window.history.state
    }
  }
  componentDidMount() {
    window.addEventListener('hashchange', e => {
      this.setState({
        ...this.state,
        location: {
          ...this.state.location,
          pathname: window.location.hash.slice(1) || '/',
          state: this.locationState
        }
      })
    }, false);
    window.location.hash = window.location.hash.slice(1) || '/';
  }

  render() {
    const _this = this;
    const push = to => {
      if(history.message) {
        let confirm = window.confirm(history.message(to));
        if(!confirm) return; 
      }
      if(typeof to === 'object') {
        const {pathname, state} = to;
        _this.locationState = state;
        window.location.hash = pathname;
      }else{
        window.location.hash = to;
      }
    }
    const block = message => {
      history.message = message;
    }
    const unblock = () => {
      history.message = null;
    }
    const history = {
      push,
      block,
      unblock
    }
    const location = {
      location: this.state.location,
      history
    }
    return (
      <RouterContext.Provider value={location}>
        {this.props.children}
      </RouterContext.Provider>
    )
  }
}