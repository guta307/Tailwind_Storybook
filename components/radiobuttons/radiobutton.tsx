import "./radiobutton.css";
export interface radioProps {
  active: boolean;
}

const radioButtons = ({ active }: radioProps) => {
  return (
    <div
      className={`radiobutton w-5 h-5 rounded-full ${
        active ? " border-2 border-primary" : "border-2 border-outline"
      }`}
    />
  );
};
export default radioButtons;
