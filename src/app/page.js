"use client";
import React from "react";
import NavBar from "./dmComponents/Navbar";
import { motion } from "framer-motion";
import Link from "next/link";
import HomeSlider2 from "./dmComponents/sliders/HomeSlider2";
import MainFooter from "./dmComponents/footer/MainFooter";
import DiscoverSection from "./dmComponents/home/DiscoverSection";
import HomeProducts from "./dmComponents/home/HomeProducts";

const page = () => {
  const b_t_animation = {
    hide: {
      opacity: 0,
      y: 300,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1,
      },
    },
  };

  return (
    <div className="min-h-screen w-full ">
      <NavBar videoBg={true} />

      <div
        className="h-[400px] w-full relative overflow-hidden
                      md:h-[500px] lg:h-screen"
      >
        <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.7)]"></div>
        {/* <img 
          src='/images/dayimMarketing/home/home-bg.jpg'           
          className='h-full w-full object-cover' 
        />  */}
        <video
          src="/videos/dm/dm-cover.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />

        <div className="absolute flex items-center top-0 h-full w-full px-[5%] z-10">
          <div className=" w-[60%]  mx-auto flex flex-col items-center justify-center gap-5">
            <h2
              className="text-white font-bold  w-full text-3xl text-center mt-10 
                            lg:text-5xl md:text-4xl  md:mt-0"
            >
              Discover your place to live
            </h2>
            <p className="text-white text-2xl font-bold text-center">
              Get started in few clicks
            </p>
            <Link
              href="/contact"
              className="border-2 border-white py-3 px-8 text-white font-bold text-xl hover:scale-110 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex flex-col-reverse items-center justify-center w-full p-[20px]
                          lg:px-[200px] md:flex-row md:h-[500px] lg:h-[700px] "
      >
        <div
          className="w-full h-full flex flex-col items-start justify-center gap-5
                        md:w-[60%]"
        >
          <h3 className="font-bold text-4xl ">Welcome to Dayim Marketing</h3>
          <p>
            One of the leading firms in the real estate and marketing industry.
            Since 2021, we have been dedicated to providing exceptional services
            to thousands of clients, earning a reputation for excellence and
            reliability. We offer proficient and reliable consultancy services
            to both domestic and overseas customers. We understand that
            investing in real estate is a significant decision, and we are
            committed to guiding our clients through every step of the process.
          </p>
          <button className="bg-second py-3 px-8 rounded-md text-white uppercase hover:scale-110 transition">
            Contact Us
          </button>
        </div>
        <div
          className="w-full  h-full flex items-center justify-center
                        md:w-[40%]"
        >
          <img
            src="/images/dayimMarketing/home/illustration1.svg"
            alt=""
            className="h-full w-full"
          />
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex items-center justify-center"
      >
        <HomeProducts />
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <DiscoverSection
          heading={"Discover Our New Selection Properties"}
          subHeading={"CHOOSE FROM DIFFERENT LISTING TYPE, SIZE AND VIEW."}
          link={"/dayim-signature-apartments"}
          bgImage={"/images/dsa/building_bg5.png"}
          linkTitle={"Explore"}
        />
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className=" mx-auto py-10  
                  lg:w-[90%]"
      >
        <div className="">
          <h3 className="text-center text-4xl font-bold text-second mt-10">
            Our Services
          </h3>
          <div
            className="grid grid-cols-1 gap-10 mt-5 px-[20px]
                          md:grid-cols-2 lg:grid-cols-3 lg:px-[100px]"
          >
            <div className="py-3 px-5 flex gap-5">
              <img
                src="/images/dayimMarketing/logos/balance.png"
                alt=""
                className="w-[40px] h-[40px] mx-auto mt-5"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-center  font-bold text-xl mt-2">Buying</h3>
                <p className="text-[#9e9e9e] mt-2">
                  Share your budget and property requirements with us, and
                  experience seamless transactions at the best prices tailored
                  to your preferences. At Dayim Marketing, we offer professional
                  consultancy services to ensure your real estate needs are met
                  with expertise and efficiency. Trust us to deliver exceptional
                  results that align with your wishes.
                </p>
              </div>
            </div>
            <div className="py-3 px-5 flex gap-5">
              <img
                src="/images/dayimMarketing/logos/shacking-hands.png"
                alt=""
                className="w-[40px] h-[40px] mx-auto mt-5"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-center  font-bold text-xl mt-2">Selling</h3>
                <p className="text-[#9e9e9e] mt-2">
                  Trust Dayim Marketing to fulfill your selling needs with
                  utmost efficiency. Our dedicated team ensures a swift and
                  seamless process, connecting you with suitable buyers without
                  delays. Contact us today and experience the difference of a
                  hassle-free property sale.
                </p>
              </div>
            </div>
            <div className="py-3 px-5 flex gap-5">
              <img
                src="/images/dayimMarketing/logos/bar-chart-stats-up.png"
                alt=""
                className="w-[40px] h-[40px] mx-auto mt-5"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-center  font-bold text-xl mt-2">
                  Consultancy
                </h3>
                <p className="text-[#9e9e9e] mt-2">
                  Connect with our expert consultants at Dayim Marketing for
                  personalized and convenient consultations. Share your
                  requirements, and our dedicated team will provide you with
                  exceptional assistance, going above and beyond to meet your
                  needs. Experience top-notch service tailored to your
                  satisfaction.
                </p>
              </div>
            </div>
            <div className="py-3 px-5 flex gap-5">
              <img
                src="/images/dayimMarketing/logos/people.png"
                alt=""
                className="w-[40px] h-[40px] mx-auto mt-5"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-center  font-bold text-xl mt-2">
                  Property Management
                </h3>
                <p className="text-[#9e9e9e] mt-2">
                  Covers a full management package and tenancy application. Live
                  a hassle-free year while reaping the benefits of the
                  investment.
                </p>
              </div>
            </div>
            <div className="py-3 px-5 flex gap-5">
              <img
                src="/images/dayimMarketing/logos/bar-chart-board.png"
                alt=""
                className="w-[40px] h-[40px] mx-auto mt-5"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-center  font-bold text-xl mt-2">
                  Property Market Research
                </h3>
                <p className="text-[#9e9e9e] mt-2">
                  The Market Research Department of Dayim Marketing Real Estate
                  is closely monitoring the property market, keeping in touch
                  with the prevailing conditions and identifying trends.
                </p>
              </div>
            </div>
            <div className="py-3 px-5 flex gap-5">
              <img
                src="/images/dayimMarketing/logos/donut-chart-1.png"
                alt=""
                className="w-[40px] h-[40px] mx-auto mt-5"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-center  font-bold text-xl mt-2">
                  Detailed Pricing Strategy
                </h3>
                <p className="text-[#9e9e9e] mt-2">
                  The traditional market norm of Average Pricing consistently
                  results in overpriced units remaining vacant while underpriced
                  ones are unable to generate their optimum ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-[#f7f7f7]"
      >
        <div className="w-[80%] mx-auto py-20 space-y-5 text-center">
          <h2 className="font-semibold text-4xl text-second hover:text-black">
            Meet Our Agents
          </h2>
          <p className=" text-lg lg:w-[45%] mx-auto text-center">
            Our team has handpicked a selection of Pakistan&apos;s best
            residential and commercial real estate properties for you to buy.
            Start exploring now!
          </p>
          <HomeSlider2 />
        </div>
      </motion.section>

      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
};

export default page;
