import React, { useRef, useState } from 'react';
import { Prompt } from '../react-router-dom2';
export default function UserDetail() {
  const usernameRef = useRef();
  const [when, setWhen] = useState(false);
  console.log('111');
  return (
    <div>
      <Prompt
      when={when}
      message = {message => `确定要跳转到${message}`}
      />
      <input  onChange={e => setWhen(e.target.value.length > 0)} ref={usernameRef}/>
    </div>
  )
}