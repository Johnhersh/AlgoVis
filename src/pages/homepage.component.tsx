import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./homepage.styles.scss";
import TopBar from "../components/topBar.component";
import ArraySortingPage from "./arraySortingPage.component";
import FibonacciPage from "./fibonacciPage.component";
import TwoSum from "./twoSumPage.component";

export default function HomePage(props: any) {
  return (
    <div className="homePageContainer">
      <Router>
        <TopBar />
        <Switch>
          <Route path="/sorting">
            <ArraySortingPage />
          </Route>
          <Route path="/fibonacci">
            <FibonacciPage />
          </Route>
          <Route path="/twosum">
            <TwoSum />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
