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
            <NavLink to="/mainmenu" className="navLink" activeClassName="navLinkActive">
              <i className="material-icons">home</i>
            </NavLink>
          </li>
          <li className="linkItem">
            <NavLink to="/palindrome" className="navLink" activeClassName="navLinkActive">
              <i className="material-icons">compare_arrows</i>
              Palindrome
            </NavLink>
          </li>
          <li className="linkItem">
            <NavLink to="/twosum" className="navLink" activeClassName="navLinkActive">
              <i className="material-icons">add</i>
              Two-Number Sum
            </NavLink>
          </li>
          <li className="linkItem">
            <NavLink to="/fibonacci" className="navLink" activeClassName="navLinkActive">
              <i className="material-icons">signal_cellular_alt</i>
              Fibonacci
            </NavLink>
          </li>
          <li className="linkItem">
            <NavLink to="/sorting" className="navLink" activeClassName="navLinkActive">
              <i className="material-icons">format_list_numbered_rtl</i>
              Sorting
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
