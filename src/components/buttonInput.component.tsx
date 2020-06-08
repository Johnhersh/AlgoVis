import React from "react";

import "./buttonInput.styles.scss";
import "./button.styles.scss";

export default function ButtonInput(props: any) {
  return (
    <form className="buttonContainer" onClick={props.onPress}>
      <div className="buttonInputContainer">
        <p>Nth :</p>
        <input type="number" className="buttonInputField"></input>
      </div>
    </form>
  );
}
