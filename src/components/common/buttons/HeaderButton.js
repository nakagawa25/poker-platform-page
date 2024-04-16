import "./HeaderButton.css"

function HeaderButton({ handleClick, buttomImage, buttonText, symbolImage }) {
  return (
    <div onClick={handleClick} className="headerButton">
      <img className="symbolImage" src={symbolImage} alt="Nipe da Carta" />
      <img className="buttonImage" src={buttomImage} alt="Imagem do Botão" />
      <h1 className="buttonText">{buttonText}</h1>
    </div>
  )
}

export default HeaderButton
