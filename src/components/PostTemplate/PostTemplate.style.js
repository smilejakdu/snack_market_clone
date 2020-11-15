import styled from "styled-components";

const PostTemplateBlock = styled.div`
  position: relative;
  align-items: center;
  text-align: center;
  justify-items: center;
  align-content: center;
  vertical-align: middle;
  width: 100%;
  font-size: 12px;

  hr {
    border-top: 1px dashed #e5e5e5;
  }

  .post-link {
    width: 100%;
    padding: 15px;
    text-align: center;
    justify-items: center;
    align-content: center;
    vertical-align: middle;
    align-items: center;
    
    ul {
      margin: 0;
      padding: 0;
      display: inline-flex;
      color: #999;

      li {
        list-style-type: none;

        a {
          text-decoration: none !important;
          color: #999;
        }
      }

      .divide-link {
        padding: 0px 10px;
      }
    }
  }

  .post-title {
    padding: 15px;
    color: #999;
  }

  table {
    width: 100%;

    tr {
      height: 25px;
    }

    thead {
      border-top: 1px solid #e5e5e5;
      border-bottom: 1px solid #e5e5e5;
      color: #999;
    }

    tbody tr {
      border-bottom: 1px solid #e5e5e5;
      color: #777;
    }
  }
`;

const PostWriteButton = styled.div`
  text-align: right;
  margin: 5px 0;

  button {
    border: 0;
    background-color: rgb(255, 255, 255);
  }
`;

export { PostTemplateBlock, PostWriteButton }