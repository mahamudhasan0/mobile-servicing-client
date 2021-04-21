import React from "react";
import Home from "./component/Home/Home";
import AdminScreen from './component/AdminScreen'
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Admin from "./component/Admin";
import Review from "./component/Review";
import ReviewScreen from './component/ReviewScreen'

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
        <Admin/>
        <AdminScreen/>
        <Review/>
        <ReviewScreen/>
      </Router>
    </>
  );
}

export default App;
