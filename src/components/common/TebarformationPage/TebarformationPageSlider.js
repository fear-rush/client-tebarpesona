import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { useLocation } from "react-router-dom";

import useWindowDimensions from "../../../hooks/useWindowDimensions";

import { sliderData } from "../TebarformationData";

import "./tebarformationpagesliderdot.css";

function TebarformationPageSlider() {
  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <FaArrowRight size={28} />
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <FaArrowLeft size={28} />
      </div>
    );
  };
  const location = useLocation();
  const { height, width } = useWindowDimensions(location);
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: width > 480 ? true : false,
    infinite: true,
    lazyLoad: true,
    speed: 600,
    slidesToShow: width <= 480 ? 1 : width > 768 && width <= 1700 ? 3 : 4,
    swipeToSlide: width <= 480 ? true : false,
    centerMode: true,
    centerPadding: 0,
    nextArrow: width <= 480 ? null : <NextArrow />,
    prevArrow: width <= 480 ? null : <PrevArrow />,
    arrows: width <= 480 ? false : true,
    autoplay: width <= 480 ? true : false,
    autoplaySpeed: 7000,
    slidesToScroll: 1,
    beforeChange: (current, next) => setImageIndex(next),
    customPaging: (i) => <div className="dot"></div>,
    dotsClass: "slick-dots slick-tebarformationpage",
  };

  return (
    <SliderContainer>
      <div className="information-title">
        <h1>TEBARFORMATION</h1>
      </div>
      <ImageSlider>
        <Slider {...settings}>
          {sliderData.map((data, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <StyledLink to={`/tebarformation/${data.path}`}>
                <img src={data.image} alt="" />
                <h2>{data.title}</h2>
              </StyledLink>
            </div>
          ))}
        </Slider>
      </ImageSlider>
    </SliderContainer>
  );
}

export default TebarformationPageSlider;

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: 0;
  border: 0;
`;

const SliderContainer = styled.div`
  width: 100%;
  position: relative;
  z-index: 3;
  margin-bottom: 7rem;

  .information-title {
    margin-top: 4rem;
    h1 {
      letter-spacing: 0.45rem;
      font-family: "Montserrat", sans-serif;
      font-weight: 900;
      color: #000;
    }
  }

  @media screen and (max-width: 480px) {
    display: block;
    margin: 0 auto;

    .information-title {
      h1 {
        margin: 0 auto;
        text-align: center;
        font-size: 1.5rem;
        letter-spacing: 0.25rem;
        margin-bottom: 1.5rem;
      }
    }
  }
`;

const ImageSlider = styled.div`
 
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
  top: 0;
  left: -2%;
  .slide img {
    width: 360px;
    height: 180px;
    margin: 0 auto;
  }

  .slide, .active-slide {
    .link-to {
      text-decoration: none;
    }
  }

  .slide { 
    transform: scale(0.6) 
    transition: transform 300ms;
    opacity: 0.5;

    h2 {
      text-align: center;
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      font-size: 1.2rem;
      color: #000;
    }
  }

  .activeSlide {
    transform-origin: center;
    opacity: 1;
  }

  .arrow {
    position: absolute;
    cursor: pointer;
    z-index: 10;
    color: #000;
    background-color: #FFF;
    border-radius: 50%;
    padding: 0.35rem;
  }

  .arrow svg {
    transition: color 300ms;
  }

  .arrow svg:hover {
    color: #68edff;
  }

  .next {
    right: 92%;
    top: 110%;
  }

  .prev {
    left: 2%;
    top: 110%;
  }

  @media screen and (max-width: 480px) {
    left: 0;

    .slide {
      h2 {
        margin-left: 0;
      }

      img {
        width: 320px;
      }
    }

  }

  @media (min-width: 768px) and (max-width: 1500px) {
    .next {
      right: 90%;
    }

    .prev {
      left: 3%;
    }
  }

`;
