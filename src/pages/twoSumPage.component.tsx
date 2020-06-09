import React, { useState } from "react";

import "./twoSumPage.styles.scss";
import { getNumbersOnlyArray, newRandomArray } from "./arrayHelperFunctions";
import BarChart from "../components/barChart.component";
import { twoSum } from "../algorithms/twoSum";
import Button from "../components/button.component";
import ButtonInput from "../components/buttonInput.component";

export default function TwoSumPage() {
  const desiredAmountOfValues = 18;
  const [items, setItems] = useState(newRandomArray(desiredAmountOfValues));
  const [searchNumber, setSearchNumber] = useState(0);

  function onReset() {
    setItems(newRandomArray(desiredAmountOfValues));
  }

  function onFind() {
    checkTwoSum(searchNumber);
  }

  function onNewSearchNumber(event: any) {
    const newSearchNumber = event.target.value;
    setSearchNumber(newSearchNumber);
    checkTwoSum(newSearchNumber);
  }

  function checkTwoSum(target: number) {
    let sortedArray: Array<number> = [];
    sortedArray = getNumbersOnlyArray(items);
    let result = twoSum(sortedArray, target, () => {});
    // If we found nothing:
    if (result.a === 0 && result.b === 0) {
      console.log("No Match!");
    } else {
      console.log("Found numbers: " + result.a + ", " + result.b);
    }
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
