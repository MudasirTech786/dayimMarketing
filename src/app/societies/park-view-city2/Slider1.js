"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {Autoplay, Navigation } from "swiper";

// Import Swiper styles
import "swiper/swiper.min.css";
import "swiper/css/pagination";
import "swiper/css/navigation";


export default function ParkViewSlider1() {
    const [myIndex, setMyIndex] = useState(0);
    const sliderRef = useRef();
  
    useEffect(() => {
      sliderRef.current.swiper.slideTo(myIndex);
    }, [myIndex]);
    
    return (
    <div>       
        <div className="h-[200px] w-full relative">           
            <Swiper
                ref={sliderRef}
                breakpoints={{
                    1024: { slidesPerView: 4},
                    768: { slidesPerView: 2},
                }}
                slidesPerView={1}                
                spaceBetween={10}                
                navigation={true} 
                modules={[Navigation]}
                className="h-full w-full bg-transparent"     
                style={{
                    "--swiper-navigation-color": "#FFBA08",
                    "--swiper-pagination-bullet-inactive-color": "#999999",
                    "--swiper-pagination-bullet-inactive-opacity": "1",
                    "--swiper-pagination-bullet-size": "40px",
                    "--swiper-pagination-bullet-horizontal-gap": "6px",
                    "--swiper-pagination-bullet-vertical-gap": "6px",
                    "--swiper-pagination-right": "-20px",
                  }}           
            >        
               
                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Tulip Block</h3>                       
                    </div>
                </SwiperSlide>
                
                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Jade Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Rose  Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Topaz Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Orchard Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Jasmine Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Platinum Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Diamond Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Executive Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Overseas Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Tulip Overseas Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Golf Estate Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Sapphire Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Pearl Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Silver Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Crystal Block</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Broadway Commercial</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">Signature Apartments</h3>                       
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-full h-full flex flex-col items-center justify-center ">                        
                        <h3 className=" text-second font-bold text-2xl mb-5 hover:text-gray hover:scale-110 transition ">The Walk</h3>                       
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
  );
}
