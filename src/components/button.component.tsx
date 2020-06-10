import React from "react";

import "./button.styles.scss";

export default function Button(props: any) {
  return (
    <button
      disabled={props.disabled}
      data-disabled={props.disabled}
      className="buttonContainer"
      onClick={props.onPress}
    >
      {props.text}
    </button>
  );
}
