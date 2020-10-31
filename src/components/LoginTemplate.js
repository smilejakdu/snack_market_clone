import React from 'react';
import styled from 'styled-components';
import LoginForm from '../components/LoginForm';


const LoginTemplateBlock = styled.div`
  /* css 초기화 */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; };
  
  width: 45%;
  justify-content: center;
  margin: 80px auto 40px auto;
  font-size: 10px;

  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to bottom, #999, rgba(0, 0, 0, 0)) 1 100%;
  border-top: 0px;


  .background {
    width: 100%;
    display: flex;
    margin-bottom: 20px;

    border-top: 2px solid #999;

    .border {
      border-width: 1px;
      border-style: solid;
      border-image: linear-gradient(to bottom, #999, rgba(0, 0, 0, 0)) 1 100%;
    }
    
    .login-range {
      width: 70%;
      padding: 30px 50px;

      .login-notice {
          margin-bottom: 20px;
        }

      #login-members {
        font-size: 25px;
        color: #999;
      }

      #login-login {
        font-size: 32px;
        font-weight: bold;
      }
    }
    .signup-range {
      width: 30%;
      padding: 30px 50px;

      #signup {
        font-size: 20px;
        color: #999;

        strong {
          font-size: 28px;
          color: black;
          margin-top: 0; // TODO: sing이 위에 붙게 
        }
      }
      #signup-content {
          margin: 20px 0;
          color: #999;
          font-size: 13px;
          font-weight: bold;
      }
    }
  }
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
  width: 80%;
  height: 100%;
  background: #777;
  text-shadow: 0px -1px rgba(0,0,0,0.5);

  a {
      font-size: 12px;
      color: white;
      text-align: center;
      justify-content: center;
      text-decoration: none !important;
      font-weight: bold;
    }

  & + & {
    margin-top: 10px;
  }
`;


const LoginTemplate = () => {
  return (
    <LoginTemplateBlock>
      <div class="background">
        <div class="login-range">
          <div class="login-notice">
            <p id="login-members">MEMBERS</p>
            <p id='login-login'>LOGIN</p>
          </div>
            <LoginForm />
        </div>
        <div class="border"></div>
        <div class="signup-range">
          <p id="signup">SIGN <strong>UP</strong></p>
          <p id="signup-content">회원가입을 하시면 더 많은<br />혜택을 받으실 수 있습니다.</p>

          <div class="button">
            <StyledButton><a herf="#">회원가입하기</a></StyledButton>
            <StyledButton><a href="#">아이디/비번찾기</a></StyledButton>
          </div>
        </div>
      </div>
    </LoginTemplateBlock>
  );
};

export default LoginTemplate;