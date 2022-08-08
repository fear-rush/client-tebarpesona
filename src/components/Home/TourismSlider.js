import { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import useWindowDimensions from "../../hooks/useWindowDimensions";

import "./tourismdot.css";


const slides = [
  {
    title: "Teluk Hol Sulamadaha",
    subtitle: "Sulamadaha",
    description: "Adventure is never far away",
    image: require("../../assets/Tourism/teluk-hol-sulamadaha.png"),
    link: "/sulamadaha/teluk-hol-sulamadaha",
  },
  {
    title: "Pantai Sulamadaha",
    subtitle: "Sulamadaha",
    description: "Let your dreams come true",
    image: require("../../assets/Tourism/pantai-sulamadaha.png"),
    link: "/sulamadaha/pantai-sulamadaha",
  },
  {
    title: "Pantai Jikomalamo",
    subtitle: "Takome",
    description: "A piece of heaven",
    image: require("../../assets/Tourism/pantai-jikomalamo.png"),
    link: "/takome/pantai-jikomalamo",
  },
  {
    title: "Danau Tolire Besar",
    subtitle: "Takome",
    description: "A piece of heaven",
    image: require("../../assets/Tourism/danau-tolire-besar.png"),
    link: "/takome/danau-tolire-besar",
  },
  {
    title: "Talaga Nita",
    subtitle: "Takome",
    description: "A piece of heaven",
    image: require("../../assets/Tourism/talaga-nita.png"),
    link: "/takome/talaga-nita",
  },
  {
    title: "Tanjung Tolire",
    subtitle: "Takome",
    description: "Feel the breeze of the ocean",
    image: require("../../assets/Tourism/tanjung-tolire.png"),
    link: "/takome/tanjung-tolire",
  },
];

function TourismSlider() {
  const location = useLocation();
  const { height, width } = useWindowDimensions(location);

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

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    dots: width > 480 ? true : false,
    infinite: true,
    lazyLoad: true,
    speed: 300,
    slidesToShow: width <= 758 ? 3 : width > 768 && width <= 1600 ? 3 : width > 481 && width < 765 ? 2 : 5,
    centerMode: true,
    centerPadding: 0,
    nextArrow: width <= 480 ? null : <NextArrow />,
    prevArrow: width <= 480 ? null : <PrevArrow />,
    arrows: width <= 780 ? false : true,
    beforeChange: (current, next) => setImageIndex(next),
    customPaging: (i) => <div className="dot"></div>,
    dotsClass: "slick-dots slick-thumb",
  };

  return (
    <SliderContainer>
      <div className="tourism-title">
        <h1>TOURISM</h1>
      </div>
      <ImageSlider>
        <Slider {...settings}>
          {slides.map((data, idx) => (
            <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
              <StyledLink to={data.link}>
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

export default TourismSlider;

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: 0;
  border: 0;
`;

const SliderContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 5rem;
  position: relative;
  z-index: 3;

  .tourism-title {
    width: 25%;
    margin-bottom: 6rem;
    h1 {
      margin: 1rem;
      text-align: center;
      letter-spacing: 0.45rem;
      font-family: "Montserrat", sans-serif;
      font-weight: 900;
      color: #fff;
    }
  }

  @media screen and (max-width: 758px) {
    display: block;
    margin-top: 6rem;

    .tourism-title {
      width: 100%;
      margin: 0 auto;
    }
  }
`;

const ImageSlider = styled.div`
  width: 75%;
  margin-top: 4rem;
  height: 600px;

  .slide img {
    width: 300px;
    height: 400px;
    margin: 0 auto;
  }

  .slide {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transform: scale(0.6);
    transition: transform 300ms;
    opacity: 0.5;

    h2 {
      font-family: "Roboto", sans-serif;
      font-weight: 500;
      color: #fff;
    }
  }

  .activeSlide {
    transform: scale(1);
    opacity: 1;
  }

  .arrow {
    position: absolute;
    cursor: pointer;
    z-index: 10;
    color: #000;
    background-color: #fff;
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
    right: 88%;
    top: 98%;
  }

  .prev {
    left: 4%;
    top: 98%;
  }

  @media (min-width: 780px) and (max-width: 1700px) {

    .slide {
      h2 {
        text-align: center;
      }
    }

    .next {
      right: 85%;
    }

    .prev {
      left: 6%;
    }
  }

  @media screen and (max-width: 758px) {
    width: 100%;
    margin: 0 auto;
    position: relative;
    text-align: center;
    left: -2%;
    height: 300px;

    .slide {
      transform: scale(0.3);

      h2 {
        width: 200px;
        text-align: center;
      }

    }

    .activeSlide {
      transform: scale(0.8);
      /* transform: translate(-15.5%); */
      position: relative;
      left: -13%;
    }

    .slide img {
      width: 200px;
      height: 300px;
    }
  }
`;
