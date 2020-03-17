import React, { useRef, useState } from 'react';
export default function Login(props) {
  const usernameRef = useRef();
  let onSubmit = e => {
    e.preventDefault();
    localStorage.setItem('login', JSON.stringify({'username': usernameRef.current.value}));
    if(props.location.state) {
      props.history.push(props.location.state.from);
    }else{
      props.history.push('/');
    } 
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input ref={usernameRef} />
        <button>提交</button>
      </form>
    </div>
  )
}