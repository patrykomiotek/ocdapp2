import React, { createContext, useContext, useState } from "react";

enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(Theme.LIGHT);

  const toggle = () => {
    if (theme === Theme.LIGHT) {
      setTheme(Theme.DARK);
    } else {
      setTheme(Theme.LIGHT);
    }
  };

  const setLight = () => setTheme(Theme.LIGHT);
  const setDark = () => setTheme(Theme.DARK);

  return { theme, toggle, setLight, setDark };
};

type ThemeChanger = ReturnType<typeof useTheme>;

const ThemeContext = createContext<ThemeChanger | null>(null);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const theme = useTheme();
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("Oh no! Place your component inside ThemeProvider");
  }
  return context;
};
