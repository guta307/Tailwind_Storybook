import { StoryObj, Meta } from "@storybook/react";
import Stepper from "./Stepper";

const meta: Meta = {
  title: "Molecules/Stepper",
  component: Stepper,
  argTypes: {
    chapter: {
      description: "value of the current chapter",
    },
  },
};

export default meta;

export const Primary: StoryObj = {
  args: {},
};

export const Secondary: StoryObj = {
  args: {
    chapter: 2,
  },
};

export const Third: StoryObj = {
  args: {
    chapter: 3,
  },
};
