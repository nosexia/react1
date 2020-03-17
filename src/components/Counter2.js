import React, { useState, useEffect } from 'react';
import store from '../store1';
import actions  from '../store1/actions/counter2';
import { bindActionCreators } from '../redux1';
const boundActions = bindActionCreators(actions, store.dispatch);
export default function Counter2() {
  let [state, setState] = useState(store.getState().counter2);
  useEffect(() => {
    return store.subscribe(() => {
      setState(store.getState().counter2);
    });
  }, []);
  return (
    <div>
      {state.number}
      <button onClick={boundActions.add2}>+</button>
      <button onClick={boundActions.minus2}>-</button>
    </div>
  )
}