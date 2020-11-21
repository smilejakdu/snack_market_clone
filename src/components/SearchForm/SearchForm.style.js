import styled from 'styled-components';

const SearchFormBlock = styled.div`
  width: 100%;
  text-align: right;
  height: 24px;
  margin: 5px 0 10px 0;

  label {
    margin: 0;
    padding: 0;
    margin-right: 10px;
    
    input {
      vertical-align: middle;
      margin-right: 5px;
    }
  }

  button {
    border: 0;
    height: 24px;
    color: white;
    background-color: #999;
    overflow: visible;
    margin-left: 5px;
  }
`;

export { SearchFormBlock };