import React, { useState } from "react";
import { Container, InputForm, Input, Button } from "./SignupForm.style";

const SignupForm = () => {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRePassword] = useState("");

  const handleClick = () => {
    alert("login btn");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  return (
    <div>
      <div style={{ textAlign: "center" }}></div>
      <Container>
        <InputForm>
          <div className="form-group">
            <Input
              type="text"
              placeholder="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
          </div>

          <div className="form-group">
            <Input
              type="text"
              placeholder="ID"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              placeholder="비밀번호"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
          </div>
          <div className="form-group">
            <Input
              type="password"
              placeholder="비밀번호확인"
              name="repassword"
              value={repassword}
              onChange={(e) => setRePassword(e.target.value)}
              onKeyPress={handleKeyPress}
              required
            />
          </div>
          <Button type="button" onClick={handleClick}>
            회원가입
          </Button>
        </InputForm>
      </Container>
    </div>
  );
};
export default SignupForm;
