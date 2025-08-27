"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import icons
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination } from "swiper";
import Link from "next/link";

export default function HomeSlider4() {
  const [myIndex, setMyIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.swiper.slideTo(myIndex);
  }, [myIndex]);

  function prevSlide() {
    if (myIndex > 0) {
      setMyIndex(myIndex - 1);
    }
  }

  function nextSlide() {
    if (myIndex < 2) {
      setMyIndex(myIndex + 1);
    }
  }

  return (
    <div>
      <div className="h-[500px] w-[100%]">
        <Swiper
          ref={sliderRef}
          breakpoints={{
            1024: { slidesPerView: 1.4 },
          }}
          slidesPerView={1}
          spaceBetween={40}
          className="h-full w-full bg-transparent"
        >
          <SwiperSlide>
            <div className="w-[100%] h-full">
              <img
                src="/images/dsa/elevation-right-view.jpg"
                alt=""
                className="w-[100%] h-[500px] object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%]">
              <img
                src="/images/dsa/elevation-side-view.JPG"
                alt=""
                className="w-[100%] h-[500px] object-cover"
              />
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-[100%]">
              <img
                src="/images/dsa/elevation-left-view.jpg"
                alt=""
                className="w-[100%] h-[500px] object-cover"
              />
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div
        className="flex 
                        md:gap-5"
      >
        <IoIosArrowRoundBack
          className={`text-6xl cursor-pointer ${
            myIndex == 0 ? "text-gray" : "text-second"
          }`}
          onClick={prevSlide}
        />
        <IoIosArrowRoundForward
          className={`text-6xl cursor-pointer ${
            myIndex == 2 ? "text-gray" : "text-second"
          }`}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
