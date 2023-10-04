import type { Meta, StoryObj } from "@storybook/react";

import { MagicButton } from "./MagicButton";

const meta = {
  title: "UI/Atoms/MagicButton",
  component: MagicButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof MagicButton>;

export default meta;
type Story = StoryObj<typeof meta>;

// TODO: this component needs wrapper to pass refs logic
export const Primary: Story = {
  args: {},
};
