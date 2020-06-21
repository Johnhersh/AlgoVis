import React, { useEffect, useState, useRef } from "react";

import "./palindrome.styles.scss";

interface Props {
  palindromicCharactersArray: any;
  checkWord: string;
}

const Palindrome: React.FC<Props> = ({ palindromicCharactersArray, checkWord }) => {
  let textToRender = [];
  console.log("length is: " + palindromicCharactersArray.length);
  for (let index = 0; index < palindromicCharactersArray.length; index++) {
    textToRender.push(<li style={{ display: "inline" }}>{checkWord.charAt(index)}</li>);
  }

  return <ul className="palindromeContainer">{textToRender}</ul>;
};

export default Palindrome;

// export default function Palindrome({ palindromicCharactersArray, ...props }) {
//   let textToRender = [];
//   console.log("length is: " + palindromicCharactersArray.length);
//   for (let index = 0; index < palindromicCharactersArray.length; index++) {
//     textToRender.push(<li style={{ display: "inline" }}>A</li>);
//   }

//   return <ul className="palindromeContainer">{textToRender}</ul>;
// }
