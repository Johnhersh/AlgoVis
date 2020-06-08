import React, { useState, useEffect } from "react";

import "./verticalBar.styles.scss";

export default function VerticalBar(props: any) {
  const [height, setHeight] = useState(0);
  const transition = "height " + props.animSpeed + "s";

  useEffect(() => {
    window.setTimeout(updateHeight, 100);
  });

  function updateHeight() {
    setHeight((props.value / props.maxValue) * 400);
  }

  return (
    <div className="verticalBarContainer">
      <p className="verticalBarText">{props.value}</p>
      <div className="verticalBarGradient" style={{ height: height, transition: transition }} />
    </div>
  );
}
