export interface StepperProps {
  chapter: 1 | 2 | 3;
}

const Stepper = ({ chapter = 1 }: StepperProps) => {
  return (
    <div className="flex gap-1 items-center">
      <div
        className={`flex items-center justify-center w-xl h-xl rounded-full border-primary border-2 ${
          chapter == 1 && "bg-primary"
        }`}
      >
        {" "}
        {chapter > 1 ? (
          <img src="components/stepper/complete.svg" />
        ) : chapter == 1 ? (
          <h2 className=" font-bold text-lg text-light">1</h2>
        ) : (
          chapter < 1 && <h2 className=" font-bold text-lg text-await">1</h2>
        )}{" "}
      </div>

      <div
        style={{ height: 0 }}
        className={` w-xl border-2 ${
          chapter < 2 ? " border-await" : "border-primary"
        }`}
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
          <img src="components/stepper/complete.svg" />
        ) : chapter == 2 ? (
          <h2 className=" font-bold text-lg text-light">2</h2>
        ) : (
          chapter < 2 && <h2 className=" font-bold text-lg text-await">2</h2>
        )}{" "}
      </div>
      <div
        style={{ height: 0 }}
        className={` w-xl  border-2 ${
          chapter < 3 ? " border-await" : "border-primary"
        }`}
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
          <img src="components/stepper/complete.svg" />
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
