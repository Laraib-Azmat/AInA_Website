import "./Slider.css";

import Card1 from "../../assets/Images/Card1.png";
import Card2 from "../../assets/Images/Card2.png";
import Card3 from "../../assets/Images/Card3.png";
import Card4 from "../../assets/Images/Card4.png";
import Card5 from "../../assets/Images/Card5.png";
import Card6 from "../../assets/Images/Card6.png";
import Card7 from "../../assets/Images/Card7.png";
import Card8 from "../../assets/Images/Card8.png";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

export default function Slider() {
  return (
    <div className="container">
      <h1 className="heading">Emotions Gallery</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"4"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 90,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className="swiper_container"
      >
        <SwiperSlide>
          <img src={Card1} alt="Card_1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card2} alt="Card_2"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card3} alt="Card_3"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card4} alt="Card_4"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card5} alt="Card_5"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card6} alt="Card_6"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card7} alt="Card_7"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src={Card8} alt="Card_8"></img>
        </SwiperSlide>
      </Swiper>

      <div className="slider-controler">
        <div className="swiper-button-prev slider-arrow">
          <ion-icon name="arrow-back-outline"></ion-icon>
        </div>
        <div className="swiper-button-next slider-arrow">
          <ion-icon name="arrow-forward-outline"></ion-icon>
        </div>
        <div className="swiper-pagination"></div>
      </div>
    </div>
  );
}
