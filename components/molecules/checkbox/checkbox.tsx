"use client";

import React, { useState } from "react";
import "./checkbox.css";

export type CheckboxProps = {
  checked?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

const Checkbox = ({ disabled, checked = false, ...rest }: CheckboxProps) => {
  const [Checked, setChecked] = useState(checked);

  return (
    <div
      className={` active:bg-click hover:bg-hover w-md h-md p-0 rotate relative flex justify-center items-center rounded ${
        disabled
          ? "custom-gradient_disabled border-outline border-2"
          : Checked
          ? "checkbox bg-primary"
          : "checkbox border-outline border-2"
      }`}
    >
      <input
        type="checkbox"
        className="w-full h-full opacity-0 checkbox_input"
        onClick={() => {
          setChecked(!Checked);
        }}
        checked={Checked}
        {...rest}
      />
      <span
        className={`absolute rotate-45 bottom-1/4  checkbox_after-border  ${
          disabled ? "disabled" : ""
        } w-1 h-2`}
      ></span>
    </div>
  );
};

export default Checkbox;
