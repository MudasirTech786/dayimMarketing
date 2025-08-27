"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";

export default function FooterSlider1() {
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
    if (myIndex < 3) setMyIndex(myIndex + 1);
  }

  return (
    <div>
      <div className="min-h-[600px] w-full">
        <Swiper
          ref={sliderRef}
          slidesPerView={1}
          className="h-full w-full bg-transparent"
        >
          {/* Slide 1 */}
          <SwiperSlide>
            <div className="w-full flex flex-col p-5 lg:flex-row lg:p-20">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/dsa/footer_slider1_logo1.svg"
                  alt="Guthaus Logo"
                  width={150}
                  height={80}
                />
                <h3 className="text-3xl font-bold mt-10">Guthaus</h3>
                <p className="mt-5 text-gray w-full text-lg md:w-1/2">
                  A unique housing development that kickstarted the transformation
                  of a former industrial strip into a lively city boulevard.
                </p>
                <h3 className="mt-0 text-[120px] text-gray font-bold lg:text-[170px] lg:mt-10">
                  2023
                </h3>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/dsa/footer_slider1_image1.jpg"
                  alt="Project 2023"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 2 */}
          <SwiperSlide>
            <div className="w-full flex flex-col p-5 lg:flex-row lg:p-20">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/dsa/footer_slider1_logo1.svg"
                  alt="Guthaus Logo"
                  width={150}
                  height={80}
                />
                <h3 className="text-3xl font-bold mt-10">Guthaus</h3>
                <p className="mt-5 text-gray w-full text-lg md:w-1/2">
                  A unique housing development that kickstarted the transformation
                  of a former industrial strip into a lively city boulevard.
                </p>
                <h3 className="mt-0 text-[120px] text-gray font-bold lg:text-[170px] lg:mt-10">
                  2022
                </h3>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/dsa/footer_slider1_image1.jpg"
                  alt="Project 2022"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 3 */}
          <SwiperSlide>
            <div className="w-full flex flex-col p-5 lg:flex-row lg:p-20">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/dsa/footer_slider1_logo1.svg"
                  alt="Guthaus Logo"
                  width={150}
                  height={80}
                />
                <h3 className="text-3xl font-bold mt-10">Guthaus</h3>
                <p className="mt-5 text-gray w-full text-lg md:w-1/2">
                  A unique housing development that kickstarted the transformation
                  of a former industrial strip into a lively city boulevard.
                </p>
                <h3 className="mt-0 text-[120px] text-gray font-bold lg:text-[170px] lg:mt-10">
                  2021
                </h3>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/dsa/footer_slider1_image1.jpg"
                  alt="Project 2021"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>

          {/* Slide 4 */}
          <SwiperSlide>
            <div className="w-full flex flex-col p-5 lg:flex-row lg:p-20">
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/dsa/footer_slider1_logo1.svg"
                  alt="Guthaus Logo"
                  width={150}
                  height={80}
                />
                <h3 className="text-3xl font-bold mt-10">Guthaus</h3>
                <p className="mt-5 text-gray w-full text-lg md:w-1/2">
                  A unique housing development that kickstarted the transformation
                  of a former industrial strip into a lively city boulevard.
                </p>
                <h3 className="mt-0 text-[120px] text-gray font-bold lg:text-[170px] lg:mt-10">
                  2020
                </h3>
              </div>
              <div className="w-full lg:w-1/2">
                <Image
                  src="/images/dsa/footer_slider1_image1.jpg"
                  alt="Project 2020"
                  width={800}
                  height={600}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      {/* Arrows */}
      <div className="flex ml-20 md:gap-5">
        <IoIosArrowRoundBack
          className={`text-6xl cursor-pointer ${
            myIndex == 0 ? "text-gray-400" : "text-second"
          }`}
          onClick={prevSlide}
        />
        <IoIosArrowRoundForward
          className={`text-6xl cursor-pointer ${
            myIndex == 3 ? "text-gray-400" : "text-second"
          }`}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
