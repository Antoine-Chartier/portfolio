import { useContext, useEffect, useState } from "react";
import { createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const storageKey = "theme";

  useEffect(() => {
    reflectPreference(theme);
  }, []);

  const getColorPreference = () => {
    if (localStorage.getItem(storageKey))
      return localStorage.getItem(storageKey);
    else
      return window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";
  };

  const [theme, setTheme] = useState(getColorPreference());

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    console.log("onClick is called, with : ", newTheme);
    setPreference(newTheme);
  };

  const transitionManager = () => {
    const enable = () =>
      document.documentElement.style.setProperty("--transition-delay", "0.5s");
    const disable = () =>
      document.documentElement.style.setProperty("--transition-delay", "0");
    return { enable, disable };
  };

  const setPreference = (newTheme) => {
    localStorage.setItem(storageKey, newTheme);
    reflectPreference(newTheme);
  };

  const reflectPreference = (newTheme) => {
    const transitions = transitionManager();
    transitions.disable();
    document.documentElement.setAttribute("data-theme", newTheme);
    document
      .getElementById("theme-toggle")
      ?.setAttribute("aria-label", newTheme);
    document
      .querySelector('meta[name="theme-color"]')
      .setAttribute("content", newTheme === "dark" ? "#1a1a1a" : "#f5f5f5");
    setTimeout(() => {
      transitions.enable();
    }, 300);
    // transitions.enable();
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { ThemeContext, ThemeProvider, useTheme };
