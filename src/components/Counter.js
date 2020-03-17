import React from 'react';
import actions  from '../store1/actions/counter';
import { connect } from '../react-redux1';
function Counter(props) {
  return (
    <div>
      {props.number}
      <button onClick={props.add}>+</button>
      <button onClick={props.minus}>-</button>
    </div>
  )
}

const mapStateToProps = state => state;
export default connect(
  mapStateToProps,
  actions
)(Counter);
