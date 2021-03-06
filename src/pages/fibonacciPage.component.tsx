import React, { useState, useEffect } from "react";

import "./fibonacciPage.styles.scss";
import BarChart from "../components/barChart.component";
import { fibonacciSum } from "../algorithms/fibonacci";
import Button from "../components/Buttons/button.component";
import ButtonInput from "../components/Buttons/buttonNumberInput.component";

export default function FibonacciPage() {
  const [sequence, setSequence] = useState<Array<{ id: number; value: number }>>([]);
  const [nValue, setNvalue] = useState(14);
  const [maxValue, setMaxValue] = useState(1);
  const [bDisableButtons, setDisableButtons] = useState(false);
  const [bShouldRender, setbShouldRender] = useState(true);

  var fibonacciSequenceBuffer: Array<number> = [0, 1]; // A buffer I can build a fibonacci sequence into. Always want to start a fibonacci sequence with 0,1
  var refreshTimer: number;

  useEffect(() => {
    onCalc();
  });

  function onCalc() {
    if (!bShouldRender) return;

    setDisableButtons(true);
    setbShouldRender(false);
    fibonacciSequenceBuffer = [];
    setSequence([{ id: 0, value: 0 }]);
    fibonacciSum(nValue, receieveUpdatedItems);

    refreshTimer = window.setInterval(() => {
      updateChart();
    }, 70);
  }

  function receieveUpdatedItems(resultStep: number) {
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

    if (fibonacciSequenceBuffer.length === 0) {
      clearInterval(refreshTimer);
      setTimeout(() => {
        setDisableButtons(false);
      }, 1000);
    }
  }

  function onNewNth(event: any) {
    setNvalue(event.target.value);
  }

  function onLoseFocus() {
    if (nValue < 3) {
      setNvalue(3);
      return;
    }
    if (nValue > 30) {
      setNvalue(30);
      return;
    }
    if (nValue > 1 && nValue < 30) setbShouldRender(true);
  }

  return (
    <div className="fibonacciPageContainer">
      <div className="fibonacciResultContainer noScrollBarContainer">
        <BarChart workArray={sequence} maxValue={maxValue} candleAnimSpeed={1} />
      </div>
      <div className="buttonsContainer noScrollBarContainer">
        <div style={{ flex: 1 }} />
        <Button text={"Re-Calculate"} onPress={onLoseFocus} disabled={bDisableButtons} />
        <ButtonInput
          onChange={onNewNth}
          onLoseFocus={onLoseFocus}
          value={nValue}
          disabled={bDisableButtons}
        >
          Nth:
        </ButtonInput>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
