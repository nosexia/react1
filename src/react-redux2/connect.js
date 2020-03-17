import React, { useState, useContext, useEffect } from 'react';
import Context from './Context';
import { bindActionCreators } from '../redux2';
export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(OldComponent) {
    return function() {
      let { store } = useContext(Context);
      let [state, setState] = useState(mapStateToProps(store.getState()));
      const [boundActions] = useState(
        () => bindActionCreators(mapDispatchToProps, store.dispatch)
      );
      useEffect(() => {
        return store.subscribe(() => {
          setState(mapStateToProps(store.getState()));
        })
      }, []);
      return <OldComponent {...state} {...boundActions}  />
    }
  }
}
