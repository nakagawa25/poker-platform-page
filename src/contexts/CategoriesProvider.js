import { useState } from "react"
import { CategoriesContext } from "./CategoriesContext"

export default function CategoriesProvider({ children }) {
  const [categories, setCategories] = useState({})

  return (
    <CategoriesContext.Provider value={{ categories, setCategories }}>
      {children}
    </CategoriesContext.Provider>
  )
}
