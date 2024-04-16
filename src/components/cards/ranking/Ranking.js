import Container from "../../common/containers/Container"
import Rank from "./Rank"

import "./Ranking.css"

function Ranking({ ranking, children }) {
  return (
    <Container>
      {children}
      <div className="rankingContainer">
        {ranking.map((rank) => (
          <Rank
            key={rank.id}
            position={rank.position}
            name={rank.player.name}
            score={rank.score}
          ></Rank>
        ))}
      </div>
    </Container>
  )
}

export default Ranking
