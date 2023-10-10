import type { Meta, StoryObj } from "@storybook/react";

import { LoginForm } from "./LoginForm";

const meta = {
  title: "Components/LoginFormState",
  component: LoginForm,
  // tags: ['autodocs'],
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const _LoginFormState: Story = {};
