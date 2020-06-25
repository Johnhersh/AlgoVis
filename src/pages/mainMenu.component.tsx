import React from "react";
import { NavLink } from "react-router-dom";

import "./mainMenu.styles.scss";
import Button from "../components/Buttons/button.component";

export default function MainMenu() {
  return (
    <div className="mainMenuContainer">
      <NavLink to="/palindrome" className="mainMenuButton">
        <Button text={"Palindrome"} onPress={() => {}} disabled={false} />
      </NavLink>
      <NavLink to="/twosum" className="mainMenuButton">
        <Button text={"Two Sum"} onPress={() => {}} disabled={false} />
      </NavLink>
      <NavLink to="/fibonacci" className="mainMenuButton">
        <Button text={"Fibonacci"} onPress={() => {}} disabled={false} />
      </NavLink>
      <NavLink to="/sorting" className="mainMenuButton">
        <Button text={"Sorting"} onPress={() => {}} disabled={false} />
      </NavLink>
    </div>
  );
}
