import React, { useEffect, useState, useRef } from "react";

import "./palindromePage.styles.scss";
import Palindrome from "../components/palindrome.component";
import Button from "../components/button.component";
import ButtonStringInput from "../components/buttonStringInput.component";

export default function PalindromePage() {
  const [currentCheckString, setCurrentCheckString] = useState("");

  function onWordUpdate(event: any) {
    if (event.target.value.length < 30) setCurrentCheckString(event.target.value);
  }
  function onReset() {}
  function onFind() {}

  return (
    <div className="palindromePageContainer">
      <div className="palindromeResultContainer">
        <Palindrome checkWord={currentCheckString} />
      </div>
      <div className="buttonsContainer">
        <div style={{ flex: 1 }} />
        <Button text={"Reset"} onPress={onReset} />
        <Button text={"Find"} onPress={onFind} />
        <ButtonStringInput onChange={onWordUpdate} value={currentCheckString}>
          Word:
        </ButtonStringInput>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
