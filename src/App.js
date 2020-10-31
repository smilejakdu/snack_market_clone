import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <div>
      <Router>
        <Route path="/" exact="true" component={MainPage}></Route>
      </Router>
    </div>
  );
}

export default App;
