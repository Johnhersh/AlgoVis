import React, { useState, useEffect } from "react";

import "./buttonStringInput.styles.scss";
import "./button.styles.scss";

export default function ButtonStringInput(props: any) {
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    setMaxWidth(150 + props.value.length * 10);
  });

  return (
    <form
      data-disabled={props.disabled}
      className="buttonStringContainer"
      onClick={props.onPress}
      style={{ maxWidth: maxWidth }}
    >
      <div className="buttonStringInputContainer">
        <p>{props.children}</p>
        <input
          type="text"
          className="buttonStringInputField"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          // onBlur={props.onLoseFocus}
          onChange={props.onChange}
          value={props.value}
          // disabled={props.disabled}
        ></input>
      </div>
    </form>
  );
}
