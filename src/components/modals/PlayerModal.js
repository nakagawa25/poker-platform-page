import ModalButton from "../common/buttons/ModalButton"
import "./PlayerModal.css"
import { useState, useEffect } from "react"
import { updatePlayer, createPlayer } from "../../api/api"

function PlayerModal({ setIsOpen, item }) {
  const [playerData, setPlayerData] = useState({
    name: "",
    isActive: true,
  })

  useEffect(() => {
    if (item) {
      setPlayerData(item)
    }
  }, [item])

  const handleInputChange = (event) => {
    const { name, value } = event.target
    setPlayerData({
      ...playerData,
      [name]: name === "isActive" ? value === "true" : value,
    })
  }

  const handlePlayerSubmit = async () => {
    if (item) {
      await updatePlayer(playerData)
        .then((response) => {
          console.log("Jogador atualizado com sucesso. Response: " + response)
        })
        .catch((error) => {
          console.log("Erro: " + error.data)
        })
    } else {
      await createPlayer(playerData)
        .then((response) => {
          console.log("Jogador criado com sucesso. Response: " + response)
        })
        .catch((error) => {
          console.log("Erro: " + error.data)
        })
    }
    setIsOpen(false)
  }

  return (
    <div className="playerModal">
      <div className="insertSection">
        <h2>Nome do Jogador</h2>
        <input
          type="text"
          name="name"
          value={playerData.name}
          onChange={handleInputChange}
        ></input>
      </div>
      <div className="insertSection">
        <h2>Status do Jogador</h2>
        <div className="radioButtonSelection">
          <input
            className="playerRadioButton"
            type="radio"
            name="isActive"
            value={true}
            checked={playerData.isActive === true}
            onChange={handleInputChange}
          ></input>
          <h3>Ativo</h3>
        </div>
        <div className="radioButtonSelection">
          <input
            className="playerRadioButton"
            type="radio"
            name="isActive"
            value={false}
            checked={playerData.isActive === false}
            onChange={handleInputChange}
          ></input>
          <h3>Inativo</h3>
        </div>
      </div>
      <div>
        <ModalButton
          onClick={handlePlayerSubmit}
          height={"3rem"}
          width={"10rem"}
        >
          {item ? "Atualizar" : "Cadastrar"}
        </ModalButton>
      </div>
    </div>
  )
}

export default PlayerModal
