import counter1 from './counter1';
import counter2 from './counter2';
import { combineReducers } from '../../redux1';
let reducers = {
  counter1,
  // counter2
}
export default combineReducers(reducers);