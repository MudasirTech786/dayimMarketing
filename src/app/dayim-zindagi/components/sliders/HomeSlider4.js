"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function HomeSlider4() {
  const sliderRef = useRef(null);

  const slides = [
    {
      title: "Rapid Progress in DSA Construction",
      description: `
At Dayim Developers, we take pride in delivering what we promise — and doing it faster than expected. Our DSA project is a prime example of how commitment, planning, and relentless effort can turn vision into reality within record time.

Within just one year, we successfully completed the grey structure, ensuring that every step of the construction process was carried out with precision and speed. Our timeline was strictly maintained — with SALB concrete poured every 20 days without fail. This consistent progress kept the project on track and ensured that no phase was left behind.

To maintain the highest standards of quality, we used Pak Mix concrete, a trusted name in the industry, ensuring durability and long-lasting strength. Alongside the quality of materials, our dedicated workforce played a vital role. Our team of skilled laborers worked day and night, demonstrating unmatched dedication and hard work to meet ambitious deadlines.

This remarkable pace of construction was achieved through:
- Meticulous Planning – Every stage was scheduled and executed on time.
- Top-Quality Materials – Use of reliable products like Pak Mix for strength and durability.
- Efficient Workforce – Labor working in multiple shifts around the clock.
- Consistent Milestones – Regular concrete pouring cycles every 20 days.

The result is a grey structure completed in record time, setting a new benchmark for efficiency and excellence in construction. At Dayim Developers, we don’t just build projects — we build trust, speed, and quality into everything we deliver.
      `,
      images: [
        "/images/dz/dsa-1.jpg",
        "/images/dz/dsa-2.jpg",
        "/images/dz/dsa-3.jpg",
      ],
    },
    {
      title: "Dayim Living Construction",
      description: `
At Dayim Developers, every project is a reflection of our commitment to timely delivery, strong construction, and modern living standards. After the successful completion of the grey structure of Dayim Signature Apartments, we are proud to move forward with our next exciting development — Dayim Living.

With Dayim Signature, we proved that quality and speed can go hand in hand. Now, with Dayim Living, we aim to raise the bar even higher. Construction will be rapid, well-planned, and on schedule, ensuring that our valued customers receive their homes on time without compromising on quality.

Dayim Living is designed to offer a modern lifestyle, premium features, and a secure community environment — making it not just a residence but a lifestyle upgrade. Just as we delivered on our promise with Dayim Signature, we are fully committed to doing the same with Dayim Living.

At Dayim Developers, we don’t just build projects — we build trust, lifestyle, and value for generations to come.
      `,
      images: [
        "/images/dz/Scene-1.jpg",
        "/images/dz/Scene-3.jpg",
        "/images/dz/Scene-4.jpg",
      ],
    },
  ];

  return (
    <div className="relative w-full">
      <Swiper
        ref={sliderRef}
        modules={[Navigation, Autoplay]}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 10000, disableOnInteraction: false }}
      >
        {slides.map((slide, idx) => (
          <SwiperSlide key={idx}>
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 p-6 lg:p-12 relative">
              {/* Text Section */}
              <div className="w-full lg:w-1/2 text-base lg:text-lg text-gray-700 leading-relaxed space-y-4 max-h-[500px] overflow-y-auto">
                <h3 className="text-2xl lg:text-3xl font-bold text-[#d6ad42]">
                  {slide.title}
                </h3>
                <p className="whitespace-pre-line">{slide.description}</p>
              </div>

              {/* Image Section with nested slider */}
              <div className="w-full lg:w-1/2 grid grid-cols-3 gap-4">
                <img
                  src={slide.images[0]}
                  alt="main"
                  className="col-span-2 h-[300px] lg:h-[500px] object-cover rounded-2xl shadow-lg"
                />
                <div className="flex flex-col gap-4">
                  <img
                    src={slide.images[1]}
                    alt="small1"
                    className="h-[140px] lg:h-[240px] object-cover rounded-2xl shadow-lg"
                  />
                  <img
                    src={slide.images[2]}
                    alt="small2"
                    className="h-[140px] lg:h-[240px] object-cover rounded-2xl shadow-lg"
                  />
                </div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Desktop Arrows */}
      <div className="hidden lg:flex absolute top-1/2 left-0 right-0 justify-between px-4 z-50">
        <button
          onClick={() => sliderRef.current.swiper.slidePrev()}
          className="p-3 bg-black bg-opacity-40 hover:bg-[#d6ad42] hover:text-white rounded-full shadow-md transition"
        >
          <IoIosArrowBack className="text-2xl text-white" />
        </button>
        <button
          onClick={() => sliderRef.current.swiper.slideNext()}
          className="p-3 bg-black bg-opacity-40 hover:bg-[#d6ad42] hover:text-white rounded-full shadow-md transition"
        >
          <IoIosArrowForward className="text-2xl text-white" />
        </button>
      </div>

      {/* Mobile Arrows */}
      <div className="flex lg:hidden justify-center gap-6 mt-4">
        <button
          onClick={() => sliderRef.current.swiper.slidePrev()}
          className="p-2 bg-black bg-opacity-40 hover:bg-[#d6ad42] hover:text-white rounded-full shadow-md transition"
        >
          <IoIosArrowBack className="text-xl text-white" />
        </button>
        <button
          onClick={() => sliderRef.current.swiper.slideNext()}
          className="p-2 bg-black bg-opacity-40 hover:bg-[#d6ad42] hover:text-white rounded-full shadow-md transition"
        >
          <IoIosArrowForward className="text-xl text-white" />
        </button>
      </div>
    </div>
  );
}
