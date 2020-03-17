import React, {useState} from 'react';
export default function UserDtail(props) {
  let state = props.location.state;
  if(!state) {
    const localUsers = localStorage.getItem('users');
    const users = localUsers ? JSON.parse(localUsers) : [];
    const id = props.match.params.id;
    // 返回的是对象
    state = users.find(user => user.id === Number(id));
  }
  let [user] = useState(state);
  return (
    <div>
      <p>用户名：{user.username}</p>
    </div>
  )
}