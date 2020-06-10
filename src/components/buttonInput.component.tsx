import React from "react";

import "./buttonInput.styles.scss";
import "./button.styles.scss";

export default function ButtonInput(props: any) {
  return (
    <form className="buttonContainer" onClick={props.onPress}>
      <div className="buttonInputContainer">
        <p>{props.children}</p>
        <input
          type="number"
          className="buttonInputField"
          onChange={props.onChange}
          value={props.value}
          disabled={props.disabled}
        ></input>
      </div>
    </form>
  );
}
