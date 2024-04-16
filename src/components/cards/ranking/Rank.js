import "./Rank.css"

function Rank({ position, name, score }) {
  return (
    <div className="rankContainer">
      <div className="rankPosition">
        <p>{position}°</p>
      </div>
      <div className="rankName">
        <p>{name}</p>
      </div>
      <div className="rankScore">
        <p>
          <strong>{score}</strong>
        </p>
      </div>
    </div>
  )
}

export default Rank
