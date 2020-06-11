import React, { useState } from "react";

import BarChart from "../components/barChart.component";
import Button from "../components/button.component";
import ButtonPicker from "../components/buttonPicker.component";
import ButtonInput from "../components/buttonInput.component";
import { iterativeMergeSort, quickSort, bubbleSort } from "../algorithms/sortingAlgorithms";

import "./arraySortingPage.styles.scss";
import { getNumbersOnlyArray, newRandomArray } from "./arrayHelperFunctions";

export default function ArraySortingPage() {
  const [desiredAmountOfValues, setNumberOfValues] = useState(15);
  const [items, setItems] = useState(newRandomArray(desiredAmountOfValues));
  const [algoPicker, setAlgoPicker] = useState("quicksort"); // Can be: 'quicksort', 'mergesort', 'bubblesort'
  const [bDisableButtons, setDisableButtons] = useState(false);

  var barchartItemsBuffer: {
    index: number;
    value: number;
  }[] = []; // A buffer I can push results into
  var refreshTimer: number;

  // Gets passed down to the reset button component and called from there
  function onReset() {
    setDisableButtons(true);
    setItems(newRandomArray(desiredAmountOfValues));
    setTimeout(() => {
      setDisableButtons(false);
    }, 1000);

    setMouseWheelScrollHorizontal();
  }

  function setMouseWheelScrollHorizontal() {
    let item = document.getElementsByClassName("barChartComponentContainer")[0];

    window.addEventListener("wheel", function (e) {
      if (e.deltaY > 0) item.scrollLeft += 100;
      else item.scrollLeft -= 100;
    });
  }

  // Gets passed down to the sort button and called from there
  function onSort() {
    let sortedArray: Array<number> = [];
    setDisableButtons(true);
    switch (algoPicker) {
      case "quicksort":
        refreshTimer = window.setInterval(() => {
          updateChart(2);
        }, 70);
        sortedArray = getNumbersOnlyArray(items);
        quickSort(sortedArray, 0, items.length - 1, updateItems);
        break;
      case "mergesort":
        refreshTimer = window.setInterval(() => {
          updateChart(1);
        }, 70);
        sortedArray = iterativeMergeSort(getNumbersOnlyArray(items), updateItems);
        break;
      case "bubblesort":
        refreshTimer = window.setInterval(() => {
          updateChart(2);
        }, 70);
        sortedArray = getNumbersOnlyArray(items);
        bubbleSort(sortedArray, updateItems);
        break;
    }
  }

  // Whenever a sorting function updates an iteration
  function updateItems(indexA: number, newValue: number) {
    barchartItemsBuffer.push({
      index: indexA,
      value: newValue,
    });
  }

  // Will get called every X milliseconds once we hit Sort until the buffer is empty
  function updateChart(amount: number) {
    let tempArray = [...items];

    for (let i = 0; i < amount; i++) {
      if (barchartItemsBuffer.length > 0) {
        tempArray[barchartItemsBuffer[0].index].value = barchartItemsBuffer[0].value;

        setItems(tempArray);
        barchartItemsBuffer.shift();
      } else {
        clearInterval(refreshTimer);
        setDisableButtons(false);
      }
    }
  }

  function onNewLength(event: any) {
    setNumberOfValues(event.target.value);
  }

  function onLoseFocus() {
    if (desiredAmountOfValues < 3) {
      setNumberOfValues(3);
      return;
    }
    if (desiredAmountOfValues > 50) {
      setNumberOfValues(50);
      return;
    }
    if (desiredAmountOfValues > 1 && desiredAmountOfValues < 50) onReset();
  }

  return (
    <div className="arraySortingPageContainer">
      <div className="barChartComponentContainer">
        <BarChart workArray={items} maxValue={100} candleAnimSpeed={0.1} />
      </div>
      <div className="buttonsContainer">
        <div style={{ flex: 1 }} />
        <Button text={"Reset"} onPress={onReset} disabled={bDisableButtons} />
        <Button text={"Sort"} onPress={onSort} disabled={bDisableButtons} />
        <ButtonPicker currentSelection={algoPicker} updatePickFunction={setAlgoPicker} />
        <ButtonInput
          onChange={onNewLength}
          value={desiredAmountOfValues}
          disabled={bDisableButtons}
          onLoseFocus={onLoseFocus}
        >
          Length:
        </ButtonInput>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
