import React, {useState} from 'react';
import { Prompt } from '../react-router-dom';
export default function(props) {
  let [isBlocking, setIsBlocking] = useState(false);
  return (
    <>
      <Prompt
        when={isBlocking}
        message={pathname => `😚是否跳转到${pathname}吗？`}
      >  
      </Prompt>
      <div>
          <input onChange={(e) => setIsBlocking(e.target.value.length > 0)}/>
      </div>

    </>
  )
}