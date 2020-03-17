import React, { useContext, useState, useEffect } from 'react';
import ReactReduxContext from './Content';
import { bindActionCreators } from '../redux';
export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(OldComponent) {
    return function() {
      let { store } = useContext(ReactReduxContext);
      let [state, setState] = useState(mapStateToProps(store.getState()));
      useEffect(() => {
        return store.subscribe(() => {
          setState(mapStateToProps(store.getState()));
        })
      }, []);
      let boundActions = bindActionCreators(mapDispatchToProps, store.dispatch);
      return <OldComponent {...boundActions} {...state} />
    }
  }
}