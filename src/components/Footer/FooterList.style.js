import styled from 'styled-components';
import Arrow from '../../utils/img/down_arrow.gif';
import Study from '../../utils/img/study.gif';

const FooterBlock = styled.div`
position: relative;
border-top: 1px solid #e8e8e8;
border-bottom: 1px solid #e8e8e8;
background-color: #fbfbfb;
font-size: 12px;
line-height: 1.25;
color: #777;
font-family: 'Nanum Barun Gothic', Dotum, AppleGothic, Helvetica, sans-serif;
font-weight: normal;
display: block;
`;

const FooterListBlock = styled.div`
  position: relative;
  padding: 35px 0;
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  display: flex;
`;

const PostList = styled.div`
ul {
  display: block;
  list-style-type: none;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;

  li {
    display: list-item;
    text-align: -webkit-match-parent;
    font-family: 'Nanum Barun Gothic';
    font-weight: normal;
    margin: 0;
    padding: 0;
    line-height: 22px;

    a {
      color: #555;
      text-decoration: none;
    }

    h4 {
      color: #555;
      font-weight: bold;
      font-size: 16px;
      margin: 0;
      padding: 0 0 5px 0;

      a {
        color: #555;
      }
    }
  }

  .number strong {
    display: block;
    padding: 3px 0;
    font-size: 24px;
    color: #6bcbba;
  }
}

.arrow {
  display: inline-block;
  padding-right: 20px;
  /* background: url(./down_arrow.gif) no-repeat 100% 7px; */
  background: url(${Arrow}) no-repeat 100% 7px;
}
`

export { FooterBlock, FooterListBlock, PostList }