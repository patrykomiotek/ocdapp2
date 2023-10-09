import type { Meta, StoryObj } from "@storybook/react";

import { AuthCredentials } from "./AuthCredentials";
import { AuthProvider } from "./AuthContext";

const meta = {
  title: "Components/AuthCredentials",
  component: AuthCredentials,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof AuthCredentials>;

export default meta;
// type Story = StoryObj<typeof meta>;

// TODO: this component needs wrapper to pass refs logic
export const Primary = () => (
  <AuthProvider>
    <AuthCredentials />
  </AuthProvider>
);
