import React from "react";
// import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";

import "./topBar.styles.scss";

export default function TopBar(props: any) {
  return (
    <div className="topBarContainer">
      <nav>
        <ul className="navLinksContainer">
          <li className="linkItem">
            <NavLink to="/palindrome" className="navLink" activeClassName="navLinkActive">
              Palindrome
            </NavLink>
          </li>
          <li className="linkItem">
            <NavLink to="/twosum" className="navLink" activeClassName="navLinkActive">
              Two-Number Sum
            </NavLink>
          </li>
          <li className="linkItem">
            <NavLink to="/fibonacci" className="navLink" activeClassName="navLinkActive">
              Fibonacci
            </NavLink>
          </li>
          <li className="linkItem">
            <NavLink to="/sorting" className="navLink" activeClassName="navLinkActive">
              Sorting
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
