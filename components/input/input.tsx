import { useState } from "react";
import { Multiline } from "./input.stories";

export type InputProps = {
  icon?: boolean;
  label?: string;
  multiline?: boolean;
  response?: "default" | "error" | "success";
  type?: "text" | "password";
} & (
  | React.InputHTMLAttributes<HTMLInputElement>
  | React.TextareaHTMLAttributes<HTMLTextAreaElement>
);

const InputOrTextArea = ({ multiline, type, ...props }: InputProps) => {
  if (multiline) {
    return (
      <textarea
        {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
      />
    );
  }

  return (
    <input
      type={type}
      {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
    />
  );
};

const Input = ({
  className,
  icon = false,
  label,
  type = "text",
  response = "default",
  ...rest
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(icon);

  // Determine the type of the input
  const inputType = icon ? (isPasswordVisible ? "text" : "password") : type;

  return (
    <div
      className={`${
        response === "default"
          ? "bg-dark"
          : response === "success"
          ? "bg-Success"
          : " border-warning"
      } w-xxl2 px-3 py-1 flex gap-2 text-gray-primary rounded-md 
      ${rest.disabled && "border-2"}  ${rest.disabled && "border-disabled"}
      focus:border-focus hover:border-focus focus:border-2 hover:border-2
      ${className} `}
    >
      <section className={`flex flex-col ${Multiline && "w-full"} `}>
        {label && (
          <label
            className={`text-1.5xs ${response === "success" && " text-active"}`}
          >
            {label}
          </label>
        )}
        <InputOrTextArea
          type={inputType}
          className={`focus:outline-none active:border-none bg-transparent self-center w-full text-xs`}
          {...rest}
        />
      </section>
      {icon && (
        <img
          onClick={() => setIsPasswordVisible(!isPasswordVisible)}
          className=" text-xs"
          src={
            isPasswordVisible
              ? response === "success"
                ? "components/input/IconSuccess.svg"
                : "components/input/IconOpen.svg"
              : "components/input/Icon.svg"
          }
          alt={isPasswordVisible ? "Eye Open" : "Eye Closed"}
        />
      )}
    </div>
  );
};

export default Input;
