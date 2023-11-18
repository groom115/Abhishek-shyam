import { useState } from "react";

import "./FancySwitch.scss";

type FancySwitchProps = {
  textA: string;
  textB: string;
  textC: string;
  textD: string;
  activeButton: string;
  handleChange: (button: string) => void;
};

function FancySwitch({
  textA,
  textB,
  textC,
  textD,
  activeButton,
  handleChange,
}: FancySwitchProps) {
  const labels = [textA, textB, textC, textD];
  const name = `${textA}${textB}${textC}`;

  return (
    <div className="FancySwitch">
      {labels.map((item) => (
        <div
          key={item}
          className={`toggle ${name} ${item === activeButton ? "active" : ""}`}
          onClick={() => handleChange(item)}
        >
          <input
            type="checkbox"
            id={item}
            name={item}
            checked={item === activeButton}
            readOnly
          />
          <label htmlFor={item}>
            <div className="toggleLabel">{item}</div>
            <div className="toggler" />
          </label>
        </div>
      ))}
    </div>
  );
}

export default FancySwitch;
