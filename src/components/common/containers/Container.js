import "./Container.css"
import AnimatedCards from "../animations/AnimatedCards.js"
import image from "../../../assets/animations/cards-opening.gif"

function Container({ children }) {
  return (
    <div className="container">
      <AnimatedCards gifFile={image} altMessage={"Animação"}></AnimatedCards>
      {children}
    </div>
  )
}

export default Container
