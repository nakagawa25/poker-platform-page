import "./Stage.css"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { getStage, getCategories } from "../api/api"
import UseCategoriesContext from "../hooks/useCategoriesContext"

import Header from "../components/headers/Header"
import Slider from "../components/cards/slider/Slider"
import Ranking from "../components/cards/ranking/Ranking"
import Stages from "../components/cards/stages/Stages"
import StyledText from "../components/common/text/StyledText"

import redChip from "../assets/poker-chips/chip-stack-red.png"
import greenChip from "../assets/poker-chips/chip-stack-green.png"
import blueChip from "../assets/poker-chips/chip-stack-blue.png"

import auxImage from "../assets/logo.png"

function Stage() {
  const [sliderImages, setSliderImages] = useState([auxImage])
  const [rankingList, setRankingList] = useState([])
  const { categories, setCategories } = UseCategoriesContext()

  const { id } = useParams()

  useEffect(() => {
    getStage(id)
      .then(({ data }) => {
        setSliderImages(data.images)
        setRankingList(data.ranking)
      })
      .catch((error) => console.error("Erro ao fazer a solicitação:", error))
    getCategories()
      .then(({ data }) => setCategories(data))
      .catch((error) => console.error("Erro ao fazer a solicitação:", error))
  }, [])

  return (
    <>
      <Header />
      <main className="stageMain">
        <div className="cardsContainer">
          <Slider
            slidesPerView={2}
            sliderDirection={"vertical"}
            images={sliderImages}
            allowTouchMove={false}
            simulateTouch={false}
            sliderItemHeight={"97.5%"}
          >
            <StyledText text={"Fotos do Evento"} image={redChip}></StyledText>
          </Slider>
          <Ranking ranking={rankingList}>
            <StyledText
              text={"Ranking da Etapa"}
              image={greenChip}
            ></StyledText>
          </Ranking>
          <Stages stages={categories} style="stagePage">
            <StyledText text={"Etapas"} image={blueChip}></StyledText>
          </Stages>
        </div>
      </main>
    </>
  )
}

export default Stage
