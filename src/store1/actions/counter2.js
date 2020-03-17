import * as TYPES from '../action-types';
function add2() {
  return {type: TYPES.ADD2};
}

function minus2() {
  return {type: TYPES.MINUS2};
}

export default {
  add2,
  minus2
}