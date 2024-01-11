import React from "react";
import Button from "../button/Button";
import Image from "next/image";

export interface NoticeProps {
  type:
    | "notification"
    | "error"
    | "choice"
    | "message"
    | "message_booking"
    | "message_notification";
}

const Notice = ({ type = "notification" }: NoticeProps) => {
  const iconMapping = {
    notification: "/components/notice/notificationIcon.svg",
    error: "/components/notice/ErrorIcon.svg",
    message: "/components/notice/avatar.svg",
    message_booking: "/components/notice/bookingIcon.svg",
    message_notification: "/components/notice/messageNotification.svg",
  };

  const renderIcon = () =>
    iconMapping[type as keyof typeof iconMapping] ? (
      <Image
        src={iconMapping[type as keyof typeof iconMapping]}
        alt={`${type} Icon`}
      />
    ) : null;

  const renderButtons = () => {
    if (["notification", "error", "choice"].includes(type)) {
      return (
        <div className="flex gap-5 ">
          <Button
            variant={type === "error" ? "delete" : "accept"}
            className={
              type === "error" || type === "notification"
                ? "w-14xl h-lg text-sm"
                : "w-16xl h-lg text-sm"
            }
          >
            Action
          </Button>

          {type !== "choice" ? (
            <Button variant="secondary" className="w-14xl h-lg text-sm">
              Action
            </Button>
          ) : (
            <Button variant="delete" className="w-16xl h-lg text-sm">
              Action
            </Button>
          )}
        </div>
      );
    }
    return null;
  };

  const renderContent = () => {
    return type === "message" ||
      type === "message_notification" ||
      type === "message_booking" ? (
      <div className="flex-col">
        {type === "message" || type === "message_notification" ? (
          <>
            <h2 className="font-bold text-md whitespace-nowrap">Amet minim</h2>
            <p className="text-sm font-normal p-none m-none text-start">
              Amet minim mollit non deserunt ullamco est
            </p>
          </>
        ) : (
          <>
            <p className="text-xm font-bold text-gray-tertiary p-none m-none text-start">
              24.03.2022, 16:00
            </p>
            <h2 className="font-bold text-md whitespace-nowrap">
              Walk through the historical museum
            </h2>
          </>
        )}
      </div>
    ) : (
      <>
        {type === "choice" && <h2 className="font-bold text-md">Amet minim</h2>}
        <p className="text-sm font-normal p-none m-none text-start">
          Amet minim mollit non deserunt ullamco est
        </p>
      </>
    );
  };

  const containerClasses = `rounded-md flex items-center justify-between 
    ${
      type === "notification" ? "p-5 gap-6 w-xxl21 h-12xl bg-notification" : ""
    } 
    ${type === "error" ? "p-5 w-xxl21 gap-6 h-12xl bg-error" : ""}
    ${type === "choice" ? "p-5 w-xxl21 gap-5 h-xxl1 bg-dark" : ""}
    ${
      type === "message"
        ? "p-4xs w-xxl15 gap-3 h-11_75xl shadow-md bg-dark"
        : ""
    }
    ${
      type === "message_booking" ? "p-4xs w-xxl15 h-11xl shadow-md bg-dark" : ""
    }

    ${
      type === "message_notification"
        ? "p-4xs w-xxl15 h-9xl shadow-md bg-dark"
        : ""
    }
    `;

  const contentClasses = `flex ${
    type === "choice" ? "flex-col gap-5" : "gap-lg items-center"
  }`;

  return (
    <div className={containerClasses}>
      <section className={contentClasses}>
        {renderIcon()}
        {renderContent()}
        {renderButtons()}
      </section>
      {type === "message_booking" && (
        <p className="text-lg font-bold text-gray-secondary">+2000</p>
      )}
      <Image src="components/global/x.svg" alt="Close Icon" />
    </div>
  );
};

export default Notice;
