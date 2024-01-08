import { StoryObj, Meta } from "@storybook/react";
import SwitchButton, { SwitchProps } from "./Switch";

const meta: Meta<SwitchProps> = {
  title: "Molecules/Switch",
  component: SwitchButton,
  argTypes: {
    active: {
      type: "boolean",
    },
    type: {
      type: "string",
      description: "primary / secondary / 'on/off' / mood",
    },
    disabled: {
      type: "boolean",
    },
  },
};

export default meta;

export const Primary: StoryObj<SwitchProps> = {
  args: {
    active: false,
  },
};

export const PrimaryActive: StoryObj<SwitchProps> = {
  args: {
    active: true,
  },
};

export const Secondary: StoryObj<SwitchProps> = {
  args: {
    active: false,
    type: "secondary",
  },
};

export const SecondaryActive: StoryObj<SwitchProps> = {
  args: {
    active: true,
    type: "secondary",
  },
};

export const On: StoryObj<SwitchProps> = {
  args: {
    active: true,
    type: "on/off",
  },
};
export const Off: StoryObj<SwitchProps> = {
  args: {
    active: false,
    type: "on/off",
  },
};
export const Night: StoryObj<SwitchProps> = {
  args: {
    active: true,
    type: "mood",
  },
};
export const Day: StoryObj<SwitchProps> = {
  args: {
    active: false,
    type: "mood",
  },
};

export const DisableOn: StoryObj<SwitchProps> = {
  args: {
    active: true,
    type: "on/off",
    disabled: true,
  },
};
export const DisableOff: StoryObj<SwitchProps> = {
  args: {
    active: false,
    type: "on/off",
    disabled: true,
  },
};
