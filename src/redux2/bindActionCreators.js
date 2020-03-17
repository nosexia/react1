export default function bindActionCreators(actions, dispatch) {
  let boundActions = {};
  for(let key in actions) {
    let action = actions[key];
    boundActions[key] = function() {
      dispatch(action());
    }
  }
  return boundActions;
}