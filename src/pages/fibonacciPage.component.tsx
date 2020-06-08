import React, { useState } from "react";

import "./fibonacciPage.styles.scss";
import BarChart from "../components/barChart.component";
import { fibonacciSum } from "../algorithms/fibonacci";
import Button from "../components/button.component";
import ButtonInput from "../components/buttonInput.component";

export default function FibonacciPage() {
  const [sequence, setSequence] = useState<Array<{ id: number; value: number }>>([]);
  const [nValue, setNvalue] = useState(8);
  const [maxValue, setMaxValue] = useState(1);

  var fibonacciSequenceBuffer: Array<number> = [0, 1]; // A buffer I can build a fibonacci sequence into. Always want to start a fibonacci sequence with 0,1
  var refreshTimer: number;

  function onCalc() {
    fibonacciSequenceBuffer = [];
    setSequence([{ id: 0, value: 0 }]);
    fibonacciSum(nValue, receieveUpdateItems);

    refreshTimer = window.setInterval(() => {
      updateChart();
    }, 70);
  }

  function receieveUpdateItems(resultStep: number) {
    // Trying to make sure the number isn't already in the buffer due to previous calculations
    for (let i = 0; i < fibonacciSequenceBuffer.length; i++) {
      if (fibonacciSequenceBuffer[i] === resultStep) return;
    }

    // If we made it here, then the number is new and unique and should be added to the buffer
    fibonacciSequenceBuffer.push(resultStep);
    setMaxValue(resultStep);
  }

  function updateChart() {
    setSequence((sequence) => [
      ...sequence,
      { value: fibonacciSequenceBuffer[0], id: sequence.length },
    ]); // Add the first value into sequence

    fibonacciSequenceBuffer.shift();

    if (fibonacciSequenceBuffer.length == 0) clearInterval(refreshTimer);
  }

  function onNewNth(event: any) {
    setNvalue(event.target.value);
  }

  return (
    <div className="fibonacciPageContainer">
      <div className="fibonacciResultContainer">
        <BarChart workArray={sequence} maxValue={maxValue} candleAnimSpeed={1} />
      </div>
      <div className="fibonacciButtonsContainer">
        <div style={{ flex: 1 }} />
        <Button text={"Calculate"} onPress={onCalc} />
        <ButtonInput onChange={onNewNth} value={nValue} />
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
