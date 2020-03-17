export default function createStore(reducer) {
  let state;
  let listeners = [];

  function getState() {
    return state;
  }

  function dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
      return action;
  }
  // 初始化state
  dispatch({type: '@@REDUX_INIT'});

  function subscribe(listener) {
    listeners.push(listener);
    return function() {
      let index = listeners.indexOf(listener);
      listeners.splice(index, 1);
    }
  }

  return {
    getState,
    dispatch,
    subscribe
  }
}