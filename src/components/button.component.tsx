import React from "react";

import "./button.styles.scss";

interface Props {
  onPress(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void;
  text: string;
  disabled: boolean;
}

const Button: React.FC<Props> = ({ disabled, onPress, text }) => {
  return (
    <button
      disabled={disabled}
      data-disabled={disabled}
      className="buttonContainer"
      onClick={onPress}
    >
      {text}
    </button>
  );
};

export default Button;
