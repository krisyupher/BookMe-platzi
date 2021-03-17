import React from "react";
import Whirligig from "react-whirligig";
import BotonCarousel from "../../static/icons8-flecha-carousel.png";
import "./Carousel.scss";
const Carousel = ({ children, titleCategory, slideIndex }) => {
  let whirligig;
  const next = () => whirligig.next();
  const prev = () => whirligig.prev();
  return (
    <section className="carousel">
      <h2>{titleCategory}</h2>
      <div className="container-buttons">
        <button onClick={prev} className="Botton-Prev">
          <img src={BotonCarousel} alt="botton-Prev"></img>
        </button>
        <button onClick={next} className="Botton-Next">
          <img src={BotonCarousel} alt="Botton-Next"></img>
        </button>
      </div>
      <div className="carousel__container">
        <Whirligig
          visibleSlides={null}
          gutter="1em"
          preventScroll={true}
          ref={(_whirligigInstance) => {
            whirligig = _whirligigInstance;
          }}
        >
          {children}
        </Whirligig>
      </div>
    </section>
  );
};

export default Carousel;
