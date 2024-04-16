import "./AnimatedCards.css"

function AnimatedCards({ gifFile, altMessage }) {
  return (
    <div className="animatedContainer">
      <img className="animatedImage" src={gifFile} alt={altMessage}></img>
    </div>
  )
}

export default AnimatedCards
