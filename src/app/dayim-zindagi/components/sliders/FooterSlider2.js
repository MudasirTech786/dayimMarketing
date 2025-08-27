"use client";
import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import Link from "next/link";

export default function FooterSlider2() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="h-full w-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-6 lg:px-32 py-16 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border-[6px] border-[#d6ad42] shadow-xl overflow-hidden">
                <Image
                  src="/images/dsa/ceo.jpg"
                  alt="CEO"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 250px, 320px"
                  priority
                />
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                “As a young real estate CEO, I believe the next generation brings
                fresh perspectives, innovation, and dynamic energy that can drive
                the industry forward.”
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#b42e43]">
                Waleed Ahmad
              </h3>
              <p className="text-lg font-semibold text-gray-600">CEO</p>
              <p className="text-lg font-semibold text-[#d6ad42] mb-4">
                Dayim Marketing
              </p>
              <Link
                href="https://www.linkedin.com/in/ceo-dayimmarketing/"
                target="_blank"
              >
                <Image
                  src="/images/dsa/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={35}
                  height={35}
                  className="hover:scale-110 transition"
                />
              </Link>
            </motion.div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20 px-6 lg:px-32 py-16 bg-gradient-to-r from-white to-gray-50 rounded-2xl shadow-lg">
            {/* Left - Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative flex justify-center"
            >
              <div className="relative w-[250px] h-[250px] md:w-[320px] md:h-[320px] rounded-full border-[6px] border-[#d6ad42] shadow-xl overflow-hidden">
                <Image
                  src="/images/dsa/dsa_director.jpeg"
                  alt="Director"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 250px, 320px"
                />
              </div>
            </motion.div>

            {/* Right - Text */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex-1 text-center lg:text-left"
            >
              <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8 italic">
                “At Dayim Marketing, we value collaboration and building long-term
                relationships based on trust. Our dedicated team ensures your real
                estate journey is smooth, insightful, and rewarding.”
              </p>
              <h3 className="text-2xl md:text-3xl font-bold text-[#b42e43]">
                Ubaid Ullah
              </h3>
              <p className="text-lg font-semibold text-gray-600">Director</p>
              <p className="text-lg font-semibold text-[#d6ad42] mb-4">
                Dayim Marketing
              </p>
              <Link
                href="https://www.linkedin.com/in/sheikh-ubaid-36364a254/"
                target="_blank"
              >
                <Image
                  src="/images/dsa/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={35}
                  height={35}
                  className="hover:scale-110 transition"
                />
              </Link>
            </motion.div>
          </div>
        </SwiperSlide>
      </Swiper>

      {/* Navigation Arrows */}
      <div className="absolute bottom-6 right-10 flex items-center gap-6 z-10">
        <button
          ref={prevRef}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-[#d6ad42] hover:bg-[#b42e43] transition"
        >
          <IoIosArrowRoundBack className="text-white text-3xl" />
        </button>
        <button
          ref={nextRef}
          className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg bg-[#d6ad42] hover:bg-[#b42e43] transition"
        >
          <IoIosArrowRoundForward className="text-white text-3xl" />
        </button>
      </div>
    </div>
  );
}
