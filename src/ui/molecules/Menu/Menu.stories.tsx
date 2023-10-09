import type { Meta } from '@storybook/react';
import { MemoryRouter } from 'react-router-dom';

import { Menu } from './Menu';


const meta = {
  title: 'UI/Molecules/Menu',
  component: Menu,
  tags: ['autodocs'],
} satisfies Meta<typeof Menu>;

export default meta;

export const _Menu = () => (
  <MemoryRouter initialEntries={["/"]}>
    <Menu />
  </MemoryRouter>
);
