import { Meta, StoryObj } from "@storybook/react";
import Spinner from "./Spinner";

const meta: Meta<typeof Spinner> = {
  component: Spinner,
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    variant: "light",
    size: "sm",
    spinnerColor: "pink-500",
  },
};

export const WithLabel: Story = {
  args: {
    variant: "light",
    size: "sm",
    spinnerColor: "pink-500",
    label: "loading...",
  },
};

export const darkVariant: Story = {
  args: {
    variant: "dark",
    size: "sm",
    spinnerColor: "pink-400",
  },
};

export const textColor: Story = {
  args: {
    variant: "light",
    size: "sm",
    spinnerColor: "pink-400",
    textColor: "pink-600",
  },
};
