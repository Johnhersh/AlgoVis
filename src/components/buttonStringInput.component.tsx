import React, { useState, useEffect } from "react";

import "./buttonStringInput.styles.scss";
import "./button.styles.scss";

interface Props {
  onLoseFocus(event: React.FocusEvent<HTMLInputElement>): void;
  onChange(event: React.ChangeEvent<HTMLInputElement>): void;
  value: string;
  disabled: boolean;
}

const ButtonStringInput: React.FC<Props> = ({
  onLoseFocus,
  onChange,
  value,
  disabled,
  children,
}) => {
  const [maxWidth, setMaxWidth] = useState(0);

  useEffect(() => {
    setMaxWidth(150 + value.length * 10);
  }, [value.length]);

  return (
    <form data-disabled={disabled} className="buttonStringContainer" style={{ maxWidth: maxWidth }}>
      <div className="buttonStringInputContainer">
        <p>{children}</p>
        <input
          type="text"
          className="buttonStringInputField"
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="off"
          onBlur={onLoseFocus}
          onChange={onChange}
          value={value}
          disabled={disabled}
        ></input>
      </div>
    </form>
  );
};

export default ButtonStringInput;
