export default function createStore(reducer, initialState) {
    let state = initialState;
    function getState() {
      // console.log('state', state);
      return state;
    }

    let listeners = [];
    function subscribe(listener) {
      listeners.push(listener);
      return function() {
        let index = listeners.indexOf(listener);
        listeners.splice(index, 1);
      }
    }
    function dispatch(action) {
      state = reducer(state, action);
      listeners.forEach(listener => listener());
      return action;
    }
    dispatch({type: 'REDUX_INIT'});
    
    return {
      getState,
      subscribe,
      dispatch
    }
}