import React from 'react';
import { Link, Route } from '../react-router-dom1';
import UserAdd from './userAdd';
import UserList from './userList';
import UserDetail from './userDetail';
export default function User(props) {
  return (
    <div>
      <p>
        <Link to="/user/add">新增</Link>
      </p>
      <p>
        <Link to="/user/list">列表</Link>
      </p>
      <Route path="/user/list" component={UserList}></Route>
      <Route path="/user/add" component={UserAdd}></Route>
      <Route path="/user/detail/:id" component={UserDetail}></Route>
    </div>
  )
}