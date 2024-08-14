import React from "react";
import { Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Slider_card from "./slider_card";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

export default function MySwiper() {
  return (
    <Swiper
      className="mb-[199px]"
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={48} // Set default space between slides to 48px
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
          spaceBetween: 48, // Space between slides at 640px width
        },
        // when window width is >= 768px
        768: {
          slidesPerView: 2,
          spaceBetween: 48, // Space between slides at 768px width
        },
      }}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      loop={true} // Enable looping
    >
      <SwiperSlide className="my-swiper-slide p-7">
        <Slider_card />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide p-7">
        <Slider_card />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide p-7">
        <Slider_card />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide p-7">
        <Slider_card />
      </SwiperSlide>
    </Swiper>
  );
}
