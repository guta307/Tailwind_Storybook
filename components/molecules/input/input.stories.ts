import { Meta, StoryObj } from "@storybook/react";

import Input, { InputProps } from "./input.client";

const meta: Meta<InputProps> = {
  title: "Molecules/Input",
  component: Input,
  argTypes: {
    label: {
      type: "string",
    },
    multiline: {
      type: "boolean",
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    },
    icon: {
      type: "boolean",
    },
  },
};

export default meta;

export const Primary: StoryObj<InputProps> = {
  args: {},
};

export const Disabled: StoryObj<InputProps> = {
  args: {
    value: "Input",
    disabled: true,
  },
};

export const Multiline: StoryObj<InputProps> = {
  args: {
    value: "Input",
    multiline: true,
  },
};

export const MultilineDisabled: StoryObj<InputProps> = {
  args: {
    value: "Input",
    multiline: true,
    disabled: true,
  },
};

export const PrimaryLabel: StoryObj<InputProps> = {
  args: {
    label: "label",
    value: "Input",
  },
};

export const DisabledLabel: StoryObj<InputProps> = {
  args: {
    label: "label",
    value: "Input",
    disabled: true,
  },
};

export const MultilineLabel: StoryObj<InputProps> = {
  args: {
    label: "label",
    value: "Input",
    multiline: true,
  },
};

export const MultilineDisabledLabel: StoryObj<InputProps> = {
  args: {
    label: "label",
    value: "Input",
    multiline: true,
    disabled: true,
  },
};

export const PrimaryPassword: StoryObj<InputProps> = {
  args: {
    value: "Input",
    type: "password",
    icon: true,
  },
};

export const Sucess: StoryObj<InputProps> = {
  args: {
    label: "label",
    value: "Input",
    response: "success",
    icon: true,
  },
};

export const MultilineSucess: StoryObj<InputProps> = {
  args: {
    label: "label",
    value: "Input",
    multiline: true,
    response: "success",
    icon: true,
  },
};
