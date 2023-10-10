vi.mock("@hooks/useViewPort", () => ({
  useViewPort: vi.fn(),
}));

import { screen, render } from "@testing-library/react";
import { ViewPort } from ".";
import { useViewPort } from "@hooks/useViewPort";

describe("ViewPort component with mocked hook", () => {
  it("should render component with mocked values", () => {
    vi.mocked(useViewPort).mockImplementation(() => ({ x: 100, y: 20 }));
    // vi.mocked(useViewPort).mockRejectedValue()
    // vi.mocked(useViewPort).mockResolvedValue()
    render(<ViewPort />);
    expect(screen.getByText(/x: 100/i)).toBeInTheDocument();
    expect(screen.getByText(/y: 20/i)).toBeInTheDocument();
  });
});
