import counter1 from './counter1';
import { combineReducer } from '../../redux';
const reducers = {
  counter1,
}
// 将一个管家分为多个管家
export default combineReducer(reducers);