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

export default function AboutSlider3() {
    const [myIndex, setMyIndex] = useState(0);
    const sliderRef = useRef();
  
    useEffect(() => {
      sliderRef.current.swiper.slideTo(myIndex);
    }, [myIndex]);
    
    function prevSlide(){
        if(myIndex > 0){
            setMyIndex(myIndex - 1);
        }
    }

    function nextSlide(){
        if(myIndex < 6){
            setMyIndex(myIndex + 1);
        }
    }

    return (
    <div>        
        <div className="min-h-[700px] w-[100%]">
            <Swiper
                ref={sliderRef}
                breakpoints={{
                    1024: { slidesPerView: 1.4},
                }}
                slidesPerView={1}
                spaceBetween={30}
                className="h-full w-full"
            >                        
                <SwiperSlide >
                    <div className="w-[100%] flex flex-col items-center justify-center relative 
                                    md:p-20">
                        <div className="w-full h-full bg-gray absolute  opacity-40
                                        lg:w-[60%] lg:left-[30%]"></div>
                        <img 
                            src="/images/dsa/sliders/home3/Hospital.jpg" 
                            alt="" 
                            className="w-[100%] object-cover z-10 h-[300px]
                                        lg:w-[70%] lg:h-[500px] md:h-[400px]" 
                        />
                        <div className="bg-white shadow-lg w-[100%]  z-10 right-0 top-[25%] p-10
                                        lg:w-[50%] lg:h-[50%] lg:absolute">
                            <h3 className="text-second text-4xl font-bold">Hospitals</h3>
                            <p className="text-first text-lg mt-5 mb-10">An institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process.</p>
                            <Link href="/dayim-signature-apartments/experiences" className='border-2 border-gray py-4 px-8 hover:border-second'>
                                Explore
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-[100%] flex flex-col items-center justify-center relative 
                                    md:p-20">
                        <div className="w-full h-full bg-gray absolute  opacity-40
                                        lg:w-[60%] lg:left-[30%]"></div>
                        <img 
                            src="/images/dsa/sliders/home3/shopping.jpg" 
                            alt="" 
                            className="w-[100%] object-cover z-10 h-[300px]
                                        lg:w-[70%] lg:h-[500px] md:h-[400px]" 
                        />
                        <div className="bg-white shadow-lg w-[100%]  z-10 right-0 top-[25%] p-10
                                        lg:w-[50%] lg:h-[50%] lg:absolute">
                            <h3 className="text-second text-4xl font-bold">Shoping Malls</h3>
                            <p className="text-first text-lg mt-5 mb-10">A shopping mall is no longer just a place to go to buy something, it&apos;s a community and entertainment center.</p>
                            <Link href="/dayim-signature-apartments/experiences" className='border-2 border-gray py-4 px-8 hover:border-second'>
                                Explore
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-[100%] flex flex-col items-center justify-center relative 
                                    md:p-20">
                        <div className="w-full h-full bg-gray absolute  opacity-40
                                        lg:w-[60%] lg:left-[30%]"></div>
                        <img 
                            src="/images/dsa/sliders/home3/Restaurant.png" 
                            alt="" 
                            className="w-[100%] object-cover z-10 h-[300px]
                                        lg:w-[70%] lg:h-[500px] md:h-[400px]" 
                        />
                        <div className="bg-white shadow-lg w-[100%]  z-10 right-0 top-[25%] p-10
                                        lg:w-[50%] lg:h-[50%] lg:absolute">
                            <h3 className="text-second text-4xl font-bold">Restaurants</h3>
                            <p className="text-first text-lg mt-5 mb-10">A restaurant is generally an establishment where the public may obtain meals or refreshments.</p>
                            <Link href="/dayim-signature-apartments/experiences" className='border-2 border-gray py-4 px-8 hover:border-second'>
                                Explore
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-[100%] flex flex-col items-center justify-center relative 
                                    md:p-20">
                        <div className="w-full h-full bg-gray absolute  opacity-40
                                        lg:w-[60%] lg:left-[30%]"></div>
                        <img 
                            src="/images/dsa/sliders/home3/entertainment.jpg" 
                            alt="" 
                            className="w-[100%] object-cover z-10 h-[300px]
                                        lg:w-[70%] lg:h-[500px] md:h-[400px]" 
                        />
                        <div className="bg-white shadow-lg w-[100%]  z-10 right-0 top-[25%] p-10
                                        lg:w-[50%] lg:h-[50%] lg:absolute">
                            <h3 className="text-second text-4xl font-bold">Entertainment</h3>
                            <p className="text-first text-lg mt-5 mb-10">Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight.</p>
                            <Link href="/dayim-signature-apartments/experiences" className='border-2 border-gray py-4 px-8 hover:border-second'>
                                Explore
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-[100%] flex flex-col items-center justify-center relative 
                                    md:p-20">
                        <div className="w-full h-full bg-gray absolute  opacity-40
                                        lg:w-[60%] lg:left-[30%]"></div>
                        <img 
                            src="/images/dsa/sliders/home3/Education.jpg" 
                            alt="" 
                            className="w-[100%] object-cover z-10 h-[300px]
                                        lg:w-[70%] lg:h-[500px] md:h-[400px]" 
                        />
                        <div className="bg-white shadow-lg w-[100%]  z-10 right-0 top-[25%] p-10
                                        lg:w-[50%] lg:h-[50%] lg:absolute">
                            <h3 className="text-second text-4xl font-bold">Universities</h3>
                            <p className="text-first text-lg mt-5 mb-10">A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study.</p>
                            <Link href="/dayim-signature-apartments/experiences" className='border-2 border-gray py-4 px-8 hover:border-second'>
                                Explore
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>
                
                <SwiperSlide >
                    <div className="w-[100%] flex flex-col items-center justify-center relative 
                                    md:p-20">
                        <div className="w-full h-full bg-gray absolute  opacity-40
                                        lg:w-[60%] lg:left-[30%]"></div>
                        <img 
                            src="/images/dsa/sliders/home3/school.jpg" 
                            alt="" 
                            className="w-[100%] object-cover z-10 h-[300px]
                                        lg:w-[70%] lg:h-[500px] md:h-[400px]" 
                        />
                        <div className="bg-white shadow-lg w-[100%]  z-10 right-0 top-[25%] p-10
                                        lg:w-[50%] lg:h-[50%] lg:absolute">
                            <h3 className="text-second text-4xl font-bold">Schools</h3>
                            <p className="text-first text-lg mt-5 mb-10">A school is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers.</p>
                            <Link href="/dayim-signature-apartments/experiences" className='border-2 border-gray py-4 px-8 hover:border-second'>
                                Explore
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-[100%] flex flex-col items-center justify-center relative 
                                    md:p-20">
                        <div className="w-full h-full bg-gray absolute  opacity-40
                                        lg:w-[60%] lg:left-[30%]"></div>
                        <img 
                            src="/images/dsa/sliders/home3/Pharmacy.jpg" 
                            alt="" 
                            className="w-[100%] object-cover z-10 h-[300px]
                                        lg:w-[70%] lg:h-[500px] md:h-[400px]" 
                        />
                        <div className="bg-white shadow-lg w-[100%]  z-10 right-0 top-[25%] p-10
                                        lg:w-[50%] lg:h-[50%] lg:absolute">
                            <h3 className="text-second text-4xl font-bold">Pharmacies</h3>
                            <p className="text-first text-lg mt-5 mb-10">The science and art concerned with the preparation and standardization of drugs.</p>
                            <Link href="/dayim-signature-apartments/experiences" className='border-2 border-gray py-4 px-8 hover:border-second'>
                                Explore
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide >
                    <div className="w-[100%] flex flex-col items-center justify-center relative 
                                    md:p-20">
                        <div className="w-full h-full bg-gray absolute  opacity-40
                                        lg:w-[60%] lg:left-[30%]"></div>
                        <img 
                            src="/images/dsa/sliders/home3/parks.jpg" 
                            alt="" 
                            className="w-[100%] object-cover z-10 h-[300px]
                                        lg:w-[70%] lg:h-[500px] md:h-[400px]" 
                        />
                        <div className="bg-white shadow-lg w-[100%]  z-10 right-0 top-[25%] p-10
                                        lg:w-[50%] lg:h-[50%] lg:absolute">
                            <h3 className="text-second text-4xl font-bold">Parks</h3>
                            <p className="text-first text-lg mt-5 mb-10">A park is an area of natural, semi-natural or planted space set aside for human enjoyment and recreation or for the protection of wildlife or natural habitats.</p>
                            <Link href="/dayim-signature-apartments/experiences" className='border-2 border-gray py-4 px-8 hover:border-second'>
                                Explore
                            </Link>
                        </div>
                    </div>
                </SwiperSlide>

            </Swiper>

            <div className="flex items-center justify-around p-10">
                <div className="flex 
                                md:gap-5">
                    <IoIosArrowRoundBack 
                        className={`text-6xl cursor-pointer ${myIndex == 0 ? 'text-gray' : 'text-second'}`} 
                        onClick={prevSlide}
                    />
                    <IoIosArrowRoundForward 
                        className={`text-6xl cursor-pointer ${myIndex == 6 ? 'text-gray' : 'text-second'}`} 
                        onClick={nextSlide}
                    />
                </div>
            </div>
            
        </div>
    </div>
  );
}
