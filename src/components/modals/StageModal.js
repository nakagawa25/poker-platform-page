import "./StageModal.css"
import { useState, useEffect } from "react"
import ModalButton from "../common/buttons/ModalButton.js"
import {
  getCategories,
  getPlayers,
  createStage,
  updateStage,
} from "../../api/api.js"

function StageModal({ setIsOpen, item }) {
  const [stageData, setStageData] = useState({
    categoryId: 0,
    name: "",
    images: [],
    ranking: [],
  })
  const [allCategories, setAllCategories] = useState([])
  const [categorySelection, setCategorySelection] = useState({})
  const [newImage, setNewImage] = useState({
    url: "",
  })
  const [allPlayers, setAllPlayers] = useState([])
  const [playerSelection, setPlayerSelection] = useState({})
  const [newRank, setNewRank] = useState({
    score: 0,
    player: { id: 0, name: "" },
  })

  useEffect(() => {
    const fetchData = async () => {
      if (item) {
        await setStageData(item)
      }
    }
    fetchData()
    loadData()
  }, [item])

  const loadData = async () => {
    try {
      const categoryResponse = await getCategories()
      setAllCategories(categoryResponse.data)
      if (item) {
        const selectedCategory = categoryResponse.data.find(
          (category) => category.id == item.categoryId
        )
        setCategorySelection(selectedCategory)
      } else if (categoryResponse.data.length > 0) {
        setCategorySelection(categoryResponse.data[0])
      }
      const playerResponse = await getPlayers()
      setAllPlayers(playerResponse.data)
      if (playerResponse.data.length > 0) {
        setPlayerSelection(playerResponse.data[0])
      }
    } catch (error) {
      console.error("Erro ao buscar os dados:", error)
    }
  }

  // Stage
  const handleStageNameChange = (event) => {
    const { name, value } = event.target
    setStageData({ ...stageData, [name]: value })
  }

  // Category
  const handleCategoryChange = (event) => {
    const selectedCategoryId = +event.target.value
    const selectedCategory = allCategories.find(
      (category) => category.id === selectedCategoryId
    )
    setCategorySelection(selectedCategory)
  }

  const setCategoryToStageData = () => {
    if (categorySelection) {
      const stageWithCategorySelected = {
        ...stageData,
        categoryId: categorySelection.id,
      }
      setStageData(stageWithCategorySelected)

      return stageWithCategorySelected
    }
  }

  // Images
  const handleInputImage = (event) => {
    const { name, value } = event.target
    setNewImage({ ...newImage, [name]: value })
  }

  const addImageToStageData = () => {
    if (newImage.url.trim() !== "") {
      setStageData((prevData) => ({
        ...prevData,
        images: [...prevData.images, newImage],
      }))
      setNewImage({ url: "" })
    }
  }

  const deleteImageFromStageData = (imageId) => {
    setStageData((prevData) => {
      const updatedImages = prevData.images.filter(
        (image) => image.id !== imageId
      )
      return { ...prevData, images: updatedImages }
    })
  }

  // Ranking
  const handleInputRanking = (event) => {
    const { name, value } = event.target
    setNewRank({ ...newRank.score, [name]: parseInt(value, 10) })
  }

  const handlePlayerChange = (event) => {
    const selectedPlayerId = +event.target.value
    const selectedPlayer = allPlayers.find(
      (player) => player.id === selectedPlayerId
    )
    setPlayerSelection(selectedPlayer)
  }

  const isPlayerAlreadyInStage = (player) => {
    if (player) {
      const playerFound = stageData.ranking.some(
        (rank) => rank.playerId === player.id
      )

      if (playerFound) {
        return true
      }
    }

    return false
  }

  const addRankingToStageData = () => {
    if (newRank.score !== 0) {
      if (isPlayerAlreadyInStage(playerSelection)) {
        alert("Esse jogador já está no ranking.")
        return
      }
      newRank.playerId = playerSelection.id
      newRank.player = playerSelection
      setStageData((prevData) => ({
        ...prevData,
        ranking: [...prevData.ranking, newRank],
      }))
      setNewRank({ score: 0, playerId: 0, player: { id: 0, name: "" } })
    } else {
      alert("A Pontuação deve ser maior que 0")
    }
  }

  const deleteRankFromStageData = (rankToDelete) => {
    setStageData((prevData) => {
      const updatedRanking = prevData.ranking.filter(
        (rank) => rank.player.id !== rankToDelete.player.id
      )
      return { ...prevData, ranking: updatedRanking }
    })
  }

  // Submit
  const handleStageSubmit = async () => {
    const stageWithCategorySelected = setCategoryToStageData()
    try {
      if (item) {
        // Update
        await updateStage(stageWithCategorySelected)
      } else {
        // Insert
        await createStage(stageWithCategorySelected)
      }
      setIsOpen(false)
    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="stageModal">
      <div className="stageInput">
        <div className="inputDiv">
          <h2>Nome da Etapa</h2>
          <input
            type="text"
            name="name"
            value={stageData.name}
            onChange={handleStageNameChange}
          ></input>
        </div>
        <div className="inputDiv">
          <h2>Ano da Etapa</h2>
          <select
            value={categorySelection.id}
            onChange={handleCategoryChange}
            className="categorySelect"
          >
            {allCategories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="imageInput">
        <div className="stageHeader">
          <h2>Imagens da Etapa</h2>
        </div>
        <div className="imageHeader">
          <div className="imageHeaderItem">
            <h2>URL da Imagem</h2>
          </div>
        </div>
        {stageData.images && stageData.images.length > 0 ? (
          stageData.images.map((image) => (
            <div key={image.id} className="row">
              <h3 className="imageUrl">{image.url}</h3>
              {/* <input type="text" value={image.url}></input> */}
              <button
                className="removeButton"
                onClick={() => deleteImageFromStageData(image.id)}
              >
                X
              </button>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
        <div className="row">
          <input
            type="text"
            name="url"
            className="insertImage"
            value={newImage.url}
            onChange={handleInputImage}
          ></input>
          <button
            className="insertButton"
            onClick={() => addImageToStageData()}
          >
            +
          </button>
        </div>
      </div>
      <div className="rankingInput">
        <div className="stageHeader">
          <h2>Ranking da Etapa</h2>
        </div>
        <div className="rankingHeader">
          <div className="rankingHeaderItem">
            <h2>Pontuação</h2>
          </div>
          <div className="rankingHeaderItem">
            <h2>Jogador</h2>
          </div>
        </div>
        {stageData.ranking && stageData.ranking.length > 0 ? (
          stageData.ranking.map((rank) => (
            <div key={rank.id} className="row">
              <h2 className="stageRank">{rank.score}</h2>
              <h3 className="stageRank">{rank.player.name}</h3>
              <button
                className="removeButton"
                onClick={() => deleteRankFromStageData(rank)}
              >
                X
              </button>
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
        <div className="row">
          <input
            type="number"
            name="score"
            className="rankInsert"
            value={newRank.score}
            onChange={handleInputRanking}
          ></input>
          <select
            value={playerSelection.id}
            onChange={handlePlayerChange}
            className="rankInsert"
          >
            {allPlayers.map((player) => (
              <option key={player.id} value={player.id}>
                {player.name}
              </option>
            ))}
          </select>
          <button
            className="insertButton"
            onClick={() => addRankingToStageData()}
          >
            +
          </button>
        </div>
      </div>
      <div className="buttonDiv">
        <ModalButton
          onClick={handleStageSubmit}
          height={"3rem"}
          width={"10rem"}
        >
          {item ? "Atualizar" : "Cadastrar"}
        </ModalButton>
      </div>
    </div>
  )
}

export default StageModal
