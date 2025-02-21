// themeProvider.js
import React, { createContext, useState, useEffect } from 'react';

// Create a Theme Context
export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  // Retrieve the saved theme from localStorage or default to 'light'
  const savedTheme = localStorage.getItem('theme') || 'light';
  
  const [theme, setTheme] = useState(savedTheme);

  // When theme changes, update localStorage and body class
  useEffect(() => {
    localStorage.setItem('theme', theme);
    document.body.classList.toggle('dark-mode', theme === 'dark');
  }, [theme]);

  // Toggle between light and dark themes
  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
