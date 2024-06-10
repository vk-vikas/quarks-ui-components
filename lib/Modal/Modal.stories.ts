import { Meta, StoryObj } from "@storybook/react";
import { Modal } from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum atque
    ipsum consectetur nulla `,
    headerText: "dummy header text",
    isOpen: true,
    size: "sm",
  },
};

export const DarkTheme: Story = {
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum atque
    ipsum consectetur nulla voluptatum reiciendis enim, repudiandae,
    possimus omnis animi eveniet corrupti libero, sapiente fugiat? Veniam
    quidem consectetur nostrum ratione!`,
    headerText: "header text",
    isOpen: true,
    theme: "dark",
  },
};

export const secondaryButton: Story = {
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum atque
    ipsum consectetur nulla voluptatum reiciendis enim, repudiandae,
    possimus omnis animi eveniet corrupti libero, sapiente fugiat? Veniam
    quidem consectetur nostrum ratione!`,
    headerText: "dummy header text",
    isOpen: true,
    theme: "light",
    secondaryButtonText: "proceed",
  },
};

export const customiseButtons: Story = {
  args: {
    children: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nostrum atque
      ipsum consectetur nulla voluptatum reiciendis enim, repudiandae,
      possimus omnis animi eveniet corrupti libero, sapiente fugiat? Veniam
      quidem consectetur nostrum ratione!`,
    headerText: "dummy header text",
    isOpen: true,
    theme: "light",
    secondaryButtonText: "proceed",
    closeBtnBgColor: "pink-500",
    secondaryBtnBgColor: "lime-500",
  },
};
