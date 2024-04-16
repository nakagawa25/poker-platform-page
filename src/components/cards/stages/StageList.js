import React, { useState } from "react"
import "./StageList.css"

import pokerTableImage from "../../../assets/button-images/poker-table.png"
import image from "../../../assets/poker-chips/poker-chip-blue.png"

function StageList({ stages }) {
  const [stageVisibility, setStageVisibility] = useState({})

  const toggleStageListVisibility = (year) => {
    setStageVisibility((prevState) => ({
      ...prevState,
      [year]: !prevState[year],
    }))
  }

  return (
    <div className="stageListContainer">
      {stages && stages.length > 0 ? (
        stages.map((category) => (
          <div key={category.id} className="stageYear">
            <div className="stageHeader">
              <img
                className="stageImageYear"
                src={pokerTableImage}
                alt="Mesa de poker"
              ></img>
              <h1>{category.name}</h1>
              <button onClick={() => toggleStageListVisibility(category.id)}>
                {stageVisibility[category.id] ? "▲" : "▼"}
              </button>
            </div>
            <div
              className={`stageList ${
                stageVisibility[category.id] ? "visible" : "hidden"
              }`}
            >
              {category.stages.length > 0 ? (
                <ul>
                  {category.stages.map((stage) => (
                    <li key={stage.id}>
                      <img src={image} alt="Poker Chip"></img>
                      <a href={"/stage/" + stage.id}>{stage.name}</a>
                      <img src={image} alt="Poker Chip"></img>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No stages available for this category.</p>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No categories available.</p>
      )}
    </div>
  )
}

export default StageList
