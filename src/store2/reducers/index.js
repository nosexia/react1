import counter1 from './counter1';
import counter2 from './counter2';
import { combineReducer } from '../../redux2';

let reducers = {
  counter1,
  counter2
}
export default combineReducer(reducers);