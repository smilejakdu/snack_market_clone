import React from "react";
import MainContainer from './components/MainContainer';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage/MainPage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import PostPage from "./pages/PostPage/PostPage";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact="true" component={MainPage}></Route>
        <Route path="/signup" exact="true" component={SignupPage}></Route>
        <Route path="/login" exact="true" component={LoginPage}></Route>
        <Route path="/post" exact="true" component={PostPage}></Route>
      </Router>
    </div>
  );
}

export default App;
