/*image imports*/
/*----*/

export type SwitchProps = {
  active: boolean;
  type?: "primary" | "secondary" | "on/off" | "mood";
  disabled?: boolean;
};

const SwitchButton = ({
  active,
  type = "primary",
  disabled = false,
}: SwitchProps) => {
  return (
    <div
      className={` w-10 p-8xs focus:border-2 focus:border-focus h-6 rounded-xlg flex items-center  ${
        active ? "justify-end" : "justify-start"
      } 
      ${disabled && "bg-disabled"}
      ${!disabled && type === "primary" && "bg-primary"} 
      ${!disabled && type === "secondary" && "bg-quaternary"}
      ${!disabled && type === "on/off" && active && "bg-active"}
      ${!disabled && type === "on/off" && !active && "bg-warning"}
      ${!disabled && type === "mood" && active && "bg-night w-11"}
      ${!disabled && type === "mood" && !active && "bg-quaternary day w-11"}
      `}
    >
      <div className=" bg-light w-md h-md rounded-full flex justify-center items-center">
        {type === "on/off" && active && (
          <>
            {!disabled ? (
              <img
                src={"components/switch/IconpackVariants.svg"}
                alt="on icon"
              />
            ) : (
              <img src={"components/switch/onDisabled.svg"} alt="on icon" />
            )}
          </>
        )}

        {type === "on/off" && !active && (
          <>
            {!disabled ? (
              <img src={"components/switch/Off.svg"} alt="on icon" />
            ) : (
              <img src={"components/switch/offDisabled.svg"} alt="on icon" />
            )}
          </>
        )}

        {!disabled && type === "mood" && active && (
          <img src={"components/switch/night.svg"} alt="on icon" />
        )}

        {!disabled && type === "mood" && !active && (
          <img src={"components/switch/day.svg"} alt="on icon" />
        )}
      </div>
    </div>
  );
};

export default SwitchButton;
