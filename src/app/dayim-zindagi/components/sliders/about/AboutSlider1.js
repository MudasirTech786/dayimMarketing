"use client";
import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Navigation, Pagination } from "swiper";

export default function AboutSlider1() {
  return (
    <div className="h-[200px] w-full bg-white hidden
                    lg:block">
      <Swiper        
        slidesPerView={2}
        spaceBetween={30}
        autoplay={{
          delay: 1000,
        }}
        modules={[Autoplay]}
        className="h-full w-[100%] flex items-center justify-center"
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
        }}
      >
        <SwiperSlide className="text-second pt-10 relative text-center">            
            <p className="text-7xl font-bold">10 Floors <span className="text-xl absolute top-0">standard</span> </p>
        </SwiperSlide>
        <SwiperSlide className="text-second flex pt-10 relative text-center">            
            <p className="text-7xl font-bold">5 Floors <span className="text-xl absolute top-0">above-standard</span> </p>            
        </SwiperSlide>
        <SwiperSlide className="text-second flex pt-10 relative text-center">            
            <p className="text-7xl font-bold">34 Apartments <span className="text-xl absolute top-0">for persons with reduced mobility</span> </p>                        
        </SwiperSlide>        
      </Swiper>
    </div>
  );
}
