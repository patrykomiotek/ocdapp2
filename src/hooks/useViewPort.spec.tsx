import { renderHook } from "@testing-library/react";

import { useViewPort } from "./useViewPort";

describe("useViewPort hook", () => {
  it("should return viewport value", () => {
    const { result } = renderHook(() => useViewPort());

    expect(result.current).toEqual({ x: 1024, y: 768 });
  });
});
