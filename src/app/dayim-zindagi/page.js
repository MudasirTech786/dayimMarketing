"use client";

import { motion, useScroll, useTransform } from "framer-motion";

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
import {
  BuildingOfficeIcon,
  ShoppingBagIcon,
  BoltIcon,
  LockClosedIcon,
  SparklesIcon,
  ShieldCheckIcon,
  CpuChipIcon,
  FireIcon,
  CurrencyDollarIcon,
  CalendarDaysIcon,
  MapPinIcon,
  BuildingOffice2Icon,
  CreditCardIcon,
} from '@heroicons/react/24/outline'

const features = [
  { name: "Smart Studio Apartments", icon: BuildingOfficeIcon },
  { name: "Commercial Shops & Outlets", icon: ShoppingBagIcon },
  { name: "High-Speed Elevators", icon: BoltIcon },
  { name: "Secure Entry System", icon: LockClosedIcon },
  { name: "Rooftop Leisure Area", icon: SparklesIcon },
  { name: "24/7 Security & Surveillance", icon: ShieldCheckIcon },
  { name: "Backup Power System", icon: CpuChipIcon },
  { name: "Fire Safety & Emergency Exits", icon: FireIcon },
  { name: "Easy 1% Monthly Installments", icon: CurrencyDollarIcon },
  { name: "Possession in 12–14 Months", icon: CalendarDaysIcon }
]

const features1 = [
  { name: "Prime Location", icon: MapPinIcon },
  { name: "Luxury Interiors", icon: BuildingOffice2Icon },
  { name: "Flexible Payments", icon: CreditCardIcon },
]

const features2 = [
  {
    image: "/images/dsa/elevation-side-view.JPG",
    title: "Reliable Construction",
    desc: "You’ve seen what we’ve delivered before — this is the next level.",
  },
  {
    image: "/images/dsa/b1.png",
    title: "On-Ground Progress",
    desc: "Construction begins the moment we go live — no waiting, no delays.",
  },
  {
    image: "/images/dsa/elevation-side-view.JPG",
    title: "High ROI Potential",
    desc: "Ideal for investors, entrepreneurs, and first-time buyers.",
  },
  {
    image: "/images/dsa/building_bg.JPG",
    title: "Client-First Approach",
    desc: "Transparent processes, regular updates, and no hidden charges.",
  },
];


function Home() {
  const fadeSlide = (dir) => ({
    hidden: { opacity: 0, x: dir === "left" ? -80 : 80 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 1, ease: "easeOut" },
    },
  });
  const { scrollYProgress } = useScroll();
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, -80]); // Parallax effect

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
    <div className="bg-white">
      <NavBar videoBg={true} />

      {/* Hero Section */}
      <div className="relative h-[400px] md:h-[500px] lg:h-screen w-full overflow-hidden">
        {/* Overlay Gradient */}
        <div className="absolute top-0 left-0 h-full w-full bg-gradient-to-b from-black/70 via-black/40 to-black/60 z-10" />

        {/* Centered Content */}
        <div className="absolute inset-0 flex flex-col items-center justify-center z-20 px-4">
          <motion.div
            initial="hide"
            animate="show"
            variants={b_t_animation}
            className="text-center relative"
          >
            {/* Top small heading */}
            <span
              className="block text-[8vw] sm:text-[6vw] md:text-[4vw] font-bold uppercase tracking-widest text-transparent"
              style={{
                WebkitTextStroke: "1px #E6AF2E",
                backgroundImage: 'url("/videos/fallback.jpg")',
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Dayim
            </span>

            {/* Main Heading with Shine Effect */}
            <h1
              className="relative text-[18vw] sm:text-[14vw] md:text-[10vw] lg:text-[14vw] font-extrabold uppercase text-transparent leading-[0.85] drop-shadow-2xl tracking-wide"
              style={{
                WebkitTextStroke: "3px #E6AF2E",
                backgroundImage: 'url("/videos/fallback.jpg")',
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
              }}
            >
              Zindagi
              {/* Shine Overlay */}
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shine" />
            </h1>

            {/* Glassmorphism Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="mt-4 sm:mt-6 px-4 sm:px-6 py-2 sm:py-3 backdrop-blur-md bg-white/10 border border-white/20 rounded-xl inline-block"
            >
              <p className="text-white font-orbitron text-xs sm:text-sm md:text-lg lg:text-xl tracking-[0.12em] sm:tracking-[0.15em] uppercase">
                Luxury Living • Smart Investments • Modern Lifestyle
              </p>
            </motion.div>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 1 }}
            className="absolute bottom-4 sm:bottom-6 flex flex-col items-center"
          >
            <div className="w-[2px] h-6 sm:h-8 bg-[#E6AF2E] animate-bounce" />
            <span className="text-[8px] sm:text-xs text-gray-200 mt-1 sm:mt-2 tracking-widest">
              Scroll
            </span>
          </motion.div>
        </div>

        {/* Background Video */}
        <video
          src="/videos/dz/zindagi1.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        />
      </div>




      <section className="relative bg-gradient-to-b from-white via-white to-gray-50 py-24 px-6 lg:px-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            {/* Section Label */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <span className="text-5xl font-extrabold leading-none text-[#E6AF2E]">“</span>
              <span className="text-sm font-semibold tracking-[0.25em] text-[#E6AF2E] uppercase">
                Dayim Zindagi
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight 
                       bg-gradient-to-r from-[#E6AF2E] to-[#b8891b] bg-clip-text text-transparent drop-shadow-sm"
            >
              A New Chapter in Urban Living
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 1 }}
              viewport={{ once: true }}
              className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide max-w-lg"
            >
              Experience unmatched comfort and sophistication at{" "}
              <span className="font-semibold text-[#E6AF2E]">Dayim Zindagi</span> — a landmark in modern living.
              From smart studios to luxurious penthouses, every space is crafted to merge elegance with functionality,
              giving you the lifestyle you deserve.
            </motion.p>

            {/* Floating Feature Cards */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10"
            >
              {features1.map((f, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="p-6 rounded-2xl shadow-lg bg-white border border-gray-100 
                           hover:shadow-2xl text-center"
                >
                  <f.icon className="w-10 h-10 mx-auto mb-4 text-[#E6AF2E]" />
                  <h4 className="font-semibold text-gray-800 text-lg">{f.name}</h4>
                </motion.div>
              ))}
            </motion.div>

            {/* Quote */}
            <motion.blockquote
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 1 }}
              viewport={{ once: true }}
              className="italic text-lg md:text-xl font-medium  pl-4 mt-10 text-gray-700"
            >
              {/* Button Row - Updated */}
              <div className="flex flex-col sm:flex-row gap-6 mt-10">
                <Link
                  href="/payment_plans/plan2.pdf"
                  target="_blank"
                  className="group flex items-center justify-center gap-3 py-3 px-6 rounded-xl w-full sm:w-[260px]
               bg-gradient-to-r from-[#d6ad42] to-[#b8891b] text-white font-semibold text-lg
               shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 group-hover:rotate-6 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 
           2 0 012-2h5l2 2h5a2 2 0 012 2v12a2 2 0 01-2 2z"
                    />
                  </svg>
                  <span>View Payment Plan</span>
                </Link>

                <Link
                  href="/payment_plans/catalogue-3.pdf"
                  target="_blank"
                  className="group flex items-center justify-center gap-3 py-3 px-6 rounded-xl w-full sm:w-[260px]
               bg-gradient-to-r from-[#b42e43] to-[#81172d] text-white font-semibold text-lg
               shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 group-hover:-rotate-6 transition-transform duration-300"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 20h9"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 
           1 1-4L16.5 3.5z"
                    />
                  </svg>
                  <span>Catalogue</span>
                </Link>
              </div>

            </motion.blockquote>
          </motion.div>

          {/* Right Image with Parallax */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative group"
          >
            <motion.div
              style={{ y: parallaxY }} // 👈 Parallax applied here
              className="p-1 bg-gradient-to-br from-[#E6AF2E] to-[#b8891b] rounded-[32px] shadow-xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                className="rounded-[28px] overflow-hidden relative"
              >
                <img
                  src="/images/dsa/elevation-side-view_zindagi.JPG"
                  alt="Dayim Zindagi"
                  className="w-full h-[700px] object-cover"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-70"></div>
              </motion.div>
            </motion.div>

            {/* Glassmorphism Floating Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-6 left-6 backdrop-blur-md bg-white/30 
                       px-6 py-3 rounded-xl shadow-lg border border-white/40"
            >
              <p className="text-sm font-semibold text-white tracking-wide">
                Dayim Zindagi
              </p>
            </motion.div>
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

      <section className="relative bg-gradient-to-b from-white via-gray-50 to-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          {/* Heading */}
          <div className="text-center lg:mb-16 lg:mt-8">
            <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-[#d6ad42]">
              Why Choose Dayim Zindagi?
            </h2>
            <div className="w-24 h-1 bg-[#b42e43] mx-auto mt-4 rounded-full transition-all duration-500 hover:w-32"></div>
          </div>


          {/* Zoom Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                image: "/images/dsa/zindagi4.JPG",
                title: "Reliable Construction",
                desc: "You’ve seen what we’ve delivered before — this is the next level.",
              },
              {
                image: "/images/dsa/zindagi4.JPG",
                title: "On-Ground Progress",
                desc: "Construction begins the moment we go live — no waiting, no delays.",
              },
              {
                image: "/images/dsa/zindagi4.JPG",
                title: "High ROI Potential",
                desc: "Ideal for investors, entrepreneurs, and first-time buyers.",
              },
              {
                image: "/images/dsa/zindagi4.JPG",
                title: "Client-First Approach",
                desc: "Transparent processes, regular updates, and no hidden charges.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="relative w-full h-[450px] rounded-2xl overflow-hidden shadow-xl group"
              >
                {/* Image */}
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                />

                {/* Title (always visible, white by default, gold on hover) */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/70 group-hover:opacity-0">
                  <h3 className="text-2xl lg:text-3xl font-bold font-playfair text-center text-white drop-shadow-[2px_2px_8px_rgba(0,0,0,0.8)] transition-colors duration-500 group-hover:text-[#d6ad42]">
                    {item.title}
                  </h3>
                </div>


                {/* Description Overlay (appears only on hover) */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col items-center justify-center px-6 text-center">
                  <h3 className="text-2xl lg:text-3xl font-bold text-[#d6ad42] font-playfair mb-4">
                    {item.title}
                  </h3>
                  <p className="text-white text-lg font-poppins leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>




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
        className="flex flex-col items-center justify-center p-10 bg-white gap-10"
      >

        <div className="text-center lg:mb-16 lg:mt-8">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-[#d6ad42]">
            Residences Offer
          </h2>
          <div className="w-24 h-1 bg-[#b42e43] mx-auto mt-4 rounded-full transition-all duration-500 hover:w-32"></div>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed tracking-wide  mx-auto mt-6">
            Choose the right apartment for your needs, taste, and possibilities.
          </p>
        </div>



        <HomeTab />
      </motion.section>


      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="w-full p-5 bg-bg1 bg-center bg-no-repeat bg-cover
                          "
      >
        <div className="text-center lg:mb-2 lg:mt-8">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-[#d6ad42]">
            World-class Architecture
          </h2>
          <div className="w-24 h-1 bg-[#b42e43] mx-auto mt-4 rounded-full transition-all duration-500 hover:w-32"></div>
        </div>


        <div
          className="flex items-center justify-center pt-10 flex-col 
                        lg:flex-row"
        >


          <div
            className=" w-[100%] py-10
                          lg:w-[90%] lg:pr-[80px] lg:py-0"
          >
            <HomeSlider4 />
          </div>
        </div>
      </motion.section>


      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="w-full p-5 mb-10">
        <div className="text-center lg:mb-16 lg:mt-16">
          <h2 className="text-4xl lg:text-6xl font-playfair font-bold text-[#d6ad42]">
            Facilities & Amenities
          </h2>
          <div className="w-24 h-1 bg-[#b42e43] mx-auto mt-4 rounded-full transition-all duration-500 hover:w-32"></div>
        </div>

        <div className="p-5">
          <div
            className="grid grid-cols-1 items-center 
                          md:grid-cols-2 lg:grid-cols-5"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#d6ad42"
                strokeWidth="2"
                className="h-[130px] w-[130px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 22V10a2 2 0 012-2h3v14M15 22V6h3a2 2 0 012 2v14M9 22V14h6v8"
                />
              </svg>

              {/* Title */}
              <h3 className="font-bold text-xl text-gray-800">
                Smart Studio Apartments
              </h3>
            </div>


            <div className="flex flex-col items-center justify-center gap-2">
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#d6ad42"
                strokeWidth="2"
                className="h-[130px] w-[130px]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 7h16l-1 13H5L4 7z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 7V4h6v3"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h.01M15 12h.01M12 16h.01"
                />
              </svg>

              {/* Title */}
              <h3 className="font-bold text-xl text-gray-800">
                Commercial Shops & Outlets
              </h3>
            </div>


            <div className="flex flex-col items-center justify-center gap-2">
              {/* SVG Icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d6ad42"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[130px] w-[130px]"
              >
                {/* circular badge */}
                <circle cx="12" cy="12" r="10" />
                {/* elevator cabin */}
                <rect x="7" y="6" width="10" height="12" rx="2" />
                {/* center door split */}
                <line x1="12" y1="6" x2="12" y2="18" />
                {/* motion arrows */}
                <polyline points="10,10 12,8 14,10" />
                <polyline points="10,14 12,16 14,14" />
                {/* speed lines (left/right) */}
                <line x1="5" y1="9" x2="7" y2="9" />
                <line x1="5" y1="12" x2="7" y2="12" />
                <line x1="5" y1="15" x2="7" y2="15" />
                <line x1="17" y1="9" x2="19" y2="9" />
                <line x1="17" y1="12" x2="19" y2="12" />
                <line x1="17" y1="15" x2="19" y2="15" />
              </svg>

              {/* Title */}
              <h3 className="font-bold text-xl text-gray-800">
                High-Speed Elevators
              </h3>
            </div>


            <div className="flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d6ad42"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[130px] w-[130px]"
              >
                {/* shield */}
                <path d="M12 2l7 3v5c0 5-3.5 9-7 12-3.5-3-7-7-7-12V5l7-3z" />
                {/* keypad grid */}
                <rect x="7.5" y="8" width="9" height="8" rx="1.5" />
                <path d="M9.5 10h.01M12 10h.01M14.5 10h.01M9.5 12h.01M12 12h.01M14.5 12h.01" />
                {/* small lock below keypad */}
                <rect x="10.2" y="13.5" width="3.6" height="2.8" rx="0.6" />
                <path d="M11 13.5v-.6a1 1 0 1 1 2 0v.6" />
              </svg>
              <h3 className="font-bold text-xl text-gray-800">Secure Entry System</h3>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              {/* SVG Icon: Poolside Lounge */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d6ad42"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[130px] w-[130px]"
              >
                {/* pool waves */}
                <path d="M3 18c2-1 3-1 5 0s3 1 5 0 3-1 5 0" />
                <path d="M3 20c2-1 3-1 5 0s3 1 5 0 3-1 5 0" opacity="0.9" />

                {/* deck / platform */}
                <rect x="2.5" y="12.5" width="19" height="2.5" rx="0.8" />

                {/* lounge chair */}
                <path d="M6 12l4-3 3 2.2-2 2.8H6z" />
                <line x1="5.5" y1="15" x2="7.5" y2="15" />

                {/* small palm / plant */}
                <line x1="17.5" y1="7" x2="17.5" y2="10" />
                <path d="M17.5 7c-0.6 0.6-1 1.4-1 2s0.4 1.4 1 2" />
                <path d="M17.5 7c0.6 0.6 1 1.4 1 2s-0.4 1.4-1 2" />

                {/* sun / sparkle */}
                <circle cx="20" cy="4" r="1.2" />
                <line x1="20" y1="1.8" x2="20" y2="2.8" />
                <line x1="18.6" y1="3.4" x2="19.4" y2="4.2" />
              </svg>

              <h3 className="font-bold text-xl text-gray-800">Rooftop Leisure Area</h3>
            </div>

          </div>

          <div
            className="grid grid-cols-1 items-center mt-10
                          md:grid-cols-2 lg:grid-cols-5"
          >
            <div className="flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d6ad42"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[130px] w-[130px]"
              >
                {/* Shield outline */}
                <path d="M12 2L4 5v6c0 5 3.5 9.5 8 11 4.5-1.5 8-6 8-11V5l-8-3z" />

                {/* CCTV camera */}
                <rect x="8" y="10" width="8" height="4" rx="1" />
                <line x1="12" y1="14" x2="12" y2="17" />
                <line x1="10" y1="17" x2="14" y2="17" />

                {/* Small clock for 24/7 */}
                <circle cx="18.5" cy="7" r="2.5" />
                <line x1="18.5" y1="7" x2="18.5" y2="6" />
                <line x1="18.5" y1="7" x2="19.5" y2="7.5" />
              </svg>

              <h3 className="font-bold text-xl text-gray-800">24/7 Security & Surveillance</h3>
            </div>


            <div className="flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d6ad42"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[130px] w-[130px]"
              >
                {/* Battery outline */}
                <rect x="3" y="7" width="16" height="10" rx="2" ry="2" />
                <line x1="21" y1="10" x2="21" y2="14" /> {/* Battery terminal */}

                {/* Lightning bolt */}
                <path d="M11 9l-2 4h3l-2 4 5-6h-3l2-2z" />
              </svg>

              <h3 className="font-bold text-xl text-gray-800">Backup Power System</h3>
            </div>


            <div className="flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d6ad42"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[130px] w-[130px]"
              >
                {/* Exit Door Frame */}
                <rect x="16" y="4" width="4" height="16" rx="1" />

                {/* Running Person */}
                <circle cx="7" cy="7" r="1.5" />
                <path d="M7 8.5l-2 4 3 1.5-1 3" />
                <path d="M7 9l3 1 2-2" />

                {/* Arrow toward exit */}
                <line x1="10" y1="12" x2="14" y2="12" />
                <polyline points="12,10 14,12 12,14" />
              </svg>

              <h3 className="font-bold text-xl text-gray-800">Fire Safety & Emergency Exits</h3>
            </div>


            <div className="flex flex-col items-center justify-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d6ad42"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[130px] w-[130px]"
              >
                {/* Credit Card */}
                <rect x="2" y="6" width="20" height="12" rx="2" />
                <line x1="2" y1="10" x2="22" y2="10" />
                <rect x="4" y="13" width="6" height="2" rx="0.5" />

                {/* 1% Badge (Circle) */}
                <circle cx="19" cy="5" r="3.2" fill="white" stroke="#d6ad42" strokeWidth="1.6" />
                <text
                  x="19"
                  y="6"
                  textAnchor="middle"
                  fontSize="3"
                  fontFamily="Arial, sans-serif"
                  fill="#d6ad42"
                  fontWeight="bold"
                >
                  1%
                </text>
              </svg>

              <h3 className="font-bold text-xl text-gray-800">Easy 1% Monthly Installments</h3>
            </div>

            <div className="flex flex-col items-center justify-center gap-2">
              <svg className="h-[130px] w-[130px]" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" aria-hidden>

                <circle cx="32" cy="32" r="30" fill="#d6ad42" opacity="0.09" />


                <path d="M16 28 L32 16 L48 28 V44 H36 V34 H28 V44 H16 Z" fill="#d6ad42" />


                <g transform="translate(36,34) rotate(-25)">
                  <rect x="0" y="6" width="12" height="4" rx="1.2" fill="white" />
                  <circle cx="2" cy="8" r="2.4" fill="#d6ad42" />
                  <rect x="10" y="6" width="6" height="3" rx="0.8" fill="#d6ad42" />
                </g>


                <g transform="translate(42,8)">
                  <circle cx="0" cy="0" r="7" fill="#d6ad42" />
                  <text x="0" y="2" fontSize="4" textAnchor="middle" fill="white" fontWeight="700">12–14</text>
                </g>
              </svg>

              <h3 className="font-bold text-xl text-gray-800">Possession in 12–14 Months</h3>
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
