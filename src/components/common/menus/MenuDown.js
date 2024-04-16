import { useState } from "react"
import "./MenuDown.css"

function MenuDown({ categories, onCategoryChange, currentCategory }) {
  const [menuVisible, setMenuVisible] = useState(false)

  const handleCategoryClick = (category) => {
    setMenuVisible(false)
    if (onCategoryChange) {
      onCategoryChange(category)
    }
  }

  if (!Array.isArray(categories)) {
    console.error("Categories is not an array")
    return null
  }

  return (
    <div className="menuDownContainer">
      <div
        className="menuDownHeader"
        onClick={() => setMenuVisible(!menuVisible)}
      >
        <h1>{currentCategory?.name}</h1>
        <button>▼</button>
      </div>
      <div className={`menuDownItems ${menuVisible ? "visible" : "hidden"}`}>
        {categories.map((category) => (
          <div
            key={category.id}
            className="menuDownItem"
            onClick={() => handleCategoryClick(category)}
          >
            {category.name}
          </div>
        ))}
      </div>
    </div>
  )
}

export default MenuDown
