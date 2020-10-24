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
      }
    }
  }
`;

const StyledInput = styled.input`
  font-size: 2rem;
  padding: 20px 0;
  /* 어떤 폼에 들어가든 인풋 폼이 깔끔하게 나오게 100% */
  width: 100%;
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
  width: 30%;
  height: 100%;
  background: #777;
  text-shadow: 0px -2px rgba(0,0,0,0.5);

  a {
      font-size: 2.5rem;
      color: white;
      text-align: center;
      justify-content: center;
      text-decoration: none !important;
    }
`;

const LoginForm = () => {
  return (
    <LoginFormBlock>
      <form>
        <ul>
          <li>
            <StyledInput autoComplete="username" name="username" placeholder="아이디" />
          </li>
          <li>
            <StyledInput autoComplete="password" name="password" placeholder="비밀번호" />
          </li>
        </ul>
        {/* <a href="#">로그인</a> */}
        <StyledButton><a href="#">로그인</a></StyledButton>
      </form>
    </LoginFormBlock>
  );
};

export default LoginForm;