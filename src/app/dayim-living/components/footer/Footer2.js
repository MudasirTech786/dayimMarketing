"use client";

import { motion } from "framer-motion";

import Link from "next/link";
import React from "react";

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
      <div
        className="bg-white grid grid-cols-1 p-10 text-second
                    md:p-32 md:grid-cols-2 lg:grid-cols-4"
      >
        <div>
          <img
            src="/images/dayim_living/logo.png"
            alt=""
            className="h-[120px] "
          />
        </div>

        <div>
          <h3 className="text-4xl font-bold">Contact Us</h3>
          <p className="mt-10 text-lg font-bold">+92 308 5111176</p>
        </div>

        <div
          className="flex flex-col 
                          lg:py-3 lg:pl-32"
        >
          <Link
            href="/dayim-living"
            className=" text-lg font-bold hover:underline"
          >
            Home
          </Link>
          <Link
            href="/dayim-living/residences"
            className="mt-5 text-lg font-bold hover:underline"
          >
            Residences
          </Link>
          <Link
            href="/dayim-living/vr"
            className="mt-5 text-lg font-bold hover:underline"
          >
            VR
          </Link>
          <Link
            href="/dayim-living/contact"
            className="mt-5 text-lg font-bold hover:underline"
          >
            Contact Us
          </Link>
        </div>

        <div
          className="flex flex-col space-y-5 mt-10
                          lg:py-3 lg:pl-32 lg:mt-0 "
        >
          <Link
            href="/dayim-signature-apartments/terms"
            className=" text-md hover:underline"
          >
            Terms & Conditions
          </Link>
          {/* <Link href="#" className=' text-md hover:underline'>Terms & Conditions</Link> */}
        </div>
      </div>

      <div>
        <p className="text-center p-10 bg-second text-white font-bold">
          © 2023. All Rights Reserved
        </p>
      </div>
    </motion.div>
  );
}

export default Footer2;
