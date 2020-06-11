import React from "react";

import "./buttonPicker.styles.scss";

export default function ButtonPicker(props: any) {
  // Had to call the parent function here because it expects a string and not an event
  function updateParentState(event: any) {
    props.updatePickFunction(event.target.value);
  }

  return (
    <select
      onChange={updateParentState}
      value={props.currentSelection}
      className="buttonContainer"
      style={{ paddingLeft: 5, paddingRight: 5 }}
    >
      <option value="mergesort">Merge Sort</option>
      <option value="quicksort">Quick Sort</option>
      <option value="bubblesort">Bubble Sort</option>
    </select>
  );
}
