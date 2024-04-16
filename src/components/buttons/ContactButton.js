import HeaderButton from "../common/buttons/HeaderButton"
import whatsappImage from "../../assets/button-images/whatsapp.png"
import symbolImage from "../../assets/cards-symbol/diamond-symbol.png"

function ContactButton() {
  const handleContact = () => {
    const externalURL = "https://wa.me/5511995392435"
    window.open(externalURL, "_blank")
  }

  return (
    <HeaderButton
      handleClick={handleContact}
      buttomImage={whatsappImage}
      buttonText={"Contato"}
      symbolImage={symbolImage}
    ></HeaderButton>
  )
}
export default ContactButton
