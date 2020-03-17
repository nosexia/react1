import React, {useRef} from 'react';
export default function Login(props) {
  const usernameRef = useRef();
  const handleSubmit = e => {
    e.preventDefault();
    const state = props.location.state;
    localStorage.setItem('login', usernameRef.current.value);
    if(state) {
      return props.history.push(props.location.state.from);
    }
    return props.history.push('/');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" ref={usernameRef} />
      <button>登录</button>
    </form>
  )
}