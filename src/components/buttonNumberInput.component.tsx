import React from "react";

import "./buttonNumberInput.styles.scss";
import "./button.styles.scss";

interface Props {
  onLoseFocus?(event: React.FocusEvent<HTMLInputElement>): void;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value: number;
  disabled: boolean;
}

const ButtonNumberInput: React.FC<Props> = ({
  onLoseFocus,
  onChange,
  value,
  disabled,
  children,
}) => {
  return (
    <form data-disabled={disabled} className="buttonContainer">
      <div className="buttonInputContainer">
        <p>{children}</p>
        <input
          type="number"
          pattern="[0-9]*" // This is so iOS detects it as a numerical input
          className="buttonInputField"
          onBlur={onLoseFocus}
          onChange={onChange}
          value={value}
          disabled={disabled}
        ></input>
      </div>
    </form>
  );
};

export default ButtonNumberInput;
