import { StoryObj, Meta } from "@storybook/react";
import TextBlock, { TextBlockProps } from "./TextBlock";

const meta: Meta<TextBlockProps> = {
  title: "Molecules/TextBlock",
  component: TextBlock,
  argTypes: {
    Title: {
      type: "string",
    },
    className: {
      type: "string",
    },
    headerClassName: {
      type: "string",
    },
    contentClassName: {
      type: "string",
    },
  },
};

export default meta;

export const Primary: StoryObj<TextBlockProps> = {
  args: {
    Title: "Teste",
    children:
      "Earth is the third planet from the Sun and the only astronomical object known to harbor life.",
  },
};
