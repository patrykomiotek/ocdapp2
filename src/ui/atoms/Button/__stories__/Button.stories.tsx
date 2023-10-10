import type { Meta, StoryObj } from "@storybook/react";

import { Button } from "../Button";

const meta = {
  title: "UI/Atoms/Button",
  component: Button,
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "Hello",
  },
};

export const Green: Story = {
  args: {
    label: "Hello",
    color: "clouds",
    bgColor: "emerald",
  },
};

export const Secondary: Story = {
  args: {
    label: "Hello",
    color: "clouds",
    bgColor: "midnight",
  },
};

export const White: Story = {
  args: {
    label: "Hello",
    color: "clouds",
    bgColor: "clouds",
  },
};
