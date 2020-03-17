import { WithRouter } from '../react-router-dom2';
import React from 'react';
function navHeader(props) {
  return (
    <a title={props.title} onClick={() => props.history.push(props.to)}>{props.children}</a>
  )
}

export default WithRouter(navHeader);


