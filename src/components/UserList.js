import React, {useState, useEffect} from 'react';
import { Link } from '../react-router-dom';
export default function UserList(props) {
  let [users, setUsers] = useState([]);
  useEffect(() => {
    const userLocal = localStorage.getItem('users');
    let users = userLocal ? JSON.parse(userLocal) : [];
    setUsers(users);
  }, []);
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