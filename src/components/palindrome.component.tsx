import React, { useEffect, useState, useRef } from "react";

import "./palindrome.styles.scss";

export default function Palindrome(props: any) {
  return <div className="palindromeContainer">{props.checkWord}</div>;
}
