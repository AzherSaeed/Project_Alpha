import React from "react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider_card from "./slider_card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function MySwiper() {
  return (
    <Swiper className="mb-[199px]"
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={10}
      // Add breakpoints for responsive design
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
        },
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true} // Enable looping
    >
      <SwiperSlide className="my-swiper-slide p-8">
        <Slider_card />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide p-8">
        <Slider_card />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide p-8">
        <Slider_card />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide p-8">
        <Slider_card />
      </SwiperSlide>
    </Swiper>
  );
}
