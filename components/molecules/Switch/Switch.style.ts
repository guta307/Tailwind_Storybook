import { SwitchProps } from "./Switch";

type SwitchStyle = {
  Active: boolean;
};

const SwitchStyle = (
  { type, disabled }: SwitchProps,
  { Active }: SwitchStyle
) => {
  let styles = "";

  switch (type) {
    case "on/off":
      styles += Active ? "bg-active" : "bg-warning";
      break;
    case "mood":
      styles += Active ? "bg-night w-11" : "bg-quaternary day w-11";
      break;
    case "primary":
      styles += "bg-primary";
      break;
    case "secondary":
      styles += "bg-quaternary";
      break;
    default:
      break;
  }

  if (disabled) {
    styles += " bg-disabled";
  }

  const justify = Active ? "justify-end" : "justify-start";

  return (styles = `${justify} ${styles}`);
};

export default SwitchStyle;
