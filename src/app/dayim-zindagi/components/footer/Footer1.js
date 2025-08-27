"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { AiFillYoutube } from "react-icons/ai";
import { FaWhatsapp } from "react-icons/fa";
import Image from "next/image";
import FooterSlider2 from "../sliders/FooterSlider2";

function Footer1() {
  const b_t_animation = {
    hide: { opacity: 0, y: 300 },
    show: { opacity: 1, y: 0, transition: { duration: 1 } },
  };

  return (
    <div>
      {/* Developer Section */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-white py-20 px-6 md:px-20"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-16">
          {/* Heading */}
          <div className="text-center">
            <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-[#d6ad42]">
              Developer
            </h2>
            <div className="w-24 h-1 bg-[#b42e43] mx-auto mt-4 rounded-full" />
          </div>

          {/* Logo */}
          <div className="relative">
            <div className="absolute inset-0 animate-pulse bg-[#d6ad42]/20 rounded-full blur-2xl" />
            <div className="p-4 rounded-full border-4 border-[#d6ad42] shadow-2xl bg-white relative z-10">
              <Image
                src="/images/dayimMarketing/dayim-developer3.png"
                height={180}
                width={180}
                alt="Dayim Developer Logo"
                className="rounded-full"
                priority
              />
            </div>
          </div>

          {/* Description */}
          <p className="max-w-3xl text-center text-gray-700 text-xl leading-relaxed">
            <Link
              href="/"
              className="text-[#d6ad42] font-semibold hover:underline"
            >
              DAYIM DEVELOPER
            </Link>{" "}
            unites visionary architects, engineers, and innovators with one goal:
            to craft sustainable developments that redefine modern living and enrich
            communities for generations to come.
          </p>

          {/* Social Icons */}
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              {
                href: "https://www.facebook.com/dayimmarketing/",
                icon: <FaFacebookF />,
              },
              {
                href: "https://www.instagram.com/Dayimmarketing/",
                icon: <FaInstagram />,
              },
              {
                href: "https://www.youtube.com/c/DayimMarketing",
                icon: <AiFillYoutube />,
              },
              {
                href: "https://www.twitter.com/Dayimmarketing",
                icon: <FaTwitter />,
              },
              {
                href: "https://api.whatsapp.com/send?phone=923085111176",
                icon: <FaWhatsapp />,
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                target="_blank"
                className="w-14 h-14 flex items-center justify-center rounded-full bg-white border-2 border-[#d6ad42] shadow-md 
                           hover:scale-110 hover:bg-[#d6ad42] hover:text-white transition duration-300 text-2xl text-[#d6ad42]"
              >
                {item.icon}
              </Link>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-white py-20 px-6 md:px-20"
      >
        <div className="text-center mb-12">
          <h2 className="text-5xl lg:text-7xl font-playfair font-bold text-[#d6ad42]">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-[#b42e43] mx-auto mt-4 rounded-full" />
        </div>
        <FooterSlider2 />
      </motion.section>

      {/* CTA + Footer Grid with Video Background */}
      <div className="relative">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/dz/zindagi1.mp4" type="video/mp4" />
        </video>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/70" />

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* CTA */}
          <motion.section
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="py-32 text-center max-w-3xl mx-auto px-6"
          >
            <h3 className="text-3xl md:text-5xl font-extrabold text-white leading-tight">
              Would you like to live in{" "}
              <span className="text-[#d6ad42]">Dayim Zindagi?</span>
            </h3>
            <p className="text-gray-200 mt-6 text-lg md:text-xl leading-relaxed text-white">
              Discover modern living with world-class amenities, rooftop leisure, and a lifestyle
              that redefines luxury in the heart of the city.
            </p>
            <Link
              href="/dayim-signature-apartments/contact"
              className="inline-block mt-10 py-4 px-10 text-lg font-semibold rounded-full 
                       bg-[#d6ad42] text-white shadow-lg hover:bg-[#b42e43] hover:shadow-2xl 
                       hover:scale-105 transition duration-300"
            >
              I&apos;m Interested
            </Link>
          </motion.section>

          {/* Divider Line */}
          <div className="w-full h-px bg-[#d6ad42]" />

          {/* Footer Grid */}
          <div className="py-16 px-6 md:px-12">
            <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center">
              {/* Logo */}
              <div className="flex items-center justify-center">
                <Image
                  src="/images/dayimZindagi/zindagi.png"
                  alt="Dayim Zindagi Logo"
                  width={256} // w-64 → 64*4 = 256px
                  height={128} // h-32 → 32*4 = 128px
                  className="object-contain"
                  priority
                />
              </div>

              {/* Contact Info */}
              <div>
                <h3 className="text-2xl font-bold text-[#d6ad42] mb-6">Contact Us</h3>
                <p className="text-white text-lg font-medium">+92-423-597-617-4</p>
                <p className="text-white text-lg font-medium">+92-309-511-117-6</p>
                <p className="text-white text-lg font-medium">+1 (718) 715-8208</p>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-2xl font-bold text-[#d6ad42] mb-6">Quick Links</h3>
                {["Home", "About", "Project", "Media"].map((link, i) => (
                  <Link
                    key={i}
                    href={`/dayim-zindagi/${link.toLowerCase()}`}
                    className="block text-white text-lg hover:text-[#d6ad42] transition mb-2"
                  >
                    {link}
                  </Link>
                ))}
              </div>

              {/* Legal & Social */}
              <div>
                <h3 className="text-2xl font-bold text-[#d6ad42] mb-6">Legal</h3>
                <Link
                  href="/dayim-signature-apartments/terms"
                  className="block text-white text-lg hover:text-[#d6ad42] transition mb-6"
                >
                  Terms & Conditions
                </Link>

                <h3 className="text-2xl font-bold text-[#d6ad42] mb-4">Follow Us</h3>
                <div className="flex justify-center space-x-6 text-2xl">
                  <FaFacebookF className="text-white hover:text-[#d6ad42] transition cursor-pointer" />
                  <FaTwitter className="text-white hover:text-[#d6ad42] transition cursor-pointer" />
                  <FaInstagram className="text-white hover:text-[#d6ad42] transition cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
}

export default Footer1;
