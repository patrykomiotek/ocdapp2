import type { StorybookConfig } from "@storybook/react-vite";

const path = require("path");
const tsconfigPaths = require("vite-tsconfig-paths").default;

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-a11y",
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  viteFinal: async (config) => {
    if (config) {
      config.plugins?.push(
        /** @see https://github.com/aleclarson/vite-tsconfig-paths */
        tsconfigPaths({
          projects: [path.resolve(path.dirname(__dirname), "tsconfig.json")],
        })
      );
    }

    return config;
  },
};
export default config;
