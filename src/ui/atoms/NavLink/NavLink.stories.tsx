import type { Meta } from '@storybook/react';

import { NavLink } from './NavLink';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'UI/Atoms/NavLink',
  component: NavLink,
  tags: ['autodocs'],
} satisfies Meta<typeof NavLink>;

export default meta;

export const _NavLink = () => (
  <MemoryRouter initialEntries={["/"]}>
    <NavLink to="/">Home</NavLink>
  </MemoryRouter>
);
