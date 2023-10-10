import type { Meta, StoryObj } from "@storybook/react";

import { LoginFormRefs } from "./LoginFormRefs";

const meta = {
  title: "Components/LoginFormRefs",
  component: LoginFormRefs,
  // tags: ['autodocs'],
} satisfies Meta<typeof LoginFormRefs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _LoginFormRefs: Story = {};
