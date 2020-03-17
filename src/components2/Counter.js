import React, { useState, useEffect } from 'react';
import store from '../store2';

export default function Counter() {
  let [state, setState] = useState(store.getState());
  useEffect(() => {
    return store.subscribe(() => {
      setState(store.getState());
    })
  }, []);

  return (
    <div>
      {state.number}
      <button onClick={() => store.dispatch({type: 'add'})}>+</button>
      <button onClick={() => store.dispatch({type: 'minus'})}>+</button>
    </div>
  )
}