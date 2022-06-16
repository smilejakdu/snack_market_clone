import React from "react";
import Main from "../../components/Main";
import FooterInfoList from "../../components/Footer/FooterInfoList";
import FooterList from "../../components/Footer/FooterList";

const MainPage = () => {
  return (
    <div>
      <div>header</div>
      <Main />
      <FooterList />
      <FooterInfoList />
    </div>
  );
};

export default MainPage;
