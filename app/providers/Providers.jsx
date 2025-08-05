"use client"
import React from 'react'
import {SessionProvider} from "next-auth/react";
import { ThemeProvider } from './ThemeContext'
const Providers = ({children}) => {
  return (
    <SessionProvider>
        <ThemeProvider value={""}>
            {children}
        </ThemeProvider>
    </SessionProvider>
  )
}

export default Providers