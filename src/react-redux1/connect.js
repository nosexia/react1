import React, { useContext, useEffect, useState } from 'react';
import { bindActionCreators } from '../redux1';
import ReactReduxContext from './Content';
export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(OldComponent) {
    return function() {
      const {store} = useContext(ReactReduxContext);
      // 此处获取store.getState();
      let [state, setState] = useState(mapStateToProps(store.getState()));
      const [boundActions] = useState(() => bindActionCreators(mapDispatchToProps, store.dispatch));
      useEffect(() => {
        return store.subscribe(() => {
          // 获得最新的值
          setState(mapStateToProps(store.getState()));
        })
      }, []);
      
      return <OldComponent {...state} {...boundActions}/>
    }
  }
}