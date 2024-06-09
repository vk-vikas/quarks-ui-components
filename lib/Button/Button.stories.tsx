import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    variant: "solid",
    size: "md",
    roundness: "sm",
    children: "solid",
    bgColor: "purple-500",
  },
};

export const outline: Story = {
  args: {
    children: "outline",
    variant: "outline",
    bgColor: "orange-200",
  },
};

export const withIcon: Story = {
  args: {
    bgColor: "blue-500",
    variant: "solid",
    children: (
      <>
        <span>😁</span>withIcon
      </>
    ),
  },
};

export const dynamic: Story = {
  args: {
    variant: "solid",
    bgColor: "blue-500",
    children: "I move",
    movement: "active",
  },
};

export const disabled: Story = {
  args: {
    bgColor: "red-500",
    variant: "solid",
    children: "diabled btn",
    isDisabled: true,
  },
};
