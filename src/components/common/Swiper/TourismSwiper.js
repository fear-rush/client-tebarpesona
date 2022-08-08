import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./tourismswiperstyle.css";

import { Parallax, Pagination, Navigation } from "swiper";

const slides = [
  {
    title: "Teluk Hol Sulamadaha",
    subtitle: "Sulamadaha",
    description: "Adventure is never far away",
    image: require("../../../assets/Tourism/teluk-hol-sulamadaha.png"),
    link: "/sulamadaha/teluk-hol-sulamadaha",
  },
  {
    title: "Pantai Sulamadaha",
    subtitle: "Sulamadaha",
    description: "Let your dreams come true",
    image: require("../../../assets/Tourism/pantai-sulamadaha.png"),
    link: "/sulamadaha/pantai-sulamadaha",
  },
  {
    title: "Pantai Jikomalamo",
    subtitle: "Takome",
    description: "Powered by nature",
    image: require("../../../assets/Tourism/pantai-jikomalamo.png"),
    link: "/takome/pantai-jikomalamo",
  },
  {
    title: "Danau Tolire Besar",
    subtitle: "Takome",
    description: "A piece of heaven",
    image: require("../../../assets/Tourism/danau-tolire-besar.png"),
    link: "/takome/danau-tolire-besar",
  },
  {
    title: "Talaga Nita",
    subtitle: "Takome",
    description: "All time classic",
    image: require("../../../assets/Tourism/talaga-nita.png"),
    link: "/takome/talaga-nita",
  },
  {
    title: "Tanjung Tolire",
    subtitle: "Takome",
    description: "Feel the breeze of the ocean",
    image: require("../../../assets/Tourism/tanjung-tolire.png"),
    link: "/takome/tanjung-tolire",
  },
];

const TourismSwiper = () => {
  return (
    <>
      <div className="swiper-section">
        <Swiper
          style={{
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation]}
          className="mySwiper"
        >
          {slides.map((data, index) => (
            <SwiperSlide key={index}>
              <StyledLink to={`${data.link}`}>
                <div
                  slot="container-start"
                  className="parallax-bg"
                  style={{
                    "background-image": `url(${data.image})`,
                  }}
                  data-swiper-parallax="-23%"
                ></div>
                <div className="title" data-swiper-parallax="-300">
                  {data.title}
                </div>
                <div className="subtitle" data-swiper-parallax="-200">
                  {data.subtitle}
                </div>
                <div className="text" data-swiper-parallax="-100">
                  <p>{data.description}</p>
                </div>
              </StyledLink>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default TourismSwiper;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #fff;
  outline: 0;
  border: 0;
`;
