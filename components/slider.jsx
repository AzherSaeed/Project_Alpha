import React from 'react';
import { Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

export default function MySwiper() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Pagination, A11y, Autoplay]}
      spaceBetween={10}
      slidesPerView={2}
      pagination={{ clickable: true }}
      autoplay={{
        delay: 1500, 
        disableOnInteraction: false 
      }}
      loop={true} // Enable looping
      onSwiper={(swiper) => console.log(swiper)}
      className="my-swiper-container" // Tailwind CSS class for custom styles
    >
      <SwiperSlide className="my-swiper-slide">
        <img src="/images/Feedback.svg" alt="" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide">
        <img src="/images/Feedback.svg" alt="" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide">
        <img src="/images/Feedback.svg" alt="" className="w-full h-auto" />
      </SwiperSlide>
      <SwiperSlide className="my-swiper-slide">
        <img src="/images/Feedback.svg" alt="" className="w-full h-auto" />
      </SwiperSlide>
    </Swiper>
  );
}
