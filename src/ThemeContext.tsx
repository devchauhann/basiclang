
import React, { createContext, useContext, useState, useEffect } from 'react';
import { Theme } from '../types';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    // Only access localStorage in browser environment
    if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
      try {
        const savedTheme = localStorage.getItem('theme');
        return (savedTheme as Theme) || Theme.DARK;
      } catch {
        return Theme.DARK;
      }
    }
    return Theme.DARK;
  });

  const toggleTheme = () => {
    setTheme(prev => {
      const newTheme = prev === Theme.DARK ? Theme.LIGHT : Theme.DARK;
      if (typeof window !== 'undefined' && typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem('theme', newTheme);
        } catch {
          // Silently fail if localStorage is not available
        }
      }
      return newTheme;
    });
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;
      if (theme === Theme.DARK) {
        root.classList.add('dark');
      } else {
        root.classList.remove('dark');
      }
      // Save theme to localStorage
      if (typeof localStorage !== 'undefined') {
        try {
          localStorage.setItem('theme', theme);
        } catch {
          // Silently fail if localStorage is not available
        }
      }
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
