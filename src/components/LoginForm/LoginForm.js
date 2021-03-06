import React, { useState } from 'react';
import { LoginFormBlock, StyledInput, StyledButton } from './LoginForm.style';
import { useHistory } from "react-router-dom";

const LoginForm = () => {
  const history = useHistory();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onClick = () => {
    alert("로그인에 성공했습니다.");
    let path = '/';
    history.push(path);
  }

  return (
    <LoginFormBlock>
      <form>
        <ul>
          <li>
            <label>아이디</label>
            <StyledInput 
              value={username} 
              onChange={(e) => setUsername(e.target.value)} 
              autoComplete="username" 
              name="username" 
            />
          </li>
          <li>
            <label>비밀번호</label>
            <StyledInput
              value={password}
              onChange={e => setPassword(e.target.value)}
              type="password"
              autoComplete="password"
              name="password"
            />
          </li>
        </ul>
        {/* <a href="#">로그인</a> */}
        <StyledButton onClick={onClick}><a>로그인</a></StyledButton>
      </form>
    </LoginFormBlock>
  );
};

export default LoginForm;