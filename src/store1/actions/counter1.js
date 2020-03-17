import * as TYPES from '../action-types';
function add1() {
  return {type: TYPES.ADD1};
}

function minus1() {
  return {type: TYPES.MINUS1};
}

// 异步动作
function add1Thunk() {
  return function(dispatch, getState) {
    setTimeout(function() {
      console.log('老状态', getState().counter1);
      dispatch({type: TYPES.ADD1});
      console.log('新状态', getState().counter1);
    }, 1000);
  }
}

// promise动作
function add1promise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({type: TYPES.ADD1});
    }, 1000)
  })
}


export default {
  add1,
  minus1,
  add1Thunk,
  add1promise
}