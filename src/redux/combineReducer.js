export default function combineReducer(reducers) {
  return function(state = {}, action) {
    let nextState = {};
    // 迭代所有的reducers管家，
    // !此处要注意会执行所有的reducers, 必须保证每一个actions里面的名字不一样，不然会导致意向不到的结果
    // !此处要注意会执行所有的reducers, 必须保证每一个actions里面的名字不一样，不然会导致意向不到的结果
    // !!此处要注意会执行所有的reducers, 必须保证每一个actions里面的名字不一样，不然会导致意向不到的结果
    for(let key in reducers) {
      // 这是一个reducer
      let reducerForKey = reducers[key];
      // 这个是{number: 0}
      let previousStateForKey = state[key];
      // 根据action获取到最新的state
      let nextStateFormKey = reducerForKey(previousStateForKey, action);
      // 把最新的state赋值给key
      nextState[key] = nextStateFormKey;
    }
    // 返回状态集合          
    return nextState;
  }
}