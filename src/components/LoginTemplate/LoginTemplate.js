import React from 'react';
import { LoginTemplateBlock, StyledButton } from './LoginTemplate.style';


const LoginTemplate = ( {children} ) => {
  return (
    <LoginTemplateBlock>
      <div className="background">
        <div className="login-range">
          <div className="login-notice">
            <p id="login-members">MEMBERS</p>
            <p id='login-login'>LOGIN</p>
          </div>
            {children}
        </div>
        <div className="border"></div>
        <div className="signup-range">
          <p id="signup">SIGN <strong>UP</strong></p>
          <p id="signup-content">회원가입을 하시면 더 많은<br />혜택을 받으실 수 있습니다.</p>

          <div className="button">
            <StyledButton><a herf="#">회원가입하기</a></StyledButton>
            <StyledButton><a href="#">아이디/비번찾기</a></StyledButton>
          </div>
        </div>
      </div>
    </LoginTemplateBlock>
  );
};

export default LoginTemplate;