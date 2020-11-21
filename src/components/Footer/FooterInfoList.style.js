import styled from 'styled-components';

const FooterInfoBlock = styled.div`
  margin: 0;
  padding: 0;
  position: relative;
  padding: 20px 0;
  background-color: #fff;
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  display: block;
`
const FooterInfo = styled.div`

  ul {
    margin-bottom: 10px;

    li {
      float: left;
      width: 14%;
      height: 32px;
      line-height: 32px;
      list-style: none;
      display: list-item;
      text-align: -webkit-match-parent;

      a {
        vertical-align: middle;
        color: #787878;
        text-decoration: none;

        img {
          border: 0 none;
        }
      }
    }
  }
`

export { FooterInfoBlock, FooterInfo }