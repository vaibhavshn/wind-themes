import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext(null);

const useWindThemes = (defaultTheme, themes) => {
  const [theme, setTheme] = useState(defaultTheme);

  useEffect(() => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme && themes.includes(currentTheme)) {
      setTheme(currentTheme);
    } else {
      localStorage.setItem('theme', theme);
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.remove(...themes);
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return { theme, setTheme };
};

const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ defaultTheme, themes, children }) => {
  return (
    <ThemeContext.Provider
      value={useWindThemes(defaultTheme, themes, children)}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, useTheme };
