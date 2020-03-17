import * as TYPES from '../action-types';
function add() {
  return {type: TYPES.ADD};
}

function minus() {
  return {type: TYPES.MINUS};
}


export default {
  add,
  minus
}