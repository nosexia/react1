import React, { useState, useEffect } from 'react';
import store from '../store2';
import * as TYPES from '../store2/action-types';

export default function Counter2() {
  let [state, setState] = useState(store.getState().counter2);
  useEffect(() => {
    return store.subscribe(() => {
      setState(store.getState().counter2);
    })
  }, []);

  return (
    <div>
      {state.number}
      <button onClick={() => store.dispatch({type: TYPES.ADD2})}>+</button>
      <button onClick={() => store.dispatch({type: TYPES.MINUS2})}>-</button>
    </div>
  )
}