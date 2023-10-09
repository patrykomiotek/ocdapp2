import "vitest-canvas-mock";
import { expect, afterEach } from "vitest";
// import * as axeMatchers from 'vitest-axe/matchers';
// import 'vitest-axe/extend-expect';
// import { configureAxe } from 'vitest-axe';
// FIXME: temporary hack to fix toHaveNoViolations() typings in tst files
// instead of that three commented lines above should make a job
import { configureAxe, toHaveNoViolations } from "jest-axe";

import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

import { server } from "./mocks/server";

// extends Vitest's expect method with methods from react-testing-library
expect.extend(matchers);

// FIXME: temporary hack to fix toHaveNoViolations() typings in tst files
// expect.extend(axeMatchers);
expect.extend(toHaveNoViolations);

// axe
const axeConfig = configureAxe({
  globalOptions: {
    rules: [{ id: "heading-order", enabled: true }],
  },
});

export const axe = async (props: Element) => {
  // axe needs real timers for validations
  const mockedDate = new Date();
  vi.useRealTimers();

  const results = await axeConfig(props);

  vi.useFakeTimers();
  vi.setSystemTime(mockedDate);
  return results;
};

beforeAll(() => {
  // Enable the mocking in tests.
  server.listen();
});

// runs a cleanup after each test case (e.g. clearing jsdom)
afterEach(() => {
  cleanup();
});
