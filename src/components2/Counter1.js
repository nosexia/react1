import React from 'react';
import actions from '../store2/actions/counter1';
import { connect } from '../react-redux2';
function Counter1(props) {
  return (
    <div>
      {props.number}
      <button onClick={props.add1}>+</button>
      <button onClick={props.minus1}>-</button>
    </div>
  )
}

const mapStateToProps = state => state.counter1;
export default connect(
  mapStateToProps,
  actions
)(Counter1);
