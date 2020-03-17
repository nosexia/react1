import React from 'react';
export default function UserDetail(props) {
  let state = props.location.state;
  if(!state) {
    let id = Number(props.match.params.id);
    let users = localStorage.getItem('users');
    users = users ? JSON.parse(users) : [];
    state = users.find(item => item.id === id);
    console.log(state);
  }
  return (
    <div>
      用户名: {state.username}
      id: {state.id}
    </div>
  )
}