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
import { Pagination, Navigation } from "swiper";
import Link from "next/link";

import Image from "next/image";

export default function VRSLider1() {
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
    if (myIndex < 3) {
      setMyIndex(myIndex + 1);
    }
  }

  return (
    <div className="w-full  relative ">
      <div className="flex md:gap-5 items-center justify-between  absolute top-[-60px] z-10 w-full ">
        <IoIosArrowRoundBack
          className={`text-6xl cursor-pointer bg-first ${
            myIndex == 0 ? "text-gray" : "text-second"
          }`}
          onClick={prevSlide}
        />
        <IoIosArrowRoundForward
          className={`text-6xl cursor-pointer bg-first ${
            myIndex == 3 ? "text-gray" : "text-second"
          }`}
          onClick={nextSlide}
        />
      </div>
      <div
        className="h-[300px] w-full 
                        md:h-[400px] "
      >
        <Swiper
          ref={sliderRef}
          breakpoints={{
            768: { slidesPerView: 2 },
          }}
          slidesPerView={1}
          spaceBetween={40}
          className="h-full w-full bg-transparent"
          // navigation={true}
          // modules={[Navigation]}
          style={{
            "--swiper-navigation-color": "#FFBA08",
            "--swiper-navigation-left": "50px !important",
            // "--swiper-pagination-top": "-10px",
          }}
        >
         
        </Swiper>
      </div>
    </div>
  );
}
