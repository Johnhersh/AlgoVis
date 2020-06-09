import React, { useState } from "react";

import "./twoSumPage.styles.scss";
import { getNumbersOnlyArray, newRandomArray } from "./arrayHelperFunctions";
import BarChart from "../components/barChart.component";
import { twoSum } from "../algorithms/twoSum";
import Button from "../components/button.component";
import ButtonInput from "../components/buttonInput.component";

export default function FibonacciPage() {
  const [desiredAmountOfValues, setNumberOfValues] = useState(15);
  const [items, setItems] = useState(newRandomArray(desiredAmountOfValues));
  const [searchNumber, setSearchNumber] = useState(0);

  function onReset() {
    setItems(newRandomArray(desiredAmountOfValues));
  }
  function onFind() {
    let sortedArray: Array<number> = [];
    sortedArray = getNumbersOnlyArray(items);
    let result = twoSum(sortedArray, 20, () => {});

    // If we found nothing:
    if (result.a == 0 && result.b == 0) {
      console.log("No Match!");
    } else {
      console.log("Found numbers: " + result.a + ", " + result.b);
    }
  }

  function onNewSearchNumber(event: any) {
    setSearchNumber(event.target.value);
  }

  return (
    <div className="twoSumPageContainer">
      <div className="twoSumResultContainer">
        <BarChart workArray={items} maxValue={100} candleAnimSpeed={1} />
      </div>
      <div className="buttonsContainer">
        <div style={{ flex: 1 }} />
        <Button text={"Reset"} onPress={onReset} />
        <Button text={"Find"} onPress={onFind} />
        <ButtonInput onChange={onNewSearchNumber} value={searchNumber}>
          Search for:
        </ButtonInput>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
