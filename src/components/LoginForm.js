import React from 'react';
import styled from 'styled-components';

const LoginFormBlock = styled.div`
  form {
    position: relative;

    ul {
      padding: 0;
      list-style: none;
      width: 40%;
      li {
        position: relative;
        display: flex;
        justify-items: center;
        align-content: center;
        vertical-align: middle;
        height: 100%;
        margin-top: 10px;
        
        label {
          width: 80px;
          padding-top: 3px;
          color: #999;
          font-weight: bold;
        }
      }
    }
  }
`;

const StyledInput = styled.input`
  font-size: 12px;
  /* 어떤 폼에 들어가든 인풋 폼이 깔끔하게 나오게 100% */
  max-width: 60%;
  display: flex;
  height: 10px;
`;

const StyledButton = styled.button`
  background: inherit;
  border:none;
  box-shadow:none;
  border-radius:0;
  padding:0; overflow:visible;
  cursor:pointer;
  top: 0%;
  left: 70%;
  position: absolute;
  width: 20%;
  height: 100%;
  background: #777;
  text-shadow: 0px -1px rgba(0,0,0,0.5);

  a {
      font-size: 2.5rem;
      color: white;
      text-align: center;
      justify-content: center;
      text-decoration: none !important;
      font-weight: bold;
    }
`;

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <form>
        <ul>
          <li>
            <label>아이디</label>
            <StyledInput autoComplete="username" name="username" />
          </li>
          <li>
            <label>비밀번호</label>
            <StyledInput autoComplete="password" name="password" />
          </li>
        </ul>
        {/* <a href="#">로그인</a> */}
        <StyledButton><a href="#">로그인</a></StyledButton>
      </form>
    </LoginFormBlock>
  );
};

export default LoginForm;