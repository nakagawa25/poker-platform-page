import "./Stages.css"
import Container from "../../common/containers/Container"
import StageList from "./StageList"

function Stages({ stages, style, children }) {
  return (
    <Container>
      {children}
      <div className={`stageContainer ${style}`}>
        <StageList stages={stages}></StageList>
      </div>
    </Container>
  )
}

export default Stages
