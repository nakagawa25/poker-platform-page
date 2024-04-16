import { useState } from "react"
import { AuthorizationContext } from "./AuthorizationContext"

export default function AuthorizationProvider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [token, setToken] = useState("")

  return (
    <AuthorizationContext.Provider
      value={{ isAuthenticated, setIsAuthenticated, token, setToken }}
    >
      {children}
    </AuthorizationContext.Provider>
  )
}
