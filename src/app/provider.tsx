import React from "react"
import { AuthProvider } from "@/context/auth"

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <>
      <AuthProvider>{children}</AuthProvider>
    </>
  )
}
