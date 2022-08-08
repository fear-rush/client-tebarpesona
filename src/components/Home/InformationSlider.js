import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import { sliderData } from "../common/TebarformationData";

import "./informationdot.css";

function InformationSlider() {
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
  const location = useLocation()
  const { height, width } = useWindowDimensions(location);
  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: width > 480 ? true : false,
    infinite: true,
    lazyLoad: true,
    speed: 600,
    slidesToShow: width <= 480 ? 1 : width > 768 && width <= 1500 ? 3 : 4  ,
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
    dotsClass: "slick-dots slick-info",
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

export default InformationSlider;

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
    h1 {
      margin: 1rem 0 1rem 3rem;
      letter-spacing: 0.45rem;
      font-family: "Montserrat", sans-serif;
      font-weight: 900;
      color: #fff;
    }
  }

  @media screen and (max-width: 480px) {
    display: block;
    margin: 6rem auto;

    .information-title {
      h1 {
        margin: 0 auto;
        text-align: center;
        font-size: 1.5rem;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 1500px) {
    .information-title {
      margin-left: 2rem;
    }
  }

`;

const ImageSlider = styled.div`
  padding: 2rem;
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 3;
  .slide img {
    width: 360px;
    height: 180px;
    margin: 0 auto;
  }

  .slide, .slide-active {
    a {
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
      color: #FFF;
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
    right: 93%;
    top: 110%;
  }

  .prev {
    left: 0%;
    top: 110%;
  }

  @media screen and (max-width: 480px) {
    width: 100%;

    .slide img {
    width: 320px;
    height: 180px;
    margin: 0 auto;
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
