import * as TYPES from '../action-types';

function add1() {
  return { type: TYPES.ADD1 };
}

function minus1() {
  return { type: TYPES.MINUS1 }; 
}

export default {
  add1,
  minus1
}