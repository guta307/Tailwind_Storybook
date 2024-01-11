import Image from "next/image";
import Button from "../button/Button";
import CloseImg from "../../../assets/components/global/x.svg";
export interface ModalProps {
  title: string;
  content: string[];
  type: "default" | "save" | "delete" | "stub";
  components?: React.ReactElement[];
}

function getButtons(type: "default" | "save" | "delete" | "stub") {
  if (type === "default" || type === "save") {
    return (
      <>
        <Button className="w-xxl10 h7 px-6 py-1.5 rounded-4xs text-xs">
          Primary button
        </Button>
        <Button
          variant="secondary"
          className="w-xxl10 h7 px-6 py-1.5 rounded-4xs text-xs"
        >
          Secondary button
        </Button>
      </>
    );
  } else if (type === "delete") {
    return (
      <>
        <Button
          variant="delete"
          className="w-xxl10 h7 px-6 py-1.5 rounded-4xs text-xs"
        >
          Delete
        </Button>
        <Button
          variant="secondary"
          className="w-xxl10 h7 px-6 py-1.5 rounded-4xs text-xs"
        >
          Cancel
        </Button>
      </>
    );
  }
}

const Modal = ({
  title,
  content,
  type = "default",
  components,
}: ModalProps) => {
  return (
    <div
      className={`Modal w-xxl14 shadow-md p-xl flex flex-col align-middle gap-md rounded-lg ${
        type === "default" && "h-xxl12"
      } ${(type === "save" || type === "delete") && "h-xxl5"} ${
        type === "stub" && "h-xxl17"
      }`}
    >
      {/*header*/}
      <header className="flex justify-between align-middle w-xxl10">
        <h2 className="font-bold text-lg leading-6">{title}</h2>
        <Image src={CloseImg} alt="close tag" />
      </header>
      {/*content*/}
      <section className="Content flex flex-col gap-1">
        {content.map((value, index) => {
          return (
            <p key={index} className="text-md font-normal leading-5">
              {value}
            </p>
          );
        })}
      </section>
      {/*buttons*/}
      <section className="flex gap-3 flex-col">
        {type !== "stub"
          ? getButtons(type)
          : components?.map((value) => {
              return value;
            })}
      </section>
    </div>
  );
};

export default Modal;
