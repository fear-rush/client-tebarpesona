import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

import useWindowDimensions from "../hooks/useWindowDimensions";

import "./tourism.css";

import TourismSwiper from "../components/common/Swiper/TourismSwiper";
const slides = [
  {
    title: "Teluk Hol Sulamadaha",
    subtitle: "Sulamadaha",
    description: "Adventure is never far away",
    image: require("../assets/Tourism/teluk-hol-sulamadaha.png"),
    link: "/sulamadaha/teluk-hol-sulamadaha",
  },
  {
    title: "Pantai Sulamadaha",
    subtitle: "Sulamadaha",
    description: "Let your dreams come true",
    image: require("../assets/Tourism/pantai-sulamadaha.png"),
    link: "/sulamadaha/pantai-sulamadaha",
  },
  {
    title: "Pantai Jikomalamo",
    subtitle: "Takome",
    description: "Powered by nature",
    image: require("../assets/Tourism/pantai-jikomalamo.png"),
    link: "/takome/pantai-jikomalamo",
  },
  {
    title: "Danau Tolire Besar",
    subtitle: "Takome",
    description: "A piece of heaven",
    image: require("../assets/Tourism/danau-tolire-besar.png"),
    link: "/takome/danau-tolire-besar",
  },
  {
    title: "Talaga Nita",
    subtitle: "Takome",
    description: "All time classic",
    image: require("../assets/Tourism/talaga-nita.png"),
    link: "/takome/talaga-nita",
  },
  {
    title: "Tanjung Tolire",
    subtitle: "Takome",
    description: "Feel the breeze of the ocean",
    image: require("../assets/Tourism/tanjung-tolire.png"),
    link: "/takome/tanjung-tolire",
  },
];

function useTilt(active) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (!ref.current || !active) {
      return;
    }

    const state = {
      rect: undefined,
      mouseX: undefined,
      mouseY: undefined,
    };

    let el = ref.current;

    const handleMouseMove = (e) => {
      if (!el) {
        return;
      }
      if (!state.rect) {
        state.rect = el.getBoundingClientRect();
      }
      state.mouseX = e.clientX;
      state.mouseY = e.clientY;
      const px = (state.mouseX - state.rect.left) / state.rect.width;
      const py = (state.mouseY - state.rect.top) / state.rect.height;

      el.style.setProperty("--px", px);
      el.style.setProperty("--py", py);
    };

    el.addEventListener("mousemove", handleMouseMove);

    return () => {
      el.removeEventListener("mousemove", handleMouseMove);
    };
  }, [active]);

  return ref;
}

const initialState = {
  slideIndex: 0,
};

const slidesReducer = (state, event) => {
  if (event.type === "NEXT") {
    return {
      ...state,
      slideIndex: (state.slideIndex + 1) % slides.length,
    };
  }
  if (event.type === "PREV") {
    return {
      ...state,
      slideIndex:
        state.slideIndex === 0 ? slides.length - 1 : state.slideIndex - 1,
    };
  }
};

function Slide({ slide, offset }) {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className="slideBackground"
        style={{
          backgroundImage: `url(${slide.image})`,
        }}
      />
      <StyledLink to={slide.link}>
        <div
          className="slideContent"
          style={{
            backgroundImage: `url(${slide.image})`,
          }}
        >
          <div className="slideContentInner">
            <h2 className="slideTitle">{slide.title}</h2>
            <h3 className="slideSubtitle">{slide.subtitle}</h3>
            <p className="slideDescription">{slide.description}</p>
          </div>
        </div>
      </StyledLink>
    </div>
  );
}

function Tourism() {
  const [state, dispatch] = React.useReducer(slidesReducer, initialState);
  const location = useLocation();
  const { width, height } = useWindowDimensions(location);

  return (
    <>
      {width <= 760 ? (
        <TourismSwiper />
      ) : (
        <>
          <div className="slides-container">
            <div className="slides">
              <button onClick={() => dispatch({ type: "PREV" })}>‹</button>

              {[...slides, ...slides, ...slides].map((slide, i) => {
                let offset = slides.length + (state.slideIndex - i);
                return <Slide slide={slide} offset={offset} key={i} />;
              })}
              <button onClick={() => dispatch({ type: "NEXT" })}>›</button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default Tourism;

const StyledLink = styled(Link)`
  text-decoration: none;
  outline: 0;
  border: 0;
  color: #fff;
`;
