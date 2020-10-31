import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";
import SimpleLoginForm from "./components/SimpleLoginForm";

function App() {
  return (
    <>
    <SimpleLoginForm />
    </>
  );
}

export default App;
