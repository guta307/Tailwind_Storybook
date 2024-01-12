"use client";

/*image imports*/
import dayIcon from "../../../assets/components/switch/day.svg";
import nightIcon from "../../../assets/components/switch/night.svg";
import offIcon from "../../../assets/components/switch/Off.svg";
import offDisabled from "../../../assets/components/switch/offDisabled.svg";
import onDisabled from "../../../assets/components/switch/onDisabled.svg";
import activeIcon from "../../../assets/components/switch/activeIcon.svg";
/*----*/

import Image from "next/image";
import { useState } from "react";

export type SwitchProps = {
  onToggle: Function;
  active?: boolean;
  type?: "primary" | "secondary" | "on/off" | "mood";
  disabled?: boolean;
  setState?: Function;
};

const SwitchButton = ({
  active = false,
  type = "primary",
  disabled = false,
  onToggle,
}: SwitchProps) => {
  const [Active, setActive] = useState(active);

  const handleClick = () => {
    if (!disabled) {
      setActive(!Active);
      if (onToggle) {
        onToggle(!Active);
      }
    }
  };
  return (
    <div
      className={` w-10 p-8xs focus:border-2 focus:border-focus h-6 rounded-xlg flex items-center  ${
        Active ? "justify-end" : "justify-start"
      } 
      ${disabled && "bg-disabled"}
      ${!disabled && type === "primary" && "bg-primary"} 
      ${!disabled && type === "secondary" && "bg-quaternary"}
      ${!disabled && type === "on/off" && Active && "bg-active"}
      ${!disabled && type === "on/off" && !Active && "bg-warning"}
      ${!disabled && type === "mood" && Active && "bg-night w-11"}
      ${!disabled && type === "mood" && !Active && "bg-quaternary day w-11"}
      `}
      onClick={handleClick}
    >
      <div className=" bg-light w-md h-md rounded-full flex justify-center items-center">
        {type === "on/off" && Active && (
          <>
            {!disabled ? (
              <Image src={activeIcon} alt="on icon" />
            ) : (
              <Image src={onDisabled} alt="on icon" />
            )}
          </>
        )}

        {type === "on/off" && !Active && (
          <>
            {!disabled ? (
              <Image src={offIcon} alt="on icon" />
            ) : (
              <Image src={offDisabled} alt="on icon" />
            )}
          </>
        )}

        {!disabled && type === "mood" && Active && (
          <Image src={nightIcon} alt="on icon" />
        )}

        {!disabled && type === "mood" && !Active && (
          <Image src={dayIcon} alt="on icon" />
        )}
      </div>
    </div>
  );
};

export default SwitchButton;
