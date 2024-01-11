import { Meta, StoryObj } from "@storybook/react";
import radioButtons, { radioProps } from "./radiobutton";

const meta: Meta<radioProps> = {
  title: "Molecules/radiobutton",
  component: radioButtons,
  argTypes: {
    active: {
      type: "boolean",
    },
  },
};

export default meta;

export const Primary: StoryObj<radioProps> = {
  args: {
    active: true,
  },
};

export const PrimaryDeactive: StoryObj<radioProps> = {
  args: {
    active: false,
  },
};
