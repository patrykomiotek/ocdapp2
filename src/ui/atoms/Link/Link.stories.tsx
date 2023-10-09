import type { Meta } from '@storybook/react';

import { Link } from './Link';
import { MemoryRouter } from 'react-router-dom';

const meta = {
  title: 'UI/Atoms/Link',
  component: Link,
  tags: ['autodocs'],
} satisfies Meta<typeof Link>;

export default meta;

export const _Link = () => (
  <MemoryRouter initialEntries={["/"]}>
    <Link to="/">Home</Link>
  </MemoryRouter>
);
