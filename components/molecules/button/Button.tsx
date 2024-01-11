export type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "tertiary" | "delete" | "accept";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;
//px/py = padding
//bg = background
//rounded = border-radius

function getVariant(
  variant: ButtonProps["variant"],
  disabled: ButtonProps["disabled"]
) {
  switch (variant) {
    case "primary":
      return disabled
        ? "bg-disabled text-gray-disabled"
        : "bg-primary text-white";
      break;
    case "secondary":
      return disabled
        ? "bg-disabled text-gray-disabled"
        : "bg-quaternary text-primary";
      break;
    case "tertiary":
      return disabled ? "bg-disabled text-gray-disabled" : "text-primary";
      break;
    case "delete":
      return disabled
        ? "bg-disabled text-gray-disabled"
        : "bg-warning text-white";
      break;
    case "accept":
      return disabled
        ? "bg-disabled text-gray-disabled"
        : " bg-active text-white";
      break;
    default:
      return disabled ? "" : "";
  }
}

const Button = ({
  variant = "primary",
  children,
  className,
  disabled,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={`rounded-md px-6 py-2 font-extrabold flex items-center justify-center  ${getVariant(
        variant,
        disabled
      )}  ${className}`}
      disabled={disabled}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
