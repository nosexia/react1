import * as TYPES from '../action-types';
let initialState = { number: 100 };
export default function counter1(state = initialState, action) {
  switch(action.type) {
    case TYPES.ADD1:
      return { number: state.number + 1 };
    case TYPES.MINUS1:
      return { number: state.number -1 };
    default:
      return state; 
  }
}