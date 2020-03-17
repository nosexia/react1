import React, {useState, useRef, useEffect} from 'react';
import { Prompt } from '../react-router-dom1';
export default function UserAdd(props) {
  const usernameRef = useRef();
  let [when, setWhen] = useState(false);
  let [submiting, setSubmit] = useState(false);
  const handleSubmit = e => {
    e.preventDefault();
    setWhen(false);
    setSubmit(true);
  }
  useEffect(() => {
    if(submiting) {
        let users = localStorage.getItem('users');
        users = users ? JSON.parse(users) : [];
        users.push({username: usernameRef.current.value, id: Date.now()});
        localStorage.setItem('users', JSON.stringify(users));
        return props.history.push('/user/list');
    }
  }, [submiting]);

  return (
    <>
    <Prompt
      message={pathname => `确定要跳转到${pathname}?`}
      when={when}
    ></Prompt>
    <form onSubmit={handleSubmit}>
      <input ref={usernameRef} onChange={e => setWhen(e.target.value.length > 0)}/>
      <button>提交</button>
    </form>
    </>
  )
}