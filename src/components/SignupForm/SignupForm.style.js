import styled from "styled-components";
import palette from "../../utils/styles/palette";

const Container = styled.div`
  width: 100%;
  padding-bottom: 20px;
`;

const InputForm = styled.div`
  margin: 60px auto 10px;
  padding-top: 60px;
  height: 500px;
  width: 400px;
  border-radius: 15px;
  background: #f2f3f7;

  h1 {
    display: flex;
    text-align: center;
    justify-content: center;
  }
`;

const Button = styled.button`
  border: none;
  outline: none;
  background: ${palette.blue[6]};
  font-size: 2rem;
  margin: 30px;
  width: 80%;
  border-radius: 5px;

  &:hover {
    cursor: pointer;
    background: ${palette.blue[2]};
  }
`;

const Input = styled.input`
  font-size: 1rem;
  display: flex;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  background: #f2f3f7;
  width: 80%;
  margin: 30px;

  &:hover {
    cursor: pointer;
    border-bottom: 1px solid blue;
  }
`;

export { Container, InputForm, Button, Input };
