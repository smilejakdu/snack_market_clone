import React from "react";
import LoginForm from "../../components/LoginForm/LoginForm";
import LoginTemplate from "../../components/LoginTemplate/LoginTemplate";
import SimpleLoginForm from "../../components/SimpleLoginForm/SimpleLoginForm";


const LoginPage = () => {
  return (
    <div>
      <LoginTemplate>
        <LoginForm />
      </LoginTemplate>
      <SimpleLoginForm />
    </div>
  );
};

export default LoginPage;