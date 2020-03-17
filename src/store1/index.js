import reducers from './reducers';
import { createStore } from '../redux';

function logger({getState, dispatch}) {
  return function(next) {
    return function(action) {
      console.log('老状态的所有state值', getState());
      console.log('老状态的中只包含counter1的只', getState().counter1);
      next(action);
      // console.log(getState().counter1);
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


let store = applyMiddleware(logger)(createStore)(reducers);
export default store;