import { Meta, StoryObj } from "@storybook/react";

import Dropdown, { DropdownProps } from "./Dropdown";

const meta: Meta<DropdownProps> = {
  title: "Molecules/Dropdown",
  component: Dropdown,
  argTypes: {},
};

export default meta;

export const Primary: StoryObj<DropdownProps> = {
  args: {
    children: "Text",
    values: [
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
    ],
  },
};

export const Secondary: StoryObj<DropdownProps> = {
  args: {
    children: "Text",
    values: [
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
      "Text",
    ],
    multiple: true,
  },
};
