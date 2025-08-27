"use client";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";

export default function SliderComponent() {
  const [myIndex, setMyIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.swiper.slideTo(myIndex);
  }, [myIndex]);

  return (
    <div
      className="flex flex-col h-[450px] items-center justify-center gap-5
                        lg:flex-row lg:px-[150px] md:h-[600px]"
    >
      <Swiper
        ref={sliderRef}
        style={{
          "--swiper-pagination-color": "#FFBA08",
          "--swiper-pagination-bullet-inactive-color": "#999999",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "40px",
          "--swiper-pagination-bullet-horizontal-gap": "6px",
          "--swiper-pagination-bullet-vertical-gap": "6px",
          "--swiper-pagination-right": "-20px",
        }}
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="h-full w-[90%] 
                            md:w-[70%]"
      >
        <SwiperSlide ali="ye cheez">
          <img
            className="object-cover w-full h-full"
            src="/images/dsa/vr/studio/2.png"
            alt="image slide 1"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src="/images/dsa/vr/one_bed/5.jpg"
            alt="image slide 2"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="object-cover w-full h-full"
            src="/images/dsa/vr/two_bed/02.jpg"
            alt="image slide 3"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-full"
            src="/images/dsa/vr/shops.jpg"
            alt="image slide 4"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="object-cover w-full h-full"
            src="/images/dsa/vr/offices.jpg"
            alt="image slide 5"
          />
        </SwiperSlide>
      </Swiper>
      <div
        className="flex flex-col gap-2 
                            lg:gap-5 md:gap-3"
      >
        <Link
          href="/dayim-signature-apartments/residences"
          className="cursor-pointer"
        >
          <div
            onMouseEnter={() => setMyIndex(0)}
            className=" w-fit px-5 rounded-lg hover:bg-white"
          >
            <h3 className="text-xl font-semibold">Studio Apartments</h3>
            <p className="text-lg text-gray font-semibold">EXECUTIVE, DELUXE</p>
          </div>
        </Link>
        <Link
          href="/dayim-signature-apartments/residences"
          className="cursor-pointer"
        >
          <div
            onMouseEnter={() => setMyIndex(1)}
            className=" w-fit px-5 rounded-lg hover:bg-white "
          >
            <h3 className="text-xl font-semibold ">One Bed Apartments</h3>
            <p className="text-lg text-gray font-semibold">EXECUTIVE, DELUXE</p>
          </div>
        </Link>

        <Link
          href="/dayim-signature-apartments/residences"
          className="cursor-pointer"
        >
          <div
            onMouseEnter={() => setMyIndex(2)}
            className=" w-fit px-5 rounded-lg hover:bg-white"
          >
            <h3 className="text-xl font-semibold">Two Bed Apartments</h3>
            <p className="text-lg text-gray font-semibold">LUXURY</p>
          </div>
        </Link>

        <Link
          href="/dayim-signature-apartments/residences"
          className="cursor-pointer"
        >
          <div
            onMouseEnter={() => setMyIndex(3)}
            className=" w-fit px-5 rounded-lg hover:bg-white"
          >
            <h3 className="text-xl font-semibold">Commercial Shops </h3>
            {/* <p className="text-lg text-gray font-semibold">DELUXE, EXECUTIVE</p> */}
          </div>
        </Link>

        <Link
          href="/dayim-signature-apartments/residences"
          className="cursor-pointer"
        >
          <div
            onMouseEnter={() => setMyIndex(4)}
            className=" w-fit px-5 rounded-lg hover:bg-white"
          >
            <h3 className="text-xl font-semibold">Commercial Offices</h3>
            {/* <p className="text-lg text-gray font-semibold">DELUXE, EXECUTIVE</p> */}
          </div>
        </Link>
      </div>
    </div>
  );
}
