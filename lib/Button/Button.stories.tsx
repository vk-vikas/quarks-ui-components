import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";

const meta: Meta<typeof Button> = {
  component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Solid: Story = {
  args: {
    variant: "solid_just_blue",
    size: "md",
    roundness: "sm",
    children: "solid",
  },
};

export const outline: Story = {
  args: {
    children: "outline",
    variant: "outline_just_red",
  },
};

export const withIcon: Story = {
  args: {
    children: (
      <>
        <div>😁</div>withIcon
      </>
    ),
  },
};

export const dynamic: Story = {
  args: {
    children: "I move",
    movement: "active",
  },
};

export const disabled: Story = {
  args: {
    children: "diabled btn",
    isDisabled: true,
  },
};
