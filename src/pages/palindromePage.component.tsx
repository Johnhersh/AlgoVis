import React, { useState } from "react";

import "./palindromePage.styles.scss";
import Palindrome from "../components/palindrome.component";
import ButtonStringInput from "../components/Buttons/buttonStringInput.component";
import ButtonPicker from "../components/Buttons/buttonPicker.component";

import { isPalindrome, longestPalindrome } from "../algorithms/palindrome";

export default function PalindromePage() {
  const [palindromicCharacters, setPalindromicCharacters] = useState<Array<boolean>>([false]);
  const [currentCheckString, setCurrentCheckString] = useState("");
  const [algoPicker, setAlgoPicker] = useState("ispalindrome"); // Can be: 'ispalindrome', 'longest'

  function onWordUpdate(event: any) {
    if (event.target.value.length < 30) setCurrentCheckString(event.target.value);

    switch (algoPicker) {
      case "ispalindrome":
        checkIfPalindrome(event.target.value);
        break;
      case "longest":
        checkLongestPalindrome(event.target.value);
        break;
    }
  }

  function onPickSwitch(newString: string) {
    setAlgoPicker(newString);
    switch (newString) {
      case "ispalindrome":
        checkIfPalindrome(currentCheckString);
        break;
      case "longest":
        checkLongestPalindrome(currentCheckString);
        break;
    }
  }

  function checkIfPalindrome(newString: string) {
    let result = isPalindrome(newString);

    if (result) {
      updateCharactersArray(newString, 0, newString.length);
    } else updateCharactersArray(newString, 0, 0);
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
        <ButtonStringInput onChange={onWordUpdate} value={currentCheckString} disabled={false}>
          Word:
        </ButtonStringInput>
        <ButtonPicker currentSelection={algoPicker} updatePickFunction={onPickSwitch}>
          <option value="ispalindrome">Is Palindrome?</option>
          <option value="longest">Longest Palindrome</option>
        </ButtonPicker>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
