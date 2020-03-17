export default function combineReducer(reducers) {
  let nextState = {};
  return function(state = {}, action) {
    for(let key in reducers) {
      let reducerForKey = reducers[key];
      let previousStateForKey = state[key];
      let nextStateForKey = reducerForKey(previousStateForKey, action);
      nextState[key] = nextStateForKey;
    }
    return nextState;
  }
}