import "./Logo.css"
import logo from "../../../assets/logo.png"

function Logo() {
  return (
    <div className="logoContainer">
      <img className="logo" src={logo} alt="Logo do Sexta Hold'em" />
    </div>
  )
}

export default Logo
