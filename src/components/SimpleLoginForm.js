import React from 'react';
import styled from 'styled-components';

const SimpleLoginBlock = styled.div`
  .simple-login {
    margin-top: 50px;
    text-align: center;

    .simple-login-notice {
      color: #999;
      font-size: 15px;

      .title {
        font-size: 30px;
        color: black;
        font-weight: bold;
        strong {
          background: black;
          border-radius: 0%;
          width: 100px;
          height: 100%;
          color: white;
        }
      }
    }
  }

`;


const SimpleLoginForm = () => {
  return (
    <SimpleLoginForm>
      <div class="simple-login">
        <div class="simple-login-notice">
          <p class="title"><strong>&#8897;</strong> 간편로그인</p>
          <p class="sub-title">sns로 간편하게 로그인하세요!</p>
        </div>
      </div>
    </SimpleLoginForm>
  );
};

export default SimpleLoginForm;