import "./MenuSide.css"
import { useNavigate } from "react-router-dom"
import StageList from "../../cards/stages/StageList"
import StyledText from "../../common/text/StyledText"
import textImage from "../../../assets/poker-chips/poker-chip-orange.png"
import useCategoriesContext from "../../../hooks/useCategoriesContext"

function MenuSide({ menuVisible, updateVisibility }) {
  const { categories } = useCategoriesContext()
  const handleButtonClick = () => updateVisibility(false)
  const navigation = useNavigate()

  const handleAbout = () => {
    return navigation("/about")
  }

  const handleContact = () => {
    const externalURL = "https://wa.me/5511995392435"
    window.open(externalURL, "_blank")
  }

  return (
    <div className={`menuSide ${menuVisible ? "visible" : "hidden"}`}>
      <button className="closeButton" onClick={handleButtonClick}>
        X
      </button>
      <ul className="menuSideItems">
        <li onClick={handleAbout} className="menuItem">
          Sobre
        </li>
        <li onClick={handleContact} className="menuItem">
          Contato
        </li>
        <div className="menuStageContainer">
          <StyledText
            image={textImage}
            text="Etapas"
            textStyle={"menuText"}
          ></StyledText>
          <StageList stages={categories}></StageList>
        </div>
      </ul>
    </div>
  )
}

export default MenuSide
