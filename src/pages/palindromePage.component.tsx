import React, { useEffect, useState, useRef } from "react";

import "./palindromePage.styles.scss";
import Palindrome from "../components/palindrome.component";
import Button from "../components/button.component";
import ButtonInput from "../components/buttonInput.component";

export default function PalindromePage() {
  let searchNumber = 0;
  function onNewSearchNumber() {}
  function onReset() {}
  function onFind() {}

  return (
    <div className="palindromePageContainer">
      <div className="palindromeResultContainer">
        <Palindrome />
      </div>
      <div className="buttonsContainer">
        <div style={{ flex: 1 }} />
        <Button text={"Reset"} onPress={onReset} />
        <Button text={"Find"} onPress={onFind} />
        <ButtonInput onChange={onNewSearchNumber} value={searchNumber}>
          Search for:
        </ButtonInput>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
