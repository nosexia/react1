import React from 'react';
import { Link, Route, NavLink } from '../react-router-dom';
import UserAdd from './UserAdd';
import UserList from './UserList';
import UserDetail from './UserDetail';
export default function User() {
  return (
    <div>
      <p><NavLink to="/user/add">新增</NavLink></p>
      <p><NavLink to="/user/list">列表</NavLink></p>
      <Route path="/user/add" component={UserAdd}></Route>
      <Route path="/user/list" component={UserList}></Route>
      <Route path="/user/detail/:id" component={UserDetail}></Route>
    </div>
  )
}