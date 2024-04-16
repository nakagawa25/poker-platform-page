import "./DataManager.css"
import React from "react"
import insertImage from "../../../assets/button-images/insert.png"

function DataManager({
  items,
  dictionary,
  dictionaryHeader,
  onInsertClick,
  onUpdateClick,
  onDeleteClick,
}) {
  return (
    <div className="managerContainer">
      <div className="managerColumn">
        {dictionaryHeader && dictionaryHeader.length > 0 ? (
          dictionaryHeader.map((header) => (
            <div key={header} className="managerColumn">
              {header}
            </div>
          ))
        ) : (
          <div>Header</div>
        )}
        <div className="headerPositionFixer">|</div>
      </div>
      <div className="managerColumn"></div>
      {items.length > 0 ? (
        items.map((item) => (
          <div key={item.id} className="managerRow">
            {dictionary.map((column) => (
              <div key={column} className="managerColumn">
                {typeof item[column] === "boolean"
                  ? item[column]
                    ? "Ativo"
                    : "Inativo"
                  : item[column]}
              </div>
            ))}
            <div className="managerColumn buttonContainer">
              <button
                className="update"
                onClick={() => onUpdateClick(item)}
              ></button>
            </div>
            <div className="managerColumn buttonContainer">
              <button
                className="delete"
                onClick={() => onDeleteClick(item)}
              ></button>
            </div>
          </div>
        ))
      ) : (
        <div>Loading...</div>
      )}
      <div className="managerColumn ">
        <button className="insert" onClick={() => onInsertClick()}>
          Adicionar novo item
        </button>
        <img src={insertImage}></img>
      </div>
    </div>
  )
}

export default DataManager
