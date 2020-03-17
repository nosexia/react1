import * as TYPES from '../action-types';
const initialState = { number: 1 };
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case TYPES.ADD2:
      return { number: state.number + 1 };
    case TYPES.MINUS2:
      return { number: state.number -1 };
    default:
      return state;
  }
}