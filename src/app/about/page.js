"use client";
import React from "react";
import NavBar from "../dmComponents/Navbar";
import { motion } from "framer-motion";
import HomeSlider2 from "../dmComponents/sliders/HomeSlider2";
import MainFooter from "../dmComponents/footer/MainFooter";
import Image from "next/image";

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
    <div className="min-h-screen w-full bg-[#f7f7f7]">
      <NavBar videoBg={true} />

      {/* Hero Section */}
      <div
        className='h-[400px] w-full bg-[url("/images/dayimMarketing/about/about-bg.jpg")] bg-no-repeat bg-cover bg-center 
                      md:h-[500px]'
      >
        <div className="mx-auto flex flex-col items-center justify-center gap-5 h-full w-full">
          <h2
            className="text-white font-bold  w-full text-2xl text-center  
                            lg:text-4xl md:text-3xl "
          >
            About Us
          </h2>
          <p className="text-white text-2xl text-center">
            Welcome to Dayim Marketing
          </p>
        </div>
      </div>

      {/* Services Section */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className=" mx-auto py-10  z-20 
                  lg:w-[80%] lg:mt-[-200px]"
      >
        <div className="bg-white z-20 shadow-md p-5">
          <h2 className="text-center font-bold text-3xl">Services</h2>
          <div
            className="grid grid-cols-1 gap-10 mt-5 px-[20px] 
                          md:grid-cols-2 lg:grid-cols-3 "
          >
            <div className="py-3 px-5 flex gap-5">
              <Image
                src="/images/dayimMarketing/logos/balance.png"
                alt="Buying"
                width={40}
                height={40}
                className="mx-auto mt-5"
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
              <Image
                src="/images/dayimMarketing/logos/shacking-hands.png"
                alt="Selling"
                width={40}
                height={40}
                className="mx-auto mt-5"
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
              <Image
                src="/images/dayimMarketing/logos/bar-chart-stats-up.png"
                alt="Consultancy"
                width={40}
                height={40}
                className="mx-auto mt-5"
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
              <Image
                src="/images/dayimMarketing/logos/people.png"
                alt="Property Management"
                width={40}
                height={40}
                className="mx-auto mt-5"
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
              <Image
                src="/images/dayimMarketing/logos/bar-chart-board.png"
                alt="Property Market Research"
                width={40}
                height={40}
                className="mx-auto mt-5"
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
              <Image
                src="/images/dayimMarketing/logos/donut-chart-1.png"
                alt="Pricing Strategy"
                width={40}
                height={40}
                className="mx-auto mt-5"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-center  font-bold text-xl mt-2">
                  Detailed Pricing Strategy
                </h3>
                <p className="text-[#9e9e9e] mt-2">
                  The traditional market norm of “Average Pricing” consistently
                  results in overpriced units remaining vacant while underpriced
                  ones are unable to generate their optimum ROI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Our Story */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-white h-[400px] flex flex-col gap-5 items-center justify-center
                    lg:h-[500px]"
      >
        <h3 className="text-4xl font-semibold text-center text-second hover:text-black">
          Our Story
        </h3>
        <p
          className=" text-xl text-black text-center
                        md:w-[60%]"
        >
          With a passion for innovation and a commitment to excellence, Waleed
          Ahmad founded Dayim Marketing to revolutionize the real estate
          industry in Pakistan. Today, Dayim Marketing is the pioneer of sales
          and marketing services in the real estate sector, setting new
          standards for professionalism, transparency, and customer service.
        </p>
      </motion.section>

      {/* Our Vision */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex flex-col-reverse items-center justify-center w-full p-[20px] gap-5
                          lg:px-[200px] md:flex-row md:h-[500px] lg:h-[700px] "
      >
        <div
          className="w-full h-full flex flex-col items-start justify-center gap-5
                        md:w-[60%]"
        >
          <h3 className="font-bold text-4xl text-second hover:text-black ">
            Our Vision
          </h3>
          <p>
            Dayim Marketing has built its reputation in the real estate market
            by serving its clients with integrity and loyalty. We are on the
            right track to provide the best services in the market and we are
            fully dedicated to inculcating the same style and positivity in the
            market. Additionally, we are bringing luxury as well as mid-range
            societies and projects to entertain each of our clients on one
            platform of Dayim marketing.
          </p>
        </div>
        <div
          className="w-full  h-full flex items-center justify-center
                        md:w-[40%]"
        >
          <Image
            src="/images/dayimMarketing/about/illustration2.png"
            alt="Our Vision"
            width={500}
            height={500}
            className="h-full w-full md:h-[80%] lg:h-[60%] object-contain"
          />
        </div>
      </motion.section>

      {/* Our Mission */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex flex-col items-center justify-center w-full p-[20px] gap-20 bg-white
                          lg:px-[200px] md:flex-row md:h-[500px] lg:h-[700px] "
      >
        <div
          className="w-full  h-full flex items-center justify-center
                        md:w-[40%]"
        >
          <Image
            src="/images/dayimMarketing/about/illustration3.webp"
            alt="Our Mission"
            width={500}
            height={500}
            className="h-full w-full md:h-[80%] lg:h-[60%] object-contain"
          />
        </div>
        <div
          className="w-full h-full flex flex-col items-start justify-center gap-5
                        md:w-[60%]"
        >
          <h3 className="font-bold text-4xl text-second hover:text-black">
            Our Mission
          </h3>
          <p>
            Our mission is to become the premier real estate company in Pakistan
            by providing exceptional service and value to our clients. We are
            committed to delivering the best possible outcomes for our
            customers, and we look forward to working with them to achieve their
            real estate goals.
          </p>
        </div>
      </motion.section>

      {/* Our Values */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="py-20"
      >
        <div className="w-[80%] mx-auto text-center ">
          <h3 className="font-bold text-4xl text-second hover:text-black">
            Our Values
          </h3>
          <p className="md:w-[60%] text-center mx-auto mt-5">
            Our core values are the foundation of our business and guide
            everything we do. These values represent the principles we uphold
            and the beliefs we share as a team:
          </p>
          <div
            className="grid grid-cols-1 mt-10 gap-5
                            md:grid-cols-2 lg:grid-cols-3"
          >
            {[
              { title: "Excellence", text: "We are committed to excellence..." },
              { title: "Integrity", text: "We operate with integrity..." },
              { title: "Professionalism", text: "We hold ourselves to professionalism..." },
              { title: "Innovation", text: "We believe in continuous innovation..." },
              { title: "Accountability", text: "We take responsibility..." },
              { title: "Teamwork", text: "We believe in collaboration..." },
            ].map((val, idx) => (
              <div
                key={idx}
                className="bg-white shadow-md py-5 px-10 hover:bg-second group"
              >
                <h3 className="font-semibold text-xl group-hover:text-white">
                  {val.title}
                </h3>
                <p className="text-gray group-hover:text-white">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Agents */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-white"
      >
        <div className="w-[80%] mx-auto py-20 space-y-5">
          <h2 className="font-semibold text-4xl text-second hover:text-black text-center">
            Meet Our Agents
          </h2>
          <p className=" text-lg lg:w-[45%] text-center mx-auto">
            Our team has handpicked a selection of Pakistan&apos;s best
            residential and commercial real estate properties for you to buy.
            Start exploring now!
          </p>
          <HomeSlider2 />
        </div>
      </motion.section>

      {/* Footer */}
      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
};

export default page;
