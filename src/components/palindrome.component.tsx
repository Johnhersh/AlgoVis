import React from "react";

import "./palindrome.styles.scss";

interface Props {
  palindromicCharactersArray: any;
  checkWord: string;
}

const Palindrome: React.FC<Props> = ({ palindromicCharactersArray, checkWord }) => {
  let textToRender = [];
  let color = "black";

  for (let index = 0; index < palindromicCharactersArray.length; index++) {
    if (palindromicCharactersArray[index] === true) {
      color = "green";
    } else color = "black";

    textToRender.push(
      <li key={"palindromeCharacter" + index} style={{ display: "inline", color: color }}>
        {checkWord.charAt(index)}
      </li>
    );
  }

  return <ul className="palindromeContainer">{textToRender}</ul>;
};

export default Palindrome;
