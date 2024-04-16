import "./MenuButton.css"
import MenuSide from "../common/menus/MenuSide"
import React, { useState } from "react"

function MenuButton() {
  const [menuVisible, setMenuVisible] = useState(false)

  const updateVisibility = (newVisibility) => {
    setMenuVisible(newVisibility)
  }

  function openMenu() {
    setMenuVisible(true)
  }

  return (
    <div className="menuContainer">
      <button className="menuButton" onClick={openMenu}></button>
      <MenuSide menuVisible={menuVisible} updateVisibility={updateVisibility} />
    </div>
  )
}

export default MenuButton
