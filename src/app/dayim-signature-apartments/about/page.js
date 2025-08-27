"use client";

import { motion } from "framer-motion";

import NavBar from "../components/Navbar";
import Link from "next/link";

import MainFooter from "../components/footer/MainFooter";
import AboutSlider1 from "../components/sliders/about/AboutSlider1";
import AboutSlider2 from "../components/sliders/about/AboutSlider2";
import AboutSlider3 from "../components/sliders/about/AboutSlider3";
import HomeSlider3 from "../components/sliders/HomeSlider3";

function About() {
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
                        lg:block"
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

      <motion.section
        id="section2"
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="grid grid-cols-1 
                         lg:grid-cols-4"
      >
        <div
          className="flex flex-row items-center justify-start gap-10 px-10 h-[150px]  border-t border-gray relative group
                        lg:border-r lg:h-[600px] lg:flex-col lg:justify-center lg:gap-24 lg:border-t-0"
        >
          <img
            src="/images/dsa/about/about-section1-bgimg1.jpg"
            alt=""
            className=" absolute top-0 left-0 w-full h-full object-cover hidden transition ease-in
                            lg:group-hover:inline-flex"
          />
          <img
            src="/images/dsa/about/about-section1-logo1.svg"
            alt=""
            className="z-10  h-[70px] w-[70px]
                            lg:h-[120px] lg:w-[120px]"
          />
          <h3 className="text-xl font-semibold z-10 group-hover:text-white  tracking-wider">
            Live Better
          </h3>
        </div>

        <div
          className="flex flex-row items-center justify-start gap-10 px-10 h-[150px]  border-t border-gray relative group
                        lg:border-r lg:h-[600px] lg:flex-col lg:justify-center lg:gap-24"
        >
          <img
            src="/images/dsa/about/about-section1-bgimg2.jpg"
            alt=""
            className=" absolute top-0 left-0 w-full h-full object-cover hidden transition ease-in
                            lg:group-hover:inline-flex"
          />
          <img
            src="/images/dsa/about/about-section1-logo2.svg"
            alt=""
            className="z-10  h-[70px] w-[70px]
                            lg:h-[120px] lg:w-[120px]"
          />
          <h3 className="text-xl font-semibold z-10 group-hover:text-white  tracking-wider">
            Live Naturally
          </h3>
        </div>

        <div
          className="flex flex-row items-center justify-start gap-10 px-10 h-[150px]  border-t border-gray relative group
                        lg:border-r lg:h-[600px] lg:flex-col lg:justify-center lg:gap-24"
        >
          <img
            src="/images/dsa/about/about-section1-bgimg3.jpg"
            alt=""
            className=" absolute top-0 left-0 w-full h-full object-cover hidden transition ease-in
                            lg:group-hover:inline-flex"
          />
          <img
            src="/images/dsa/about/about-section1-logo3.svg"
            alt=""
            className="z-10  h-[70px] w-[70px]
                            lg:h-[120px] lg:w-[120px]"
          />
          <h3 className="text-xl font-semibold z-10 group-hover:text-white  tracking-wider">
            Live Fully
          </h3>
        </div>

        <div
          className="flex flex-row items-center justify-start gap-10 px-10 h-[150px]  border-t border-gray relative group
                        lg:border-r lg:h-[600px] lg:flex-col lg:justify-center lg:gap-24"
        >
          <img
            src="/images/dsa/about/about-section1-bgimg4.jpg"
            alt=""
            className=" absolute top-0 left-0 w-full h-full object-cover hidden transition ease-in
                            lg:group-hover:inline-flex"
          />
          <img
            src="/images/dsa/about/about-section1-logo4.svg"
            alt=""
            className="z-10  h-[70px] w-[70px]
                            lg:h-[120px] lg:w-[120px]"
          />
          <h3 className="text-xl font-semibold z-10 group-hover:text-white  tracking-wider">
            Live Carefree
          </h3>
        </div>
      </motion.section>

      <section
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
            className="text-second text-2xl w-[90%] font-semibold leading-normal drop-shadow-md  text-left
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
          className="h-[300px]  px-[20px]
                    md:h-[500px]"
        >
          <img
            src="/images/dsa/about/5.jpg"
            className="w-full h-full shadow-xl object-cover"
            alt=""
          />
        </motion.div>
        <div>
          <motion.div
            initial="hide"
            whileInView="show"
            variants={b_t_animation}
            className="flex flex-col items-center 
                          lg:items-start"
          >
            <p
              className="w-[90%] text-lg text-gray font-semibold 
                          lg:w-[60%]"
            >
              The Studio, One Bedroom, and Two Bedroom Apartments offered by
              DAYIM SIGNATURE APARTMENT are designed to be spacious and
              contemporary, while still maintaining traditional values of
              living. The separate kitchen and lounge areas add to the luxurious
              feel of the apartments, and the attention to detail in the design
              is sure to impress.
            </p>
            <Link
              href="/dayim-signature-apartments/residences"
              className="flex items-center justify-center border-2 border-gray py-3 w-[250px] my-5 hover:scale-110 transition"
            >
              <span className=" text-xl font-bold ">Explore Residences</span>
            </Link>
          </motion.div>
          <motion.div
            initial="hide"
            whileInView="show"
            variants={b_t_animation}
            className="mt-10 hidden h-[500px]  
                          lg:inline-block "
          >
            <img
              src="/images/dsa/about/2.png"
              className="object-cover w-full h-full"
              alt=""
            />
          </motion.div>
        </div>
      </section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="mt-10 w-full 
                  lg:h-[600px]"
      >
        {/* <AboutSlider1 /> */}
        <video
          src="/videos/dsa/bg-video.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full"
        />
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="w-full p-5 bg-bg1 bg-center bg-no-repeat bg-cover hidden
                  lg:block"
      >
        <div className="p-10">
          <AboutSlider2 />
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="w-full h-[800px] bg-bg-about-map bg-cover bg-no-repeat bg-center  relative"
      >
        <div className="absolute h-full w-full bg-second bg-opacity-80 flex items-start justify-center">
          <div
            className="w-[80%] flex flex-col gap-10 mt-[100px] text-white
                          lg:w-[70%]"
          >
            <h3 className="text-5xl font-bold  ">Excellent location</h3>
            <p
              className="text-lg w-[100%] 
                            lg:w-[40%]"
            >
              DAYIM SIGNATURE APARTMENT is an LDA - approved project provides
              contemporary, elegant and spacious living spaces that are designed
              to cater to the urbanities’ modern lifestyle, complemented with
              traditional values of living.
            </p>
            <Link
              href="https://goo.gl/maps/cz95XeTvzZ4RVryh9"
              target="_blank"
              className="text-lg underline font-semibold hover:text-first"
            >
              View map
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="mt-[-200px]
                  md:mt-[-300px]"
      >
        <AboutSlider3 />
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className=""
      >
        <div className="flex flex-col gap-10 items-center justify-center px-10">
          <h3 className="text-5xl font-bold text-second">Apartments</h3>
          <Link
            href="/dayim-signature-apartments/residences"
            className="py-4 px-8 mb-20 border-2 border-gray hover:scale-110 transition"
          >
            Explore
          </Link>
        </div>
      </motion.section>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}

export default About;
