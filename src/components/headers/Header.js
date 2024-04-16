import "./Header.css"

import ContactButton from "../buttons/ContactButton"
import HomeButton from "../buttons/HomeButton"
import AboutButton from "../buttons/AboutButton"
import MenuButton from "../buttons/MenuButton"

import Logo from "../common/images/Logo"

function Header() {
  return (
    <div className="header">
      <Logo></Logo>
      <HomeButton></HomeButton>
      <AboutButton></AboutButton>
      <ContactButton></ContactButton>
      <MenuButton></MenuButton>
    </div>
  )
}

export default Header
