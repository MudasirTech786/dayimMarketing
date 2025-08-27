"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HomeSlider2Item from "./HomeSlider2Item";

export default function HomeSlider2() {
  const [myIndex, setMyIndex] = useState(0);
  const sliderRef = useRef();

  useEffect(() => {
    sliderRef.current.swiper.slideTo(myIndex);
  }, [myIndex]);

  return (
    <div>
      <div
        className="h-[400px] w-full relative
                        md:h-[500px] lg:h-[600px]"
      >
        <Swiper
          ref={sliderRef}
          breakpoints={{
            1024: { slidesPerView: 3 },
          }}
          slidesPerView={1}
          spaceBetween={10}
          navigation={true}
          modules={[Navigation]}
          className="h-full w-full bg-transparent"
        >
          <SwiperSlide>
            <HomeSlider2Item
              image={"/images/dayimMarketing/agents/FarahHafeez.jpg"}
              name={"Farah Hafeez"}
              designation={"Senior Sales Associate"}
              office={""}
            />
          </SwiperSlide>

          <SwiperSlide>
            <HomeSlider2Item
              image={"/images/dayimMarketing/agents/UsmanIjaz.jpg"}
              name={"Usman Ijaz"}
              designation={"Investment Advisor"}
            />
          </SwiperSlide>

          {/* <SwiperSlide>
            <HomeSlider2Item
              image={"/images/dayimMarketing/agents/AghaUsmanAhmed.jpg"}
              name={"Agha Usman Ahmed"}
              designation={"Social Media Head/Host"}
            />
          </SwiperSlide> */}

          <SwiperSlide>
            <HomeSlider2Item
              image={"/images/dayimMarketing/agents/AliZark.jpg"}
              name={"Ali Zark Jahangir"}
              designation={"Sales Manager"}
              office={"Head Office Bahria Town"}
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
