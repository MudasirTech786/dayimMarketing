"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// import icons
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Pagination } from "swiper";
import Link from "next/link";
import Image from "next/image";

export default function AboutSlider2() {
  const [myIndex, setMyIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    if (sliderRef.current?.swiper) {
      sliderRef.current.swiper.slideTo(myIndex);
    }
  }, [myIndex]);

  function prevSlide() {
    if (myIndex > 0) setMyIndex(myIndex - 1);
  }

  function nextSlide() {
    if (myIndex < 1) setMyIndex(myIndex + 1);
  }

  return (
    <div>
      <div
        className="h-[300px] w-full mt-[-100px]
                   md:h-[500px] md:mt-0"
      >
        <Swiper
          ref={sliderRef}
          breakpoints={{
            1024: { slidesPerView: 2 },
          }}
          slidesPerView={1}
          spaceBetween={40}
          className="h-full w-full bg-transparent"
        >
          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/dsa/elevation-right-view.jpg"
                alt="Right View"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       50vw"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/dsa/elevation-side-view.JPG"
                alt="Side View"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       50vw"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative w-full h-full">
              <Image
                src="/images/dsa/elevation-left-view.jpg"
                alt="Left View"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 
                       (max-width: 1200px) 50vw, 
                       50vw"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Navigation Arrows */}
      <div className="flex md:gap-5">
        <IoIosArrowRoundBack
          className={`text-6xl cursor-pointer ${
            myIndex === 0 ? "text-gray-400" : "text-second"
          }`}
          onClick={prevSlide}
        />
        <IoIosArrowRoundForward
          className={`text-6xl cursor-pointer ${
            myIndex === 1 ? "text-gray-400" : "text-second"
          }`}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
