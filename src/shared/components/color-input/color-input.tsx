import React from "react";
import "./color-input.css";

interface Props {
  color: string;
  onChange: (value: string) => void;
}

const ColorInput: React.FC<Props> = ({ color, onChange }) => {
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <label className="color-input">
      <div className="color-square" style={{ backgroundColor: color }}></div>
      <input
        type="color"
        value={color}
        onChange={handleColorChange}
        className="color-input-input"
      />
    </label>
  );
};
export default ColorInput;
