import { Meta, StoryObj } from "@storybook/react";
import Notice from "./Notice";

const meta: Meta = {
  title: "Molecules/Notice",
  component: Notice,
  argTypes: {
    type: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {},
};

export const Error: StoryObj = {
  args: {
    type: "error",
  },
};

export const Choice: StoryObj = {
  args: {
    type: "choice",
  },
};

export const Message: StoryObj = {
  args: {
    type: "message",
  },
};

export const Booking: StoryObj = {
  args: {
    type: "message_booking",
  },
};

export const MessageNotification: StoryObj = {
  args: {
    type: "message_notification",
  },
};
