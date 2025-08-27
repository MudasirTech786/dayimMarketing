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

export default function FooterSlider2() {
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
    if (myIndex < 1) {
      setMyIndex(myIndex + 1);
    }
  }

  return (
    <div>
      <div className="min-h-[500px] w-[100%] ">
        <Swiper
          ref={sliderRef}
          slidesPerView={1}
          className="h-full w-full bg-transparent"
        >
          <SwiperSlide>
            <div className="w-full flex flex-col p-5 lg:flex-row lg:p-32 ">
              <div className="w-[100%] overflow-hidden h-[250px] lg:w-[50%] md:h-[400px] ">
                <Image
                  src="/images/dsa/ceo.jpg"
                  alt=""
                  width={600}
                  height={400}
                  className="w-[100%] h-[100%] object-cover shadow-lg rounded-lg lg:w-[80%]"
                />
              </div>
              <div className="w-[100%] lg:w-[50%]">
                <h3 className=" mt-10 text-xl ">
                  As a young real estate CEO, I have a positive and optimistic
                  vision when it comes to the young generation joining the real
                  estate industry. I believe that their participation can bring
                  fresh perspectives, innovative ideas, and a dynamic energy
                  that can drive the industry forward.
                </h3>
                <h3 className="mt-20 text-xl font-bold text-second">
                  Waleed Ahmad
                </h3>
                <p className="text-xl font-bold text-second mt-5">CEO</p>
                <p className="text-xl font-bold text-second mb-2">
                  Dayim Marketing
                </p>
                <Link
                  href="https://www.linkedin.com/in/ceo-dayimmarketing/"
                  target="_blank"
                >
                  <Image
                    src="/images/dsa/icons/linkedin.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] hover:scale-110"
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="w-full flex flex-col p-5 lg:flex-row lg:p-32 ">
              <div className="w-[100%] overflow-hidden h-[250px] lg:w-[50%] md:h-[400px] ">
                <Image
                  src="/images/dsa/dsa_director.jpeg"
                  alt=""
                  width={600}
                  height={400}
                  className="w-[100%] h-[100%] object-cover shadow-lg rounded-lg lg:w-[80%]"
                />
              </div>
              <div className="w-[100%] lg:w-[50%]">
                <h3 className="text-xl mt-10 ">
                  At Dayim Marketing, we believe in the power of collaboration
                  and building long-term relationships based on trust and
                  integrity. Our experienced agents and staff are here to guide
                  you through every step of your real estate journey, offering
                  valuable insights, personalized advice, and a deep
                  understanding of the local market.
                </h3>
                <h3 className="mt-14 text-xl font-bold text-second">
                  Ubaid Ullah
                </h3>
                <p className="text-xl font-bold text-second mt-5">Director</p>
                <p className="text-xl font-bold text-second mb-2">
                  Dayim Marketing
                </p>
                <Link
                  href="https://www.linkedin.com/in/sheikh-ubaid-36364a254/"
                  target="_blank"
                >
                  <Image
                    src="/images/dsa/icons/linkedin.svg"
                    alt=""
                    width={30}
                    height={30}
                    className="w-[30px] h-[30px] hover:scale-110"
                  />
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="flex items-center justify-end md:gap-5">
        <IoIosArrowRoundBack
          className={`text-6xl cursor-pointer ${
            myIndex == 0 ? "text-gray" : "text-second"
          }`}
          onClick={prevSlide}
        />
        <IoIosArrowRoundForward
          className={`text-6xl cursor-pointer ${
            myIndex == 1 ? "text-gray" : "text-second"
          }`}
          onClick={nextSlide}
        />
      </div>
    </div>
  );
}
