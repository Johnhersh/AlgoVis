import React, { useState } from "react";

import "./palindromePage.styles.scss";
import Palindrome from "../components/palindrome.component";
import ButtonStringInput from "../components/buttonStringInput.component";

import { isPalindrome } from "../algorithms/palindrome";

export default function PalindromePage() {
  const [palindromicCharacters, setPalindromicCharacters] = useState<Array<boolean>>([false]);
  const [currentCheckString, setCurrentCheckString] = useState("");

  function onWordUpdate(event: any) {
    if (event.target.value.length < 30) setCurrentCheckString(event.target.value);

    checkIfPalindrome(event.target.value);
  }

  function checkPalindrome() {
    checkIfPalindrome(currentCheckString);
  }

  function checkIfPalindrome(newString: string) {
    const tempCharacterStateArray: Array<boolean> = [];
    let result = isPalindrome(newString);

    for (let index = 0; index < newString.length; index++) {
      if (result) {
        tempCharacterStateArray.push(true);
      } else tempCharacterStateArray.push(false);
    }
    setPalindromicCharacters(tempCharacterStateArray);
  }

  return (
    <div className="palindromePageContainer">
      <div className="palindromeResultContainer">
        <Palindrome
          checkWord={currentCheckString}
          palindromicCharactersArray={palindromicCharacters}
        />
      </div>
      <div className="buttonsContainer">
        <div style={{ flex: 1 }} />
        <ButtonStringInput
          onChange={onWordUpdate}
          onLoseFocus={checkPalindrome}
          value={currentCheckString}
        >
          Word:
        </ButtonStringInput>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
