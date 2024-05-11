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
  },
};

export const required: Story = {
  args: {
    label: "username",
    isRequired: true,
  },
};

export const errorMssg: Story = {
  args: {
    label: "email",
    isInvalid: true,
    errorMessage: "not valid email",
  },
};

export const disabled: Story = {
  args: {
    label: "username",
    variant: "just_blue",
    isDisabled: true,
  },
};
