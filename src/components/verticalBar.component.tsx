// import React from "react";
import React, { useEffect } from "react";

import "./verticalBar.styles.scss";

export default function VerticalBar(props: any) {
  let newHeight = (props.value / props.maxValue) * 400;

  // Defining this here instead of the CSS because height uses a value from a prop
  var barStyle = {
    height: newHeight,
  };

  return (
    <div className="verticalBarContainer">
      <p className="verticalBarText">{props.value}</p>
      <div className="verticalBarGradient" style={barStyle} />
    </div>
  );
}
