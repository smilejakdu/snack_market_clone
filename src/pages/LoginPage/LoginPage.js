import React from "react";
import LoginForm from "../../components/LoginForm";
import LoginTemplate from "../../components/LoginTemplate";
import SimpleLoginForm from "../../components/SimpleLoginForm";


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