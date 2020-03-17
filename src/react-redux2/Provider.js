import ReactReduxContext from './Context';
import React from 'react';
export default function Provider(props) {
  return (
    <ReactReduxContext.Provider value={{store: props.store}}>
      {props.children}
    </ReactReduxContext.Provider>
  )
}