import { act, renderHook } from "@testing-library/react";
import { useTheme, Theme } from "./ThemeContext";

describe("useTheme hook", () => {
  it("should toggle theme", () => {
    const { result } = renderHook(() => useTheme());

    expect(result.current.theme).toBe(null);
    act(() => {
      result.current.toggle();
      result.current.setLight();
    });

    expect(result.current.theme).toBe(Theme.LIGHT);
  });
  it.todo("should set theme do dark", () => {});
  it.todo("should set theme do light", () => {});
});
