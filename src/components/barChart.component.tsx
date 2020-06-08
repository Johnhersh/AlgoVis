import React from "react";

import "./barChart.styles.scss";
import VerticalBar from "./verticalBar.component";

export default function BarChart(props: any) {
  return (
    <div className="barChartContainer">
      <div className="listContentContainer">
        {props.workArray.map((item: any) => (
          <VerticalBar
            value={item.value}
            key={item.id}
            maxValue={props.maxValue}
          />
        ))}
      </div>
    </div>
  );
}
