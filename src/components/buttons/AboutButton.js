import { useNavigate } from "react-router-dom"

import HeaderButton from "../common/buttons/HeaderButton"
import whatsappImage from "../../assets/button-images/about.png"
import symbolImage from "../../assets/cards-symbol/spades-symbol.png"

function AboutButton() {
  const navigation = useNavigate()

  const handleAbout = () => {
    return navigation("/about")
  }
  return (
    <HeaderButton
      handleClick={handleAbout}
      buttomImage={whatsappImage}
      buttonText={"Sobre"}
      symbolImage={symbolImage}
    ></HeaderButton>
  )
}
export default AboutButton
