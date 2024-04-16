import { AuthorizationContext } from "../contexts/AuthorizationContext"
import { useContext } from "react"

export default function useAuthorizationContext() {
  const context = useContext(AuthorizationContext)

  if (context === undefined) {
    throw new Error("Não está dentro do AuthorizationContext")
  }

  return context
}
