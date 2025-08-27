"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Image from "next/image";

function Footer2() {
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
    <motion.div initial="hide" whileInView="show" variants={b_t_animation}>
      <div className="bg-white grid grid-cols-1 p-10 text-black md:p-32 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Image
            src="/images/dayimMarketing/DayimSlogan.png"
            alt="Dayim Slogan"
            width={200}
            height={150}
            className="h-[150px] w-auto"
          />
        </div>

        <div>
          <h3 className="text-4xl font-bold">Contact Us</h3>
          <p className="mt-10 text-lg font-bold">+92-423-597-617-4</p>
          <p className="mt-5 text-lg font-bold">+92-308-511-117-6</p>
          <p className="mt-5 text-lg font-bold">+1(718)715-8208</p>
        </div>

        <div className="flex flex-col lg:py-3 lg:pl-32">
          <Link href="/about" className=" text-lg font-bold hover:underline">
            About Us
          </Link>
          <Link href="/team" className="mt-5 text-lg font-bold hover:underline">
            Our Team
          </Link>
          <Link
            href="/dayim-signature-apartments"
            className="mt-5 text-lg font-bold hover:underline"
          >
            Projects
          </Link>
          <Link
            href="/societies/bahria-town"
            className="mt-5 text-lg font-bold hover:underline"
          >
            Societies
          </Link>
          <Link
            href="/privacy-policy"
            className="mt-5 text-lg font-bold hover:underline"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms-and-conditions"
            className="mt-5 text-lg font-bold hover:underline"
          >
            Terms and Conditions
          </Link>
        </div>

        <div className="flex flex-col space-y-5 mt-10 lg:py-3 lg:pl-32 lg:mt-0">
          <Link
            href="/contact"
            className="mt-5 text-lg font-bold hover:underline"
          >
            Contact Us
          </Link>
        </div>
      </div>

      <div>
        <p className="text-center p-10 bg-black text-white font-bold">
          © 2023. All Rights Reserved
        </p>
      </div>
    </motion.div>
  );
}

export default Footer2;
