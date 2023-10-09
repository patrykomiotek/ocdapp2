import type { Meta } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { ThemeProvider } from './ThemeContext';

const meta = {
  title: 'Components/ThemeSwitcher',
  component: ThemeSwitcher,
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
// type Story = StoryObj<typeof meta>;

export const _ThemeSwitcher = () => (
  <ThemeProvider>
    <ThemeSwitcher />
  </ThemeProvider>
);
