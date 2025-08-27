"use client";

import { motion } from "framer-motion";

import React from "react";

import Link from "next/link";
import HomeSlider1 from "./components/sliders/HomeSlider1";
import HomeTab from "./components/Tabs/HomeTab";
import HomeSlider2 from "./components/sliders/HomeSlider2";
import HomeSlider3 from "./components/sliders/HomeSlider3";

import { BiCheck } from "react-icons/bi";
import HomeSlider4 from "./components/sliders/HomeSlider4";
import MainFooter from "./components/footer/MainFooter";
import HomeImageItem from "./components/buildingImages/HomeImageItem";
import NavBar from "./components/Navbar";
import HomeImageItem2 from "./components/buildingImages/HomeImageItem2";

function Home() {
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
    <div>
      <NavBar videoBg={true} />

      <div
        className="h-[400px] w-full relative overflow-hidden
                      md:h-[500px] lg:h-screen"
      >
        <div className="absolute top-0 h-full w-full bg-[rgba(0,0,0,0.5)]"></div>
        <video
          src="/videos/dsa/building_clip3_2.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />

        <div
          className="absolute flex items-center top-0 h-full w-full px-[5%] z-10
                        md:pl-[15%]"
        >
          <div className="lg:mt-[-50px]">
            <h2
              className="text-white font-bold  w-[300px] text-3xl text-center mt-10
                            md:text-left lg:text-7xl md:text-5xl md:w-[450px] md:mt-0"
            >
              City living with a touch of nature
            </h2>
            <div
              className=" flex flex-col md:flex-row items-center gap-5
                            md:gap-20 md:mt-10"
            >
              <div className="hidden md:block">
                <h3 className="text-white font-bold text-2xl">Explore DSA</h3>
                <Link
                  href="/dayim-signature-apartments#section2"
                  className="text-gray font-semibold text-lg hover:text-white "
                >
                  Scroll down
                </Link>
              </div>
              <Link
                href="/dayim-signature-apartments/vr"
                className="flex items-center justify-center border-2 border-white py-3 w-[250px] gap-5 hover:scale-110 transition
                                              "
              >
                <img
                  src="/images/dsa/vr-icon.svg"
                  className="object-contain h-[20px] "
                />
                <span className="text-white text-xl font-bold">
                  Explore in VR
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Boxes styling */}
        <div
          className="absolute bottom-0 left-0 w-full hidden
                        lg:block "
        >
          <div className="flex items-center justify-between w-full">
            <div className="h-[100px] w-[100px] bg-gray opacity-50"></div>
            <div className="h-[100px] w-[100px] bg-gray opacity-50"></div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex">
              <div className="h-[100px] w-[100px] bg-gray opacity-80"></div>
              <div className="h-[100px] w-[100px] bg-gray opacity-60"></div>
            </div>
            <div className="flex">
              <div className="h-[100px] w-[100px] bg-gray opacity-60"></div>
              <div className="h-[100px] w-[100px] bg-gray opacity-80"></div>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex">
              <div className="h-[100px] w-[100px] bg-white"></div>
              <div className="h-[100px] w-[100px] bg-white"></div>
              <div className="h-[100px] w-[100px] bg-gray opacity-60"></div>
              <div className="h-[100px] w-[100px] bg-gray opacity-60"></div>
            </div>
            <div className="flex">
              <div className="h-[100px] w-[100px] bg-gray opacity-60"></div>
              <div className="h-[100px] w-[100px] bg-gray opacity-60"></div>
              <div className="h-[100px] w-[100px] bg-white"></div>
              <div className="h-[100px] w-[100px] bg-white"></div>
            </div>
          </div>

          <div className="flex items-center justify-between w-full">
            <div className="flex">
              <div className="h-[100px] w-[100px] bg-white"></div>
              <div className="h-[100px] w-[100px] bg-white"></div>
              <div className="h-[100px] w-[100px] bg-white"></div>
              <div className="h-[100px] w-[100px] bg-white"></div>
              <div className="h-[100px] w-[100px] bg-gray opacity-60"></div>
            </div>
            <div className="flex">
              <div className="h-[100px] w-[100px] bg-gray opacity-60"></div>
              <div className="h-[100px] w-[100px] bg-white"></div>
              <div className="h-[100px] w-[100px] bg-white"></div>
              <div className="h-[100px] w-[100px] bg-white"></div>
              <div className="h-[100px] w-[100px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      <section
        id="section2"
        className="h-[300px] bg-white flex items-center justify-center
                          lg:h-[500px]"
      >
        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          className="w-full flex items-center justify-center"
        >
          <img
            src="/images/dsa/dayim_logo_gray2.jpeg"
            alt=""
            className="h-[400px] w-[400px] hidden 
                    lg:inline-flex"
          />
          <p
            className="text-second text-2xl w-[90%] font-semibold leading-normal drop-shadow-md  
                        lg:text-4xl lg:w-[60%] lg:ml-[-180px] lg:text-justify"
          >
            DAYIM SIGNATURE APARTMENT is the best residential project in
            Pakistan. It combines modern lifestyle and urban dynamics with the
            views of nature.
          </p>
        </motion.div>
      </section>

      <section
        className="p-5 grid grid-cols-1 bg-bg2 bg-center bg-no-repeat bg-cover gap-20 
                          lg:grid-cols-2"
      >
        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          className="h-[500px]  px-[20px]
                        md:px-[120px] md:h-[650px]"
        >
          <img
            src="/images/dsa/elevation-side-view.JPG"
            className="w-full h-full shadow-xl object-cover"
            alt=""
          />

          {/* <video
            src="/videos/dsa/bg-video.mp4"
            autoPlay
            loop
            muted
            className="w-full h-full shadow-xl object-fit"
          /> */}
        </motion.div>
        <div>
          <motion.div
            initial="hide"
            whileInView="show"
            variants={b_t_animation}
            className="flex flex-col items-center 
                          lg:items-start"
          >
            <p className="w-[90%] text-lg text-gray font-semibold ">
              DAYIM SIGNATURE APARTMENT is a high-end luxury apartment, being
              developed by DAYIM MARKETING. Given its location in one of the
              central neighborhoods of Lahore, the residents of this project
              will be surrounded by all the main attractions of the city. <br />
              DAYIM SIGNATURE APARTMENT is an LDA - approved project provides
              contemporary, elegant and spacious living spaces that are designed
              to cater to the urbanities’ modern lifestyle, complemented with
              traditional values of living.
              <br />
              The exquisite studio, one bedroom, and two bedroom apartments of
              DAYIM SIGNATURE APARTMENT, come with a separate kitchen, lounge
              that are designed to exude luxurious sophistication. There is an
              easy instalment plan for these apartments, which will help you
              secure these ideal accommodations where you can create new
              beginnings for you and your loved ones.
            </p>
            <div className="flex w-full items-center justify-between">
              <Link
                href="/payment_plans/plan2.pdf"
                target="_blank"
                className="flex items-center justify-center border-2 border-gray py-3 w-[250px] my-5 hover:scale-110 transition"
              >
                <span className=" text-xl font-bold ">View Payment Plan</span>
              </Link>
              <Link
                href="/payment_plans/catalogue-3.pdf"
                target="_blank"
                className="flex items-center justify-center border-2 border-gray py-3 w-[250px] my-5 hover:scale-110 transition"
              >
                <span className=" text-xl font-bold ">Catalogue</span>
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            variants={b_t_animation}
            className="mt-32 hidden w-[90%]
                          lg:inline-block"
          >
            <img src="/images/dsa/34.jpg" alt="" />
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="w-full p-5 bg-bg1 bg-center bg-no-repeat bg-cover"
      >
        <HomeSlider1 />
      </motion.section>

      <section className="bg-bg2 bg-center bg-no-repeat bg-cover flex items-center justify-center">
        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          className="bg-transparent w-full flex items-center justify-center"
        >
          {/* <HomeImageItem />           */}
          <HomeImageItem2 />
        </motion.div>
      </section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex flex-col items-center justify-center p-10 bg-white gap-10"
      >
        <h3 className="text-second text-4xl font-bold">Residences offer</h3>
        <p
          className="text-center text-lg text-first 
                      md:w-[550px]"
        >
          Choose the right apartment for your needs, taste, and possibilities.
        </p>
        <HomeTab />
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <HomeSlider2 />
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
      >
        <HomeSlider3 />
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="w-full p-5 bg-bg1 bg-center bg-no-repeat bg-cover
                          lg:pl-[200px]"
      >
        <h3 className="text-4xl text-second font-bold">
          World-class Architecture
        </h3>

        <div
          className="flex items-start pt-10 flex-col 
                        lg:flex-row"
        >
          <div
            className=" text-lg font-semibold w-[100%] p5
                          lg:w-[35%]"
          >
            <ul className="mt-10 space-y-5">
              <li className="flex gap-3 items-center">
                <BiCheck className="text-second text-3xl" />
                Distinctive Design
              </li>
              <li className="flex gap-3 items-center">
                <BiCheck className="text-second text-3xl" />
                Integration with Surroundings
              </li>
              <li className="flex gap-3 items-center">
                <BiCheck className="text-second text-3xl" />
                Sustainable Features
              </li>
              <li className="flex gap-3 items-center">
                <BiCheck className="text-second text-3xl" />
                Innovative Use of Materials
              </li>
              <li className="flex gap-3 items-center">
                <BiCheck className="text-second text-3xl" />
                Accessibility
              </li>
              <li className="flex gap-3 items-center">
                <BiCheck className="text-second text-3xl" />
                Distinctive Design
              </li>
              <li className="flex gap-3 items-center">
                <BiCheck className="text-second text-3xl" />
                Safety and Security
              </li>
            </ul>
          </div>

          <div
            className=" w-[100%] py-10
                          lg:w-[65%] lg:pl-[80px] lg:py-0"
          >
            <HomeSlider4 />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="w-full p-5 mb-10"
      >
        <h3 className="text-5xl text-second font-bold text-center my-10 ">
          Facilities & Amenities
        </h3>

        <div className="p-5">
          <div
            className="grid grid-cols-1 items-center 
                          md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/images/dsa/fl1.PNG" className="h-[130px]" />
              <h3 className="font-bold text-xl">Mobile Application</h3>
              <p className="text-center">Installment & Event Updates</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/images/dsa/fl2.PNG" className="h-[130px]" />
              <h3 className="font-bold text-xl">Maintenance</h3>
              <p className="text-center">Free Maintenance Upto 1 Year</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/images/dsa/fl3.PNG" className="h-[130px]" />
              <h3 className="font-bold text-xl">RoofTop CAFE</h3>
              <p className="text-center">RoofTop CAFE & BBQ For Residents</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/images/dsa/fl4.PNG" className="h-[130px]" />
              <h3 className="font-bold text-xl">Fire Sprinkler System</h3>
              <p className="text-center">Fire Resistant Fixtures</p>
            </div>
          </div>

          <div
            className="grid grid-cols-1 items-center mt-10
                          md:grid-cols-2 lg:grid-cols-4"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/images/dsa/fl5.PNG" className="h-[130px]" />
              <h3 className="font-bold text-xl">Security</h3>
              <p className="text-center">
                24/7 Security Ensuring Security For Residents
              </p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/images/dsa/fl6.PNG" className="h-[130px]" />
              <h3 className="font-bold text-xl">Smart Homes</h3>
              <p className="text-center">Smart Entry-system For Residents</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/images/dsa/fl7.PNG" className="h-[130px]" />
              <h3 className="font-bold text-xl">Power Backup</h3>
              <p className="text-center">24/7 Back-up Generators</p>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <img src="/images/dsa/fl8.PNG" className="h-[130px]" />
              <h3 className="font-bold text-xl">Lighting</h3>
              <p className="text-center">
                Emergency Efficient Lighting With LED&apos;s Sensors Lights{" "}
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}

export default Home;
