import React from 'react';
import { SimpleLoginBlock } from './SimpleLoginForm.style';
import NaverButton from '../../utils/img/naverlogin.png';
import KakaoButton from '../../utils/img/kakaologin.png';


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