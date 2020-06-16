import React, { useState, useEffect } from "react";

import "./verticalBar.styles.scss";

export default function VerticalBar(props: any) {
  const [height, setHeight] = useState(0);
  const transition = "min-height " + props.animSpeed + "s";

  useEffect(() => {
    window.setTimeout(updateHeight, 100);
  });

  function updateHeight() {
    setHeight((props.value / props.maxValue) * 400);
    console.log();
  }

  return (
    <div className="verticalBarContainer">
      {props.value > 0 && <p className="verticalBarText">{props.value}</p>}
      <div
        className="verticalBarGradient"
        style={{
          minHeight: height,
          transition: transition,
        }}
      />
    </div>
  );
}
