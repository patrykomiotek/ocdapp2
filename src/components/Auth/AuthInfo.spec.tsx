import { render, screen, fireEvent } from "@testing-library/react";
import { AuthCredentials, AuthInfo } from ".";
import { AuthProvider } from "./AuthContext";

describe("AuthInfo component", () => {
  it("should toggle value", () => {
    // render(<AuthInfo />);
    render(
      <AuthProvider>
        <AuthCredentials />
      </AuthProvider>
    );

    expect(screen.getByText(/no/i)).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByText(/yes/i)).toBeInTheDocument();
  });
});
