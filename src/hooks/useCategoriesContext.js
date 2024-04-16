import { CategoriesContext } from "../contexts/CategoriesContext"
import { useContext } from "react"

export default function useCategoriesContext() {
  const context = useContext(CategoriesContext)

  if (context === undefined) {
    throw new Error("Não está dentro do CategoriesContext")
  }

  return context
}
