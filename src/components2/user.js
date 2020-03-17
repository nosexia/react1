import React from 'react';
import UserAdd from './userAdd';
import UserDetail from './userDetail';
import UserList from './userList';
import { Route, NavLink } from '../react-router-dom2';
export default function User() {
  return (
    <div>
      <NavLink to="/user/list">列表页</NavLink>
      <NavLink to="/user/detail">详情页</NavLink>
      <NavLink to="/user/add">新增页</NavLink>
      <Route path="/user/list" component={UserList}></Route>
      <Route path="/user/detail" component={UserDetail}></Route>
      <Route path="/user/add" component={UserAdd}></Route>
    </div>
  )
}