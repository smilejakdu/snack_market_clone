import styled from "styled-components";
import palette from "../../utils/styles/palette";

const LoginTemplateBlock = styled.div`
  /* css 초기화 */
  html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video { margin: 0; padding: 0; border: 0; font-size: 100%; font: inherit; vertical-align: baseline; };
  
  width: 45%;
  justify-content: center;
  margin: 80px auto 40px auto;
  font-size: 10px;

  border-width: 2px;
  border-style: solid;
  border-image: linear-gradient(to bottom, ${palette.gray[10]}, rgba(0, 0, 0, 0)) 1 100%;
  border-top: 0px;


  .background {
    width: 100%;
    display: flex;
    margin-bottom: 20px;

    border-top: 2px solid ${palette.gray[10]};;

    .border {
      border-width: 1px;
      border-style: solid;
      border-image: linear-gradient(to bottom, ${palette.gray[10]}, rgba(0, 0, 0, 0)) 1 100%;
    }
    
    .login-range {
      width: 70%;
      padding: 30px 50px;

      .login-notice {
          margin-bottom: 20px;
        }

      #login-members {
        font-size: 25px;
        color: ${palette.gray[10]};;
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
        color: ${palette.gray[10]};;

        strong {
          font-size: 28px;
          color: black;
          margin-top: 0; // TODO: sing이 위에 붙게 
        }
      }
      #signup-content {
          margin: 20px 0;
          color: ${palette.gray[10]};;
          font-size: 11px;
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
  background: ${palette.gray[11]};;
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

export { LoginTemplateBlock, StyledButton };