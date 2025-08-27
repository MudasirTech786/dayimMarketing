"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer2() {
  const b_t_animation = {
    hide: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <motion.footer
      initial="hide"
      whileInView="show"
      variants={b_t_animation}
      className="bg-black text-white w-full"
    >

      {/* Bottom Bar */}
      <div className="bg-[#353435] border-t border-gray-800 text-center py-8 text-gray-400 text-base md:text-lg">
        © 2023 Dayim Zindagi. All rights reserved.
      </div>
    </motion.footer>
  );
}

export default Footer2;
