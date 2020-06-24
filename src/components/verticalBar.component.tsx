import React, { useState, useEffect } from "react";

import "./verticalBar.styles.scss";

interface Props {
  value: number;
  maxValue: number;
  animSpeed: number;
}

const VerticalBar: React.FC<Props> = ({ value, maxValue, animSpeed }) => {
  const [height, setHeight] = useState(0);
  const transition = "min-height " + animSpeed + "s";

  useEffect(() => {
    window.setTimeout(updateHeight, 100);
  });

  function updateHeight() {
    setHeight((value / maxValue) * 400);
  }

  return (
    <div className="verticalBarContainer">
      {value > 0 && <p className="verticalBarText">{value}</p>}
      <div
        className="verticalBarGradient"
        style={{
          minHeight: height,
          transition: transition,
        }}
      />
    </div>
  );
};

export default VerticalBar;
