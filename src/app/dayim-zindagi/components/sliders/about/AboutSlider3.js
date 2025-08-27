"use client";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";

import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Link from "next/link";
import Image from "next/image";

export default function AboutSlider3() {
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
    if (myIndex < 7) setMyIndex(myIndex + 1); // 8 slides total
  }

  // reusable slide component
  const Slide = ({ img, title, desc }) => (
    <div className="w-full flex flex-col items-center justify-center relative md:p-20">
      {/* Background overlay */}
      <div className="w-full h-full bg-gray absolute opacity-40 lg:w-[60%] lg:left-[30%]" />

      {/* Optimized image */}
      <div className="relative w-full h-[300px] md:h-[400px] lg:w-[70%] lg:h-[500px] z-10">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 70vw, 50vw"
        />
      </div>

      {/* Content box */}
      <div className="bg-white shadow-lg w-full z-10 right-0 top-[25%] p-10 lg:w-[50%] lg:h-[50%] lg:absolute">
        <h3 className="text-second text-4xl font-bold">{title}</h3>
        <p className="text-first text-lg mt-5 mb-10">{desc}</p>
        <Link
          href="/dayim-signature-apartments/experiences"
          className="border-2 border-gray py-4 px-8 hover:border-second"
        >
          Explore
        </Link>
      </div>
    </div>
  );

  return (
    <div className="min-h-[700px] w-full">
      <Swiper
        ref={sliderRef}
        breakpoints={{ 1024: { slidesPerView: 1.4 } }}
        slidesPerView={1}
        spaceBetween={30}
        className="h-full w-full"
      >
        <SwiperSlide>
          <Slide
            img="/images/dsa/sliders/home3/Hospital.jpg"
            title="Hospitals"
            desc="An institution that is built, staffed, and equipped for the diagnosis and treatment of patients."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img="/images/dsa/sliders/home3/shopping.jpg"
            title="Shopping Malls"
            desc="A shopping mall is no longer just a place to buy something; it's a community and entertainment center."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img="/images/dsa/sliders/home3/Restaurant.png"
            title="Restaurants"
            desc="An establishment where the public may obtain meals or refreshments."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img="/images/dsa/sliders/home3/entertainment.jpg"
            title="Entertainment"
            desc="Entertainment is a form of activity that holds attention and gives pleasure and delight."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img="/images/dsa/sliders/home3/Education.jpg"
            title="Universities"
            desc="An institution of higher education offering degrees in various fields of study."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img="/images/dsa/sliders/home3/school.jpg"
            title="Schools"
            desc="An educational institution providing learning spaces and environments for students."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img="/images/dsa/sliders/home3/Pharmacy.jpg"
            title="Pharmacies"
            desc="The science and art concerned with the preparation and standardization of drugs."
          />
        </SwiperSlide>
        <SwiperSlide>
          <Slide
            img="/images/dsa/sliders/home3/parks.jpg"
            title="Parks"
            desc="An area of natural, semi-natural, or planted space set aside for human enjoyment and wildlife protection."
          />
        </SwiperSlide>
      </Swiper>

      {/* Navigation arrows */}
      <div className="flex items-center justify-around p-10">
        <div className="flex md:gap-5">
          <IoIosArrowRoundBack
            className={`text-6xl cursor-pointer ${
              myIndex === 0 ? "text-gray-400" : "text-second"
            }`}
            onClick={prevSlide}
          />
          <IoIosArrowRoundForward
            className={`text-6xl cursor-pointer ${
              myIndex === 7 ? "text-gray-400" : "text-second"
            }`}
            onClick={nextSlide}
          />
        </div>
      </div>
    </div>
  );
}
