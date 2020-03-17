import React, { useRef } from 'react';
export default function(props) {
  const usernameRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('login', JSON.stringify({username: usernameRef.current.value, id: Date.now()}));
    if(props.location.state) {
      // console.log(props.location.state);
      return props.history.push( props.location.state.from );
    }
    return props.history.push('/');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="" ref={usernameRef}/>
      <button>登录</button>
    </form>
  )
}