import React, { useState } from "react";

import "./palindromePage.styles.scss";
import Palindrome from "../components/palindrome.component";
import ButtonStringInput from "../components/buttonStringInput.component";

// TODO: re-implement isPalindrome and add a dropdown to differentiate between the two
// import { isPalindrome, longestPalindrome } from "../algorithms/palindrome";
import { longestPalindrome } from "../algorithms/palindrome";

export default function PalindromePage() {
  const [palindromicCharacters, setPalindromicCharacters] = useState<Array<boolean>>([false]);
  const [currentCheckString, setCurrentCheckString] = useState("");

  function onWordUpdate(event: any) {
    if (event.target.value.length < 30) setCurrentCheckString(event.target.value);

    // Todo: Add support for longestPalindrome function.

    // checkIfPalindrome(event.target.value);
    checkLongestPalindrome(event.target.value);
  }

  function onLoseFocus() {
    // checkIfPalindrome(currentCheckString);
    checkLongestPalindrome(currentCheckString);
  }

  function checkLongestPalindrome(newString: string) {
    let result = longestPalindrome(newString);
    updateCharactersArray(newString, result.resultStartIndex, result.resultEndIndex);
  }

  function updateCharactersArray(newString: string, fromIndex: number, toIndex: number) {
    const tempCharacterStateArray: Array<boolean> = [];

    for (let index = 0; index < newString.length; index++) {
      if (index >= fromIndex && index < toIndex) {
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
          onLoseFocus={onLoseFocus}
          value={currentCheckString}
          disabled={false}
        >
          Word:
        </ButtonStringInput>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
