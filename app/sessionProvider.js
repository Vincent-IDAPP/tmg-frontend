"use client";

import { createContext, useContext } from "react";

const SessionContext = createContext(null);

export function SessionProvider({ children }) {
  

  return (
    <SessionContext.Provider>
      {children}
    </SessionContext.Provider>
  );
}

export function useSessionContext() {
  return useContext(SessionContext);
}
