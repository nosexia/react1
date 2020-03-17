export default function combineReducers(reducers) {
  let nextState = {};
  return function(state = {}, action) {
    for(let key in reducers) {
      const reducerForKey = reducers[key];
      const previousStateForKey = state[key];
      const nextStateForKey = reducerForKey(previousStateForKey, action);
      nextState[key] = nextStateForKey;
    }
    return nextState;
  }
}