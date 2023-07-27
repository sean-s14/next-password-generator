import type { Meta, StoryObj } from "@storybook/react";
import Clipboard from "./Clipboard";

const meta = {
  title: "Clipboard",
  component: Clipboard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof Clipboard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Text: Story = {
  args: {
    text: "password12345678",
  },
};

export const NoText: Story = {};
