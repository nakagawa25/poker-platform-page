import "./StyledText.css"

function StyledText({ text, image, textStyle, children }) {
  return (
    <div className="outsideStyledContainer">
      <div className="styledTextContainer">
        <img
          className="styledImage"
          src={image}
          alt="Icone de Texto personalizado"
        ></img>
        <h1 className={`styledText ${textStyle}`}>{text}</h1>
        {children}
        <img
          className="styledImage"
          src={image}
          alt="Icone de Texto personalizado"
        ></img>
      </div>
    </div>
  )
}

export default StyledText
