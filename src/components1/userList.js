import React from 'react';
import { Link } from '../react-router-dom1';
export default function UserList(props) {
  let users = localStorage.getItem('users');
  users = users ? JSON.parse(users) : [];
  return (
    <ul>
    {
      users.map(user => (
        <li key={user.id}>
          <Link to={{pathname: `/user/detail/${user.id}`, state: user}}>{user.username}</Link>
        </li>
      ))
    }
    </ul>
  )
}