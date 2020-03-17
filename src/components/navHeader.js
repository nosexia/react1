import React from 'react';
import { WithRouter } from '../react-router-dom';
function navHeader(props) {
  return (
    <div title={props.title}  onClick={() => props.history.push('/profile')}>珠峰培训</div>
  )
}
export default WithRouter(navHeader);