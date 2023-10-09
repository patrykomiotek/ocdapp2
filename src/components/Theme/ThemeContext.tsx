import { createContext, useContext, useEffect, useState } from "react";

export enum Theme {
  LIGHT = "light",
  DARK = "dark",
}

interface ThemeContextType {
  theme: Theme | null;
  toggle: () => void;
  setLight: () => void;
  setDark: () => void;
}

const ThemeContext = createContext<ThemeContextType | null>(null);
const getMode = () => {
  if (window.matchMedia) {
    const matchesDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    return matchesDarkMode ? Theme.DARK : Theme.LIGHT;
  }
  // there may not be window.matchMedia object - eg. in tests
  return null;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = () => {
  // set theme value based on user
  // 💡 hint: state in this component may be useless ;)
  // there is only a need to add or remove dark css class
  // so state was only for workshop purposes
  const [theme, setTheme] = useState<Theme | null>(() => {
    return getMode();
  });

  useEffect(() => {
    // on the mount of component set additional class
    const themeMode = getMode();
    if (themeMode === Theme.DARK) {
      document.body.classList.add("dark");
    }

    // add listener for change preferences
    const handleSchemeChange = (event: MediaQueryListEvent) => {
      if (event.matches) {
        document.body.classList.add("dark");
      } else {
        document.body.classList.remove("dark");
      }
    };

    let query: MediaQueryList;
    if (themeMode !== null) {
      query = window.matchMedia("(prefers-color-scheme: dark)");
      query.addEventListener("change", handleSchemeChange);
    }

    return () => {
      query?.removeEventListener("change", handleSchemeChange);
    };
  }, []);

  const toggle = () => {
    if (theme === Theme.DARK) {
      setTheme(Theme.LIGHT);
      document.body.classList.remove("dark");
    } else {
      setTheme(Theme.DARK);
      document.body.classList.add("dark");
    }
  };

  const setLight = () => setTheme(Theme.LIGHT);
  const setDark = () => setTheme(Theme.DARK);

  return { theme, toggle, setLight, setDark };
};

export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  console.log("inside useThemeContext", context);
  if (!context) {
    throw new Error("Oh no! You need to place component inside ThemeProvider");
  }
  return context;
};

type ThemeProviderProps = {
  children: React.ReactNode;
};

// render(<ThemeProvider><ThemeSwitcher /></ThemeProvider>)
// render(<AuthContext.Provider value={{
//     isLogged,
//     setIsLogged
//   }}>
//   <AuthCredentials />
// </ThemeProvider>)

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const { theme, toggle, setLight, setDark } = useTheme();
  return (
    <ThemeContext.Provider
      value={{
        theme,
        toggle,
        setLight,
        setDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
