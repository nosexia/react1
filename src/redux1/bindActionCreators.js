export default function bindActionCreators(actions, dispatch) {
  let boundActions = {};
  for(let key in actions) {
    boundActions[key] = function(...args) {
      return dispatch( actions[key](...args) );
    }
  }
  return boundActions;
}