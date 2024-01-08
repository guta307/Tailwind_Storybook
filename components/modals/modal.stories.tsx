import { Meta, StoryObj } from "@storybook/react";
import Modal, { ModalProps } from "./modal";
import Button from "../button/Button";
import Link from "../Link/Link";
import SwitchButton from "../Switch/Switch";

const meta: Meta<ModalProps> = {
  title: "Molecules/Modal",
  component: Modal,
  argTypes: {
    content: {
      control: {
        type: "array",
        description: "Array de strings",
      },
      description: "Array de strings",
    },
    type: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<ModalProps> = {
  args: {
    title: "Heading",
    content: [
      "Today, every company I talk to wants to implement a design system from scratch. Unfortunately, the details of a design system are not explored, so often they are not used to the maximum to create a useful user experience.",
      "New designers can take a look at any of the design patterns listed below to learn best practices and make informed design decisions on their projects.",
    ],
    type: "default",
  },
};

export const Save: StoryObj<ModalProps> = {
  args: {
    title: "Do you want to save your changes?",
    content: ["Your changes will be lost"],
    type: "save",
  },
};

export const Delete: StoryObj<ModalProps> = {
  args: {
    title: "Do you want to delete account?",
    content: ["All data will be lost"],
    type: "delete",
  },
};

export const Stub: StoryObj<ModalProps> = {
  args: {
    title: "Title",
    content: ["text"],
    type: "stub",
    components: [
      <Button children={"teste"} className={"text-xs"} />,
      <Link children={"teste"} />,
      <SwitchButton active={false} />,
    ],
  },
};
