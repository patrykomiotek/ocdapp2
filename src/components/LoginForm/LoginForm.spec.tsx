import { fireEvent, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from ".";

describe("LoginForm component", () => {
  it("should validate form before submission", async () => {
    const { debug } = render(<LoginForm />);

    const emailField = screen.getByLabelText(/e\-mail/i);
    const passwordField = screen.getByLabelText(/password/i);
    const languageField = screen.getByLabelText(/language/i);

    // fireEvent(emailField, { target: { value: "patryk@wp.pl" } });
    // fireEvent.input(emailField, { target: { value: "patryk@wp.pl" } });
    // fireEvent.input(passwordField, { target: { value: "alamakota" } });
    // fireEvent.input(languageField, { target: { value: "php" } });

    await userEvent.type(emailField, "patryk@wp.pl");
    await userEvent.type(passwordField, "alamakota");
    await userEvent.type(languageField, "php");

    expect(screen.getByText(/\*\*\*\*/i)).toBeInTheDocument();
    // expect(screen.getByText("****")).toBeInTheDocument();
    debug();
  });
});
