import { screen, render, fireEvent } from "@testing-library/react";
import { Stepper } from "./Stepper";

describe("Stepper component", () => {
  it("should change counter value", () => {
    const { debug } = render(<Stepper />);

    expect(screen.getByText("0")).toBeInTheDocument();

    // fireEvent.click(screen.getByRole("button"));
    fireEvent.click(screen.getByTestId("increment-btn"));
    fireEvent.click(screen.getByText("+"));
    expect(screen.getByText("2")).toBeInTheDocument();

    fireEvent.click(screen.getByText("-"));
    expect(screen.getByText("1")).toBeInTheDocument();
    debug();
  });
});
