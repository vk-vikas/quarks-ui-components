import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";

const meta: Meta<typeof Input> = {
  component: Input,
};

export default meta;
type Story = StoryObj<typeof Input>;

export const simple: Story = {
  args: {
    label: "username",
    bgColor: "blue-300",
  },
};

export const required: Story = {
  args: {
    label: "username",
    isRequired: true,
    bgColor: "blue-300",
  },
};

export const errorMssg: Story = {
  args: {
    label: "email",
    isInvalid: true,
    errorMessage: "not valid email",
    bgColor: "blue-300",
    textColor: "blue-700",
  },
};

export const disabled: Story = {
  args: {
    label: "username",
    bgColor: "red-500",
    isDisabled: true,
  },
};
