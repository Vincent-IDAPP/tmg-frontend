"use client";

import { createContext, useContext } from "react";
const ThemeContext = createContext();

export function ThemeProvider({ value, children }) {
  

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
