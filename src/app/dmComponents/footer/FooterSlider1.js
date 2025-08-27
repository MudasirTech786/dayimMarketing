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
import Image from "next/image";

export default function FooterSlider1() {
  const [myIndex, setMyIndex] = useState(0);
  const sliderRef = useRef<any>();

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
    <div>
      <div className="min-h-[600px] w-[100%]">
        <Swiper
          ref={sliderRef}
          slidesPerView={1}
          className="h-full w-full bg-transparent"
        >
          <SwiperSlide>
            <div className="w-full flex flex-col p-5 lg:flex-row lg:p-20">
              <div className="w-[100%] lg:w-[50%]">
                <Image src="/images/dsa/footer_slider1_logo1.svg" alt="" width={500} height={200} />
                <h3 className="text-3xl font-bold mt-10">Guthaus</h3>
                <p className="mt-5 text-gray w-[100%] text-lg md:w-[50%]">
                  A unique housing development that kickstarted the
                  transformation of a former industrial strip into a lively city
                  boulevard.
                </p>
                <h3 className="mt-0 text-[120px] text-gray font-bold lg:text-[170px] lg:mt-10">
                  2023
                </h3>
              </div>
              <div className="w-[100%] lg:w-[50%]">
                <Image
                  src="/images/dsa/footer_slider1_image1.jpg"
                  alt=""
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full flex flex-col p-5 lg:flex-row lg:p-20">
              <div className="w-[100%] lg:w-[50%]">
                <Image src="/images/dsa/footer_slider1_logo1.svg" alt="" width={500} height={200} />
                <h3 className="text-3xl font-bold mt-10">Guthaus</h3>
                <p className="mt-5 text-gray w-[100%] text-lg md:w-[50%]">
                  A unique housing development that kickstarted the
                  transformation of a former industrial strip into a lively city
                  boulevard.
                </p>
                <h3 className="mt-0 text-[120px] text-gray font-bold lg:text-[170px] lg:mt-10">
                  2022
                </h3>
              </div>
              <div className="w-[100%] lg:w-[50%]">
                <Image
                  src="/images/dsa/footer_slider1_image1.jpg"
                  alt=""
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full flex flex-col p-5 lg:flex-row lg:p-20">
              <div className="w-[100%] lg:w-[50%]">
                <Image src="/images/dsa/footer_slider1_logo1.svg" alt="" width={500} height={200} />
                <h3 className="text-3xl font-bold mt-10">Guthaus</h3>
                <p className="mt-5 text-gray w-[100%] text-lg md:w-[50%]">
                  A unique housing development that kickstarted the
                  transformation of a former industrial strip into a lively city
                  boulevard.
                </p>
                <h3 className="mt-0 text-[120px] text-gray font-bold lg:text-[170px] lg:mt-10">
                  2021
                </h3>
              </div>
              <div className="w-[100%] lg:w-[50%]">
                <Image
                  src="/images/dsa/footer_slider1_image1.jpg"
                  alt=""
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full flex flex-col p-5 lg:flex-row lg:p-20">
              <div className="w-[100%] lg:w-[50%]">
                <Image src="/images/dsa/footer_slider1_logo1.svg" alt="" width={500} height={200} />
                <h3 className="text-3xl font-bold mt-10">Guthaus</h3>
                <p className="mt-5 text-gray w-[100%] text-lg md:w-[50%]">
                  A unique housing development that kickstarted the
                  transformation of a former industrial strip into a lively city
                  boulevard.
                </p>
                <h3 className="mt-0 text-[120px] text-gray font-bold lg:text-[170px] lg:mt-10">
                  2020
                </h3>
              </div>
              <div className="w-[100%] lg:w-[50%]">
                <Image
                  src="/images/dsa/footer_slider1_image1.jpg"
                  alt=""
                  width={800}
                  height={600}
                  className="w-[100%] h-[100%] object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex ml-20 md:gap-5">
        <IoIosArrowRoundBack
          className={`text-6xl cursor-pointer ${
            myIndex == 0 ? "text-gray" : "text-second"
          }`}
          onClick={prevSlide}
        />
        <IoIosArrowRoundForward
          className={`text-6xl cursor-pointer ${
            myIndex == 3 ? "text-gray" : "text-second"
          }`}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
