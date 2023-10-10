import { render } from "@testing-library/react";
import { Button } from ".";
import { axe } from "jest-axe";

describe("Button component", () => {
  it("should have no violations", async () => {
    const { container } = render(
      <Button label="Click me" color="clouds" bgColor="emerald" />
    );
    // console.log(container);

    expect(await axe(container)).toHaveNoViolations();
  });
});
