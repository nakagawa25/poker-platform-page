import "./ImageModal.css"
import { updateImage, createImage } from "../../api/api"
import ModalButton from "../common/buttons/ModalButton"
import { useState, useEffect } from "react"

function ImageModal({ setIsOpen, item }) {
  const [imageData, setImageData] = useState({
    url: "",
  })

  useEffect(() => {
    if (item) {
      setImageData(item)
    }
  }, [item])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setImageData({
      ...imageData,
      [name]: value,
    })
  }

  const handleCategorySubmit = async () => {
    if (item) {
      await updateImage(imageData)
        .then((response) => {
          console.log("Imagem atualizada com sucesso. Response: " + response)
        })
        .catch((error) => {
          console.log("Erro: " + error.data)
        })
    } else {
      await createImage(imageData)
        .then((response) => {
          console.log("Image criada com sucesso. Response: " + response)
        })
        .catch((error) => {
          console.log("Erro: " + error.data)
        })
    }
    setIsOpen(false)
  }

  return (
    <div className="imageModal">
      <div className="insertSection">
        <h2>URL da imagem</h2>
        <input
          className="imageInput"
          type="text"
          name="url"
          value={imageData.url}
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

export default ImageModal
