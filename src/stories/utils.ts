import { action } from '@storybook/addon-actions';

export const renderAction = action('render') as (...args: unknown[]) => void;
