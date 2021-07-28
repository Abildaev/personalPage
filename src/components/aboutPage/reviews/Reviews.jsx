import React, { useState, useEffect } from 'react';
import SectionTitle from '../../sectionTitle/SectionTitle';
import Carousel from 'nuka-carousel';

const Reviews = (props) => {

  const [count, setCount] = useState(2);

  function getInfoSlider() {
    const windowWidth = window.innerWidth;
    windowWidth < 992 ? setCount(1) : setCount(2);
  }
  useEffect(() => {
    window.addEventListener("load", getInfoSlider);
    window.addEventListener("resize", getInfoSlider);
    return () => {
      window.removeEventListener("load", getInfoSlider);
      window.removeEventListener("resize", getInfoSlider);
    }

  });

  const testimonials = props.reviews.testimonials.map((element, key) =>
    <div className="about-page__testimonial" key={key}>
      <div className="about-page__testimonial-img">
        <img src={element.src} alt="#"/>
      </div>
      <div className="about-page__testimonial-content">
        <span className="icon-quote-right about-page__testimonial-quote"></span>
        <p>{element.text}</p>
      </div>
      <div className="about-page__testimonial-autor">
        <span className="about-page__testimonial-autor_name">{element.autorName}</span>
        <span className="about-page__testimonial-circle"></span>
        <span className="about-page__testimonial-autor_position">{element.position}</span>
      </div>
    </div>
  );

  return (
    <div className="about-page__testimonials">
      <SectionTitle componentTitle={props.reviews.componentTitle} />
      <Carousel slidesToShow={count} cellSpacing={30}
        renderCenterLeftControls={null}
        renderCenterRightControls={null}
        autoplay={true}
        defaultControlsConfig={{
          pagingDotsContainerClassName: "about-page__items",
          pagingDotsClassName: "about-page__dots",
          pagingDotsStyle: {
            opacity: '1',
          }
        }}
        getControlsContainerStyles={(key) => {
          switch (key) {
            case 'BottomCenter':
              return {
                marginTop: "75px",
                position: "relative",
              };
            default:
              return {
                marginTop: "75px",
                position: "relative",
              };
          }
        }}>
        {testimonials}
      </Carousel>
    </div>
  )
}

export default Reviews;