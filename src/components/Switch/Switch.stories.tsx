import type { Meta, StoryObj } from "@storybook/react";
import Switch from "./Switch";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";

const meta = {
  title: "Switch",
  component: Switch,
  parameters: {
    // Optional parameter to center the component in the Canvas
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    // backgroundColor: { control: "color" },
  },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Text: Story = {
  args: {
    label: "Switch",
  },
};
export const Small: Story = {
  args: {
    size: "sm",
  },
};

export const Medium: Story = {
  args: {
    size: "md",
  },
};

export const Large: Story = {
  args: {
    size: "lg",
  },
};

export const RoundedMd: Story = {
  args: {
    rounded: "md",
  },
};

export const RoundedFull: Story = {
  args: {
    rounded: "full",
  },
};

export const RoundedWithIcons: Story = {
  args: {
    LeftIcon: <BsFillSunFill className="text-neutral-500" title="light mode" />,
    RightIcon: (
      <BsFillMoonStarsFill className="text-neutral-500" title="dark mode" />
    ),
  },
};

export const ColoredWithIcons: Story = {
  args: {
    LeftIcon: (
      <BsFillSunFill className="text-yellow-300" size={20} title="light mode" />
    ),
    RightIcon: (
      <BsFillMoonStarsFill
        className="text-blue-300"
        size={20}
        title="dark mode"
      />
    ),
    borderColor: "border-slate-800",
    innerBgColor: "bg-slate-800",
    outerBgColor: "bg-slate-500",
  },
};

export const SmallWithIcons: Story = {
  args: {
    size: "sm",
    LeftIcon: (
      <BsFillSunFill
        className="text-neutral-500"
        size={18}
        title="light mode"
      />
    ),
    RightIcon: (
      <BsFillMoonStarsFill
        className="text-neutral-500"
        size={18}
        title="dark mode"
      />
    ),
  },
};

export const MediumWithIcons: Story = {
  args: {
    size: "md",
    LeftIcon: (
      <BsFillSunFill
        className="text-neutral-500"
        size={20}
        title="light mode"
      />
    ),
    RightIcon: (
      <BsFillMoonStarsFill
        className="text-neutral-500"
        size={20}
        title="dark mode"
      />
    ),
  },
};

export const LargeWithIcons: Story = {
  args: {
    size: "lg",
    LeftIcon: (
      <BsFillSunFill
        className="text-neutral-500"
        size={24}
        title="light mode"
      />
    ),
    RightIcon: (
      <BsFillMoonStarsFill
        className="text-neutral-500"
        size={24}
        title="dark mode"
      />
    ),
  },
};
