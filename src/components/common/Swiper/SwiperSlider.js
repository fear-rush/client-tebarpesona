import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./swiperstyle.css";
import { EffectFade, Navigation, Pagination } from "swiper";

const SwiperSlider = ({ highlight }) => {
  return (
    <>
      <div className="swiper-section">
        <h1 className="highlight-title">HIGHLIGHT</h1>
        <Swiper
          spaceBetween={30}
          effect={"fade"}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src={highlight[0].attributes.url} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={highlight[1].attributes.url} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={highlight[2].attributes.url} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={highlight[3].attributes.url} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default SwiperSlider;
