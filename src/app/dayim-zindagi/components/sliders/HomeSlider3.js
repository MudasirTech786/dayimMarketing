"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";

export default function HomeSlider3() {
  const sliderRef = useRef(null);

  const slides = [
    {
      title: "Hospitals",
      desc: "An institution that is built, staffed, and equipped for diagnosis, treatment, and housing of patients.",
      img: "/images/dsa/sliders/home3/Hospital.jpg",
      link: "/dayim-signature-apartments/experiences",
    },
    {
      title: "Shopping Malls",
      desc: "A shopping mall is no longer just a place to go to buy something; it's a community and entertainment center.",
      img: "/images/dsa/sliders/home3/shopping.jpg",
      link: "/dayim-signature-apartments/experiences",
    },
    {
      title: "Restaurants",
      desc: "An establishment where the public may obtain meals or refreshments.",
      img: "/images/dsa/sliders/home3/Restaurant.png",
      link: "/dayim-signature-apartments/experiences",
    },
    {
      title: "Entertainment",
      desc: "Entertainment is a form of activity that holds attention and gives pleasure and delight.",
      img: "/images/dsa/sliders/home3/entertainment.jpg",
      link: "/dayim-signature-apartments/experiences",
    },
    {
      title: "Universities",
      desc: "An institution of higher education offering degrees in various fields of study.",
      img: "/images/dsa/sliders/home3/Education.jpg",
      link: "/dayim-signature-apartments/experiences",
    },
    {
      title: "Schools",
      desc: "An educational institution providing learning spaces and environments for students.",
      img: "/images/dsa/sliders/home3/school.jpg",
      link: "/dayim-signature-apartments/experiences",
    },
    {
      title: "Pharmacies",
      desc: "The science and art concerned with the preparation and standardization of drugs.",
      img: "/images/dsa/sliders/home3/Pharmacy.jpg",
      link: "/dayim-signature-apartments/experiences",
    },
    {
      title: "Parks",
      desc: "An area of natural, semi-natural, or planted space set aside for human enjoyment and wildlife protection.",
      img: "/images/dsa/sliders/home3/parks.jpg",
      link: "/dayim-signature-apartments/experiences",
    },
  ];

  return (
    <div className="w-full bg-white py-16">
      {/* Header & Navigation */}
      <div className="flex items-center justify-between max-w-7xl mx-auto mb-12 px-5">
        {/* Heading */}
        <h2 className="text-4xl lg:text-5xl font-playfair font-bold text-[#d6ad42]">
          Lifestyle
        </h2>
        {/* Navigation Arrows */}
        <div className="flex gap-3">
          <button
            onClick={() => sliderRef.current.swiper.slidePrev()}
            className="p-2 bg-gray-100 rounded-full shadow hover:bg-[#d6ad42] hover:text-white transition-colors duration-300"
          >
            <IoIosArrowBack className="text-2xl md:text-3xl" />
          </button>
          <button
            onClick={() => sliderRef.current.swiper.slideNext()}
            className="p-2 bg-gray-100 rounded-full shadow hover:bg-[#d6ad42] hover:text-white transition-colors duration-300"
          >
            <IoIosArrowForward className="text-2xl md:text-3xl" />
          </button>
        </div>
      </div>

      {/* Swiper Slider */}
      <Swiper
        ref={sliderRef}
        modules={[Navigation]}
        slidesPerView={1.2}
        spaceBetween={30}
        breakpoints={{
          768: { slidesPerView: 2.2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-16 w-full lg:w-[1600px] mx-auto"
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={`slide-${idx}`}>
            <div className="bg-white shadow-xl rounded-xl overflow-hidden transform transition-transform duration-300 hover:rotate-y-6 hover:scale-105">
              <div className="relative w-full h-72">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw,
                         (max-width: 1200px) 50vw,
                         33vw"
                />
              </div>
              <div className="p-5">
                <h3 className="text-[#d6ad42] font-bold">{s.title}</h3>
                <p className="text-gray-700">{s.desc}</p>
                <Link
                  href={s.link}
                  className="mt-3 inline-block text-[#d6ad42] font-semibold hover:underline"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
