import { renderHook, act } from '@testing-library/react';
import { useTheme, Theme } from './ThemeContext';

describe('useTheme hook', () => {
  it('should toggle values', () => {
    const { result } = renderHook(() => useTheme());

    // null because values is get from window.matchMedia and
    // it not exists in node
    expect(result.current.theme).toBe(null);

    act(() => {
      result.current.setLight();
      result.current.toggle();
    });

    expect(result.current.theme).toBe(Theme.DARK);
  });
});