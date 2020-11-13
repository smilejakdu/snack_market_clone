import styled from "styled-components";

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

export { SimpleLoginBlock };