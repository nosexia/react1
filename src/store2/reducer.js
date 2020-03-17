let initialState = { number: 0 };
export default function reducer(state = initialState, action) {
  switch(action.type) {
    case 'add':
      return {number : state.number + 1};
    case 'minus':
      return {number : state.number -1};
    default:
      return state;
  }
}