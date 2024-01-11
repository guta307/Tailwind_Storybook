import Image from "next/image";

/*Images imports*/
import complete from "../../../assets/components/stepper/complete.svg";

export interface StepperProps {
  chapter?: 1 | 2 | 3;
  className?: string;
}

const Stepper = ({ chapter = 1, className }: StepperProps) => {
  return (
    <div className={`flex gap-1 items-center ${className}`}>
      <div
        className={`flex items-center justify-center w-xl h-xl rounded-full border-primary border-2 ${
          chapter == 1 && "bg-primary"
        }`}
      >
        {" "}
        {chapter > 1 ? (
          <Image src={complete} alt="step complete" />
        ) : chapter == 1 ? (
          <h2 className=" font-bold text-lg text-light">1</h2>
        ) : (
          chapter < 1 && <h2 className=" font-bold text-lg text-await">1</h2>
        )}{" "}
      </div>

      <div
        style={{ height: 0, borderWidth: "1px" }}
        className={` w-xl  ${chapter < 2 ? " border-await" : "border-primary"}`}
      />
      <div
        className={`flex items-center justify-center w-xl h-xl rounded-full  border-2 ${
          chapter == 2
            ? "bg-primary border-primary"
            : chapter < 2
            ? " border-await"
            : "border-primary"
        }`}
      >
        {" "}
        {chapter > 2 ? (
          <Image src={complete} alt="step complete" />
        ) : chapter == 2 ? (
          <h2 className=" font-bold text-lg text-light">2</h2>
        ) : (
          chapter < 2 && <h2 className=" font-bold text-lg text-await">2</h2>
        )}{" "}
      </div>
      <div
        style={{ height: 0, borderWidth: "1px" }}
        className={` w-xl  ${chapter < 3 ? " border-await" : "border-primary"}`}
      />
      <div
        className={`flex items-center justify-center w-xl h-xl rounded-full border-2 ${
          chapter == 3
            ? "bg-primary border-primary"
            : chapter < 3
            ? " border-await"
            : "border-primary"
        }`}
      >
        {" "}
        {chapter > 3 ? (
          <Image src={complete} alt="step complete" />
        ) : chapter == 3 ? (
          <h2 className=" font-bold text-lg text-light">3</h2>
        ) : (
          chapter < 3 && <h2 className=" font-bold text-lg text-await">3</h2>
        )}{" "}
      </div>
    </div>
  );
};

export default Stepper;
