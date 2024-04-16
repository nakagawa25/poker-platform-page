import { useNavigate } from "react-router-dom"

import HeaderButton from "../common/buttons/HeaderButton"
import homeImage from "../../assets/button-images/home.png"
import symbolImage from "../../assets/cards-symbol/heart-symbol.png"

function HomeButton() {
  const navigation = useNavigate()

  const handleHome = () => {
    return navigation("/")
  }

  return (
    <HeaderButton
      handleClick={handleHome}
      buttomImage={homeImage}
      buttonText={"Home"}
      symbolImage={symbolImage}
    ></HeaderButton>
  )
}

export default HomeButton
