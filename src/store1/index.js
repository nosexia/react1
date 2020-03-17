import reducers from './reducers';
import { createStore } from '../redux';

function logger({getState, dispatch}) {
  return function(next) {
    return function(action) {
      console.log(getState().counter1);
      next(action);
      console.log(getState().counter1);
    }
  }
}

function proimse({getState, dispatch}) {
  return function(next) {
    // 利用递归反复执行
    return function(action) {
      if(typeof action.then === 'function') {
        action.then(dispatch, getState);
      }else{
        next(action);
      }
    }
  }
}

function thunk({dispatch, getState}) {
  return function(next) {
    return function(action) {
      if(typeof action === 'function') {
        action(dispatch, getState);
      }else{
        next(action);
      }
    }
  }
}

function applyMiddleware(middleware) {
  return function(createStore) {
    return function(reducer) {
      let store = createStore(reducer);
      let dispatch;
      middleware = middleware({
        getState: store.getState,
        dispatch: action => dispatch(action)
      });
      dispatch = middleware(store.dispatch);
      return {
        ...store,
        dispatch
      };
    }
  }
}


let store = applyMiddleware(proimse)(createStore)(reducers);
export default store;