import React from 'react';
import styled from 'styled-components';
import NaverButton from '../utils/img/naverlogin.png';
import KakaoButton from '../utils/img/kakaologin.png';

const SimpleLoginBlock = styled.div`
  .simple-login {
    margin-top: 50px;
    text-align: center;

    .simple-login-notice {
      color: #999;
      font-size: 15px;

      .title {
        margin: 0;
        font-size: 30px;
        color: black;
        font-weight: bold;
        .icon {
          left: 0px;
          font-size: 25px;
          position: relative;
          height: 40px;
          background: black;
          color: white;
          border-radius: 50%;
        }
      }
    }
  }
  .social {
    p img {
      width: 190px;
    }
  }
`;


const SimpleLoginForm = () => {
  return (
    <SimpleLoginBlock>
      <div class="simple-login">
        <div class="simple-login-notice">
          <p class="title"><span class="icon">✓</span> 간편로그인</p>
          <p class="sub-title">sns로 간편하게 로그인하세요!</p>
        </div>

        <div class="social">
          <p><img src={NaverButton} /></p>
          <p><img src={KakaoButton} /></p>
        </div>
      </div>
    </SimpleLoginBlock>
  );
};

export default SimpleLoginForm;