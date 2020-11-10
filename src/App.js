import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SignupPage from "./pages/SignupPage/SignupPage";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact="true" component={MainPage}></Route>
        <Route path="/signup" exact="true" component={SignupPage}></Route>
      </Router>
    </div>
  );
}

export default App;
