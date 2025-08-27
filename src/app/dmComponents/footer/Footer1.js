"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import FooterSlider2 from "./FooterSlider2";
import Image from "next/image";

function Footer1() {
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
    <div className="bg-black text-white min-h-[500px] md:pt-20">
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex flex-col justify-center gap-10 border-b border-gray py-20 p-5 lg:flex-row lg:gap-0 md:p-20"
      >
        <div className="w-[100%] text-6xl font-bold lg:w-[50%] text-left lg:text-center text-second flex flex-col items-start lg:items-center gap-5">
          <h3 className="">Developer</h3>
          <Image
            src="/images/dayimMarketing/dayim-developer3.png"
            height={150}
            width={150}
            alt="Dayim Developer Logo"
          />
        </div>

        <div className="w-[100%] text-gray text-lg text-justify lg:w-[50%] md:pr-[200px]">
          <p className="relative">
            <Link href="/" className="text-second">
              <span className="">DAYIM DEVELOPER </span>
            </Link>
            is a team of specialistsss - engineers, architects, project managers,
            technicians and other experts, all of whom share a common goal: a
            positive and responsible development of the city that takes into
            account the wellbeing of its people and the environment.
          </p>

          <div className="flex flex-col gap-5 items-center mt-10 md:flex-row md:gap-20">
            <div className="flex gap-5">
              <Link href="https://www.facebook.com/dayimmarketing/" target="_blank">
                <Image
                  src="/images/dsa/icons/facebook.svg"
                  alt="Facebook"
                  width={30}
                  height={30}
                  className="hover:scale-110"
                />
              </Link>

              <Link href="https://www.instagram.com/Dayimmarketing/" target="_blank">
                <Image
                  src="/images/dsa/icons/instagram.svg"
                  alt="Instagram"
                  width={30}
                  height={30}
                  className="hover:scale-110"
                />
              </Link>

              <Link href="https://www.youtube.com/c/DayimMarketing" target="_blank">
                <Image
                  src="/images/dsa/icons/youtube.svg"
                  alt="YouTube"
                  width={30}
                  height={30}
                  className="hover:scale-110"
                />
              </Link>

              <Link href="https://www.linkedin.com/company/dayim-marketing" target="_blank">
                <Image
                  src="/images/dsa/icons/linkedin.svg"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                  className="hover:scale-110"
                />
              </Link>

              <Link href="https://www.twitter.com/Dayimmarketing" target="_blank">
                <Image
                  src="/images/dsa/icons/twitter.svg"
                  alt="Twitter"
                  width={30}
                  height={30}
                  className="hover:scale-110"
                />
              </Link>

              <Link
                href="https://api.whatsapp.com/send?phone=923085111176"
                target="_blank"
              >
                <Image
                  src="/images/dsa/icons/whatsapp.png"
                  alt="WhatsApp"
                  width={30}
                  height={30}
                  className="hover:scale-110"
                />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="p-5 lg:px-20 md:mt-10"
      >
        <FooterSlider2 />
      </motion.section>
    </div>
  );
}

export default Footer1;
