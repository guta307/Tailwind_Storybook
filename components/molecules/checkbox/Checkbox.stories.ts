import { Meta, StoryObj } from "@storybook/react";

import Checkbox, { CheckboxProps } from "./checkbox";

const meta: Meta<CheckboxProps> = {
  title: "Molecules/checkbox",
  component: Checkbox,
  argTypes: {
    checked: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
  },
};

export default meta;

export const Primary: StoryObj<CheckboxProps> = {
  args: {},
};

export const PrimaryChecked: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
  },
};

export const PrimaryDisabled: StoryObj<CheckboxProps> = {
  args: {
    checked: false,
    disabled: true,
  },
};

export const PrimaryDisabledChecked: StoryObj<CheckboxProps> = {
  args: {
    checked: true,
    disabled: true,
  },
};
