"use client";

import { useState } from "react";
import Checkbox from "../checkbox/checkbox";
import "./style.css";

/*Image imports*/
import openTag from "../../../assets/components/dropdown/openVector.svg";
import closeTag from "../../../assets/components/dropdown/closeVector.svg";
import Image from "next/image";

export type DropdownProps = {
  multiple?: boolean;
  values: string[];
} & React.SelectHTMLAttributes<HTMLSelectElement>;

const Dropdown = ({
  children,
  multiple = false,
  values,
  className,
  ...rest
}: DropdownProps) => {
  const [Open, setOpen] = useState(false);

  const [selectValues, setSelectValues] = useState<string[]>([]);
  const [selectValue, setSelectValue] = useState<string>("");

  return (
    <div className="relative">
      <select
        multiple={multiple}
        value={multiple ? selectValues : selectValue}
        className="float -z-10 opacity-0"
        {...rest}
      />
      <div
        className={`w-xxl2 h-2xl px-3 py-2 bg-dark rounded-md flex items-center justify-between ${className}`}
        onClick={() => setOpen(!Open)}
      >
        {children}
        <Image
          className="cursor-pointer"
          src={Open ? openTag : closeTag}
          alt="open/close arrow"
        />
      </div>
      {Open && (
        <ul
          className={`absolute top-full left-0 w-full DropdownList overflow-scroll overflow-x-hidden ${className}`}
        >
          {values.map((value, index) => {
            return (
              <li
                key={index}
                className={`${className} bg-light px-3 py-2 cursor-pointer w-full h-8 flex gap-3 items-center font-normal text-md ${
                  !multiple && "hover:text-primary"
                }`}
                onClick={() => {
                  !multiple && setSelectValue(value);
                }}
              >
                {multiple && (
                  <Checkbox
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectValues((prevValue) => {
                          return [...prevValue, value];
                        });
                      } else {
                        setSelectValues((prevValue) => {
                          return prevValue.filter((item) => item !== value);
                        });
                      }
                    }}
                  />
                )}
                {value}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
