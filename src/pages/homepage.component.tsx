import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./homepage.styles.scss";
import TopBar from "../components/topBar.component";
import ArraySortingPage from "./arraySortingPage.component";
import FibonacciPage from "./fibonacciPage.component";

export default function HomePage(props: any) {
  return (
    <div className="homePageContainer">
      <Router>
        <TopBar>
          <nav>
            <ul>
              <li>
                <Link to="/sorting">Sorting</Link>
              </li>
              <li>
                <Link to="/fibonacci">Fibonacci</Link>
              </li>
            </ul>
          </nav>
        </TopBar>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/sorting">
            <ArraySortingPage />
          </Route>
          <Route path="/fibonacci">
            <FibonacciPage />
          </Route>
        </Switch>
        {/* <div className="arrayPageContainer"></div> */}
      </Router>
    </div>
  );
}
