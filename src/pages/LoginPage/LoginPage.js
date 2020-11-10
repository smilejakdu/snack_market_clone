import React from "react";
import LoginForm from "../../components/LoginForm";
import LoginTemplate from "../../components/LoginTemplate";


const LoginPage = () => {
  return (
    <div>
      <LoginTemplate>
        <LoginForm />
      </LoginTemplate>
    </div>
  );
};

export default LoginPage;