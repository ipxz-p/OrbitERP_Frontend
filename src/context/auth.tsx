import React, { createContext, useContext, useEffect, useState } from "react"
import { api } from "@/lib/api-client"

interface User {
  id: string
  username: string
  email: string
}

export interface AuthState {
  isAuthenticated: boolean
  user: User | null
  login: (username: string, password: string) => Promise<void>
  logout: () => void
}

const AuthContext = createContext<AuthState | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("accessToken")
    if (token) {
      api
        .get("auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((res: any) => {
          console.log(res)
          setUser(res)
          setIsAuthenticated(true)
          localStorage.setItem("accessToken", res.accessToken)
        })
        .catch(() => {
          localStorage.removeItem("accessToken")
        })
        .finally(() => {
          setIsLoading(false)
        })
    } else {
      setIsLoading(false)
    }
  }, [])

  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  const login = async (username: string, password: string) => {
    api
      .post("auth/login", {
        username,
        password,
        expiresInMins: 1,
      })
      .then((res: any) => {
        console.log(res)
        setUser(res)
        setIsAuthenticated(true)
        localStorage.setItem("accessToken", res.accessToken)
      })
  }

  const logout = () => {
    setUser(null)
    setIsAuthenticated(false)
    localStorage.removeItem("accessToken")
  }

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
