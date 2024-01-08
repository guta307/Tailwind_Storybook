import { StoryObj, Meta } from "@storybook/react";
import Button, { ButtonProps } from "./Button";

const meta: Meta<ButtonProps> = {
  title: "Molecules/Button",
  component: Button,
  argTypes: {
    children: {
      type: "string",
    },
    disabled: {
      type: "boolean",
    },
    className: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    className: "text-xl",
  },
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "secondary",
    className: "text-xl",
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "tertiary",
    className: "text-xl",
  },
};

export const Delete: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "delete",
    className: "text-xl",
  },
};

export const Accept: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    variant: "accept",
    className: "text-xl",
  },
};

export const Violet: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    className: "theme-violet text-xl",
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: "Botão",
    disabled: true,
    className: "text-xl",
  },
};
