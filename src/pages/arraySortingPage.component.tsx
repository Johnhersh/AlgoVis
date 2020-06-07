import React, { useState } from "react";

import BarChart from "../components/barChart.component";
import Button from "../components/button.component";
import ButtonPicker from "../components/buttonPicker.component";
import {
  iterativeMergeSort,
  quickSort,
  bubbleSort,
} from "../algorithms/sortingAlgorithms";

import "./arraySortingPage.styles.scss";

export default function ArraySortingPage() {
  const [desiredAmountOfValues, setNumberOfValues] = useState(15);
  const [items, setItems] = useState(newRandomArray(desiredAmountOfValues));
  const [algoPicker, setAlgoPicker] = useState("quicksort"); // Can be: 'quicksort', 'mergesort', 'bubblesort'

  var barchartItemsBuffer: {
    index: number;
    value: number;
  }[] = []; // A buffer I can push results into
  var refreshTimer: number;

  // Gets passed down to the reset button component and called from there
  function onReset() {
    setItems(newRandomArray(desiredAmountOfValues));
  }

  // Gets passed down to the sort button and called from there
  function onSort() {
    console.log("Algosort is: " + algoPicker);
    let sortedArray: Array<number> = [];
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
        sortedArray = iterativeMergeSort(
          getNumbersOnlyArray(items),
          updateItems
        );
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
        tempArray[barchartItemsBuffer[0].index].value =
          barchartItemsBuffer[0].value;

        setItems(tempArray);
        barchartItemsBuffer.shift();
      } else {
        clearInterval(refreshTimer);
      }
    }
  }

  return (
    <div className="arraySortingPageContainer">
      <div className="barChartComponentContainer">
        <BarChart workArray={items} />
      </div>
      <div className="buttonsContainer">
        <Button text={"Reset"} onPress={onReset} />
        <Button text={"Sort"} onPress={onSort} />
        <ButtonPicker
          currentSelection={algoPicker}
          updatePickFunction={setAlgoPicker}
        />
      </div>
    </div>
  );
}

function getNumbersOnlyArray(items: any) {
  let newArray: Array<number> = [];

  for (let index = 0; index < items.length; index++) {
    newArray.push(items[index].value);
  }

  return newArray;
}

function newRandomArray(length: number) {
  let newArray = [];
  for (let index = 0; index < length; index++) {
    newArray.push({ id: index, value: Math.floor(Math.random() * 100 + 1) });
  }

  return newArray;
}
