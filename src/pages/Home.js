import "./Home.css"

import { useEffect, useState } from "react"
import { getHomeImages, getHomeRanking, getCategories } from "../api/api.js"

import Header from "../components/headers/Header"
import Slider from "../components/cards/slider/Slider"
import Ranking from "../components/cards/ranking/Ranking"
import Stages from "../components/cards/stages/Stages"
import StyledText from "../components/common/text/StyledText"
import MenuDown from "../components/common/menus/MenuDown"

import redChip from "../assets/poker-chips/chip-stack-red.png"
import greenChip from "../assets/poker-chips/chip-stack-green.png"
import blueChip from "../assets/poker-chips/chip-stack-blue.png"

import auxImage from "../assets/logo.png"
import useCategoriesContext from "../hooks/useCategoriesContext.js"

function Home() {
  const [sliderImages, setSliderImages] = useState([auxImage])
  const [rankingList, setRankingList] = useState([])
  const [selectedCategory, setSelectedCategory] = useState(null)
  const { categories, setCategories } = useCategoriesContext()

  const handleCategoryChange = (category) => {
    setSelectedCategory(category)
  }

  useEffect(() => {
    const fetchData = async () => {
      await getHomeImages()
        .then(async ({ data }) => {
          await setSliderImages(data)
        })
        .catch((error) => {
          console.error("Erro ao fazer a solicitação:", error)
        })
      await getCategories()
        .then(({ data }) => {
          setCategories(data)
          setSelectedCategory(data[0])
        })
        .catch((error) => {
          console.error("Erro ao fazer a solicitação:", error)
        })
    }
    fetchData()
  }, [])

  useEffect(() => {
    if (selectedCategory) {
      getHomeRanking(selectedCategory?.id)
        .then(({ data }) => setRankingList(data))
        .catch((error) => console.error("Erro ao fazer a solicitação:", error))
    }
  }, [selectedCategory])

  return (
    <>
      <Header />
      <main className="homeMain">
        <div className="cardsContainer">
          <Slider
            slidesPerView={1}
            sliderDirection={"horizontal"}
            sliderItemHeight={"100%"}
            allowTouchMove={true}
            simulateTouch={true}
            images={sliderImages}
          >
            <StyledText text={"Avisos"} image={redChip}></StyledText>
          </Slider>
          <Ranking ranking={rankingList}>
            <StyledText text={"Ranking"} image={greenChip}>
              <MenuDown
                categories={categories}
                currentCategory={selectedCategory}
                onCategoryChange={handleCategoryChange}
              ></MenuDown>
            </StyledText>
          </Ranking>
          <Stages stages={categories} style="stagePage">
            <StyledText text={"Etapas"} image={blueChip}></StyledText>
          </Stages>
        </div>
      </main>
    </>
  )
}

export default Home
