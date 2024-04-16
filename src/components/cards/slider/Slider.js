import { Swiper, SwiperSlide } from "swiper/react"
import { register } from "swiper/element/bundle"

import ArrowButton from "../../buttons/ArrowButton"
import Container from "../../common/containers/Container"

import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/autoplay"

import "./Slider.css"

register()

function Slider({
  slidesPerView,
  sliderDirection,
  sliderItemHeight,
  allowTouchMove,
  simulateTouch,
  images,
  children,
}) {
  const itemStyle = {
    "--sliderItemHeight": sliderItemHeight,
  }

  return (
    <Container>
      {children}
      <div className="sliderWrapper">
        <Swiper
          slidesPerView={slidesPerView}
          direction={sliderDirection}
          loop="true"
          autoplay={true}
          allowTouchMove={allowTouchMove}
          simulateTouch={simulateTouch}
        >
          {images.map((image) => (
            <SwiperSlide key={image.id}>
              <img
                src={image.url}
                alt="Imagem do Slider"
                className="sliderItem"
                style={itemStyle}
              />
            </SwiperSlide>
          ))}
          <ArrowButton isLeftButton={true}></ArrowButton>
          <ArrowButton isLeftButton={false}></ArrowButton>
        </Swiper>
      </div>
    </Container>
  )
}

export default Slider
