import "./CategoryModal.css"
import { useState, useEffect } from "react"
import { createCategory, updateCategory } from "../../api/api.js"
import ModalButton from "../common/buttons/ModalButton"

function CategoryModal({ setIsOpen, item }) {
  const [categoryData, setCategoryData] = useState({
    name: "",
    index: 0,
  })

  useEffect(() => {
    if (item) {
      setCategoryData(item)
    }
  }, [item])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setCategoryData({
      ...categoryData,
      [name]: name === "index" ? parseInt(value, 10) : value,
    })
  }

  const handleCategorySubmit = async () => {
    if (item) {
      await updateCategory(categoryData)
        .then((response) => {
          console.log("Categoria atualizada com sucesso. Response: " + response)
        })
        .catch((error) => {
          console.log("Erro: " + error.data)
        })
    } else {
      await createCategory(categoryData)
        .then((response) => {
          console.log("Categoria criada com sucesso. Response: " + response)
        })
        .catch((error) => {
          console.log("Erro: " + error.data)
        })
    }
    setIsOpen(false)
  }

  return (
    <div className="categoryModal">
      <div className="insertSection">
        <h2>Ano da Categoria</h2>
        <input
          type="text"
          name="name"
          value={categoryData.name}
          onChange={handleInputChange}
        />
      </div>
      <div className="insertSection">
        <h2>Posição de exibição da Categoria</h2>
        <input
          type="number"
          name="index"
          value={categoryData.index}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <ModalButton
          onClick={handleCategorySubmit}
          height={"3rem"}
          width={"10rem"}
        >
          {item ? "Atualizar" : "Cadastrar"}
        </ModalButton>
      </div>
    </div>
  )
}

export default CategoryModal
