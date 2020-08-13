import React, { useEffect, useState } from "react";

import "./twoSumPage.styles.scss";
import {
  getNumbersOnlyArray,
  newRandomArray,
  convertNumbersOnlyArrayToObjectArray,
} from "./arrayHelperFunctions";
import BarChart from "../components/barChart.component";
import { twoSum } from "../algorithms/twoSum";
import Button from "../components/Buttons/button.component";
import ButtonNumberInput from "../components/Buttons/buttonNumberInput.component";

export default function TwoSumPage() {
  const desiredAmountOfValues = 18;
  const [items, setItems] = useState<Array<{ id: number; value: number }>>([]);
  const [oldItems, setOldItems] = useState<Array<number>>([]); // I needed to save this as state so it persists between refreshes
  const [searchNumber, setSearchNumber] = useState(0);

  // Gets called only once on mount because of [] second argument
  useEffect(() => {
    onReset();
  }, []);

  function onReset() {
    const newArray = newRandomArray(desiredAmountOfValues);
    setOldItems(getNumbersOnlyArray(newArray));
    setItems(newArray);
  }

  function onNewSearchNumber(event: React.ChangeEvent<HTMLInputElement>) {
    const newSearchNumber = Number(event.target.value);

    setSearchNumber(newSearchNumber);
    checkTwoSum(newSearchNumber);
  }

  function checkTwoSum(target: number) {
    let tempArray: Array<number> = [];
    tempArray = getNumbersOnlyArray(items);
    let result = twoSum(tempArray, target, () => {});

    // If we found nothing:
    if (result.a === 0 && result.b === 0) {
      setItems(convertNumbersOnlyArrayToObjectArray(oldItems));
    } else {
      const filteredItems = [...items];
      for (let index = 0; index < items.length; index++) {
        if (!(items[index].value === result.a || items[index].value === result.b)) {
          filteredItems[index].value = 0;
        }
        setItems(filteredItems);
      }
    }
  }

  return (
    <div className="twoSumPageContainer">
      <div className="twoSumResultContainer noScrollBarContainer">
        <BarChart workArray={items} maxValue={100} candleAnimSpeed={1} />
      </div>
      <div className="buttonsContainer noScrollBarContainer">
        <div style={{ flex: 1 }} />
        <Button text={"Reset"} onPress={onReset} disabled={false} />
        <ButtonNumberInput onChange={onNewSearchNumber} value={searchNumber} disabled={false}>
          Search for:
        </ButtonNumberInput>
        <div style={{ flex: 1 }} />
      </div>
    </div>
  );
}
