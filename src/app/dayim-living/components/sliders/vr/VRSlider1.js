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
import residence_types from "@/app/dayim-living/vr/Data";

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
          {residence_types.map((item) => (
            <SwiperSlide key={item.id}>
              <div className=" mx-auto h-[90%] md:h-[80%]  lg:h-[60%] w-full flex flex-col items-center justify-center">
                <img
                  src="/images/dsa/vr-icon.svg"
                  className="absolute  object-contain h-[30px]  "
                />
                <Link
                  href={item.link}
                  className="inline-block h-full w-full relative"
                >
                  <img
                    src={item.image}
                    alt=""
                    className="w-[100%] h-[100%] object-cover"
                  />
                </Link>
                <h3 className="text-center text-white text-lg font-bold mt-5">
                  {item.title}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
