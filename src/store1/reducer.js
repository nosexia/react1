import * as TYPES from './action-types';
const initialState = { number: 0 };
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case TYPES.ADD:
      return { number: state.number + 1 };
    case TYPES.MINUS:
      return { number: state.number -1 };
    default:
      return state;
  }
}