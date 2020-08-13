import React from "react";

import "./buttonPicker.styles.scss";

interface Props {
  currentSelection: string;
  updatePickFunction: Function;
}

const ButtonPicker: React.FC<Props> = ({ currentSelection, updatePickFunction, children }) => {
  // Had to call the parent function here because it expects a string and not an event
  function updateParentState(event: React.ChangeEvent<HTMLSelectElement>) {
    updatePickFunction(event.target.value);
  }

  return (
    <div className="custom-select" style={{ width: 200 }}>
      <select
        onChange={updateParentState}
        value={currentSelection}
        className="buttonContainer"
        style={{ paddingLeft: 5, paddingRight: 5, minWidth: "auto" }}
      >
        {children}
      </select>
    </div>
  );
};

export default ButtonPicker;
