import React, { createContext, useContext, useEffect, useState } from "react";

// Types for the context
interface ThemeContextType {
  theme: "light" | "dark";
  setTheme: (theme: "light" | "dark") => void;
}

// Default context value
const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  setTheme: () => {},
});

// Provider component
export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" || savedTheme === "light"
      ? (savedTheme as "light" | "dark")
      : window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  // Apply the theme to the document
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Listen for system theme changes
  useEffect(() => {
    const systemThemeChangeListener = (e: MediaQueryListEvent) => {
      const systemTheme = e.matches ? "dark" : "light";
      const savedTheme = localStorage.getItem("theme");

      console.log({ systemTheme, savedTheme });

      // Only update theme if user hasn't manually overridden
      if (!savedTheme) {
        setTheme(systemTheme);
      }
    };

    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    darkModeMediaQuery.addEventListener("change", systemThemeChangeListener);

    // Cleanup listener on unmount
    return () => {
      darkModeMediaQuery.removeEventListener(
        "change",
        systemThemeChangeListener
      );
    };
  }, []);

  // Update localStorage only when the user explicitly changes the theme
  const handleSetTheme = (newTheme: "light" | "dark") => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme: handleSetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for accessing the theme context
export const useTheme = () => useContext(ThemeContext);
