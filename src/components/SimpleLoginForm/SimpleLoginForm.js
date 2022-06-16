import React from 'react';
import { SimpleLoginBlock } from './SimpleLoginForm.style';
import NaverButton from '../../utils/img/naverlogin.png';
import KakaoButton from '../../utils/img/kakaologin.png';


const SimpleLoginForm = () => {
  return (
    <SimpleLoginBlock>
      <div className="simple-login">
        <div className="simple-login-notice">
          <p className="title"><span className="icon">✓</span> 간편로그인</p>
          <p className="sub-title">sns로 간편하게 로그인하세요!</p>
        </div>

        <div className="social">
          <p><img src={NaverButton} alt="naverlogin" /></p>
          <p><img src={KakaoButton} alt="kakaplogin" /></p>
        </div>
      </div>
    </SimpleLoginBlock>
  );
};

export default SimpleLoginForm;