import "./ArrowButton.css"
import { useSwiper } from "swiper/react"

function ArrowButton({ isLeftButton }) {
  const swiper = useSwiper()

  return (
    <>
      {isLeftButton ? (
        <button
          className="arrowLeftButton"
          onClick={() => swiper.slidePrev()}
        ></button>
      ) : (
        <button
          className="arrowRightButton"
          onClick={() => swiper.slideNext()}
        ></button>
      )}
    </>
  )
}

export default ArrowButton
