"use client";

import { motion } from "framer-motion";

import Link from "next/link";

import NavBar from "../dmComponents/Navbar";
import MainFooter from "../dmComponents/footer/MainFooter";
import TeamItem from "./TeamItem";

function Contact() {
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
      <NavBar videoBg={false} />

      <section className="my-[50px] mt-[150px] ">
        <h2 className="text-center font-bold text-4xl my-7">Our Team</h2>
        <div className="w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-7">
          {/* <TeamItem
            image={"/images/dayimMarketing/agents/AghaUsmanAhmed.jpg"}
            name={"Mr. Agha Usman Ahmed"}
            designation={"Social Media Head/Host"}
            mobile={"+923028460544"}
            email={"usmanahmad1105@gmail.com"}
            listingsLink={"#"}
          /> */}

          <TeamItem
            image={"/images/dayimMarketing/agents/AliZark.jpg"}
            name={"Mr. Ali Zark Jahangir"}
            designation={"Sales Manager"}
            mobile={"+923164956464"}
            email={"ializark@gmail.com"}
            office={"Head Office Bahria Town"}
            listingsLink={"#"}
          />

          <TeamItem
            image={"/images/dayimMarketing/agents/FarahHafeez.jpg"}
            name={"Ms. Farah Hafeez"}
            designation={"Senior Sales Associate"}
            mobile={"+923065111175"}
            email={"farah.dayim@gmail.com"}
            // office={"Al Kabir Town Phase 2 Branch"}
            listingsLink={"#"}
          />

          <TeamItem
            image={"/images/dayimMarketing/agents/TaimoorKhan.jpg"}
            name={"Mr. Taimoor Haider Khan"}
            designation={"Operations Manager"}
            mobile={"+923057780879"}
            email={"taimoordayim@gmail.com"}
            office={"Head Office Bahria Town"}
            listingsLink={"#"}
          />

          <TeamItem
            image={"/images/dayimMarketing/agents/UsmanIjaz.jpg"}
            name={"Mr. Usman Ijaz"}
            designation={"Investment Advisor"}
            mobile={"+923049456008"}
            email={"usman.dayim008@gmail.com"}
            listingsLink={"#"}
          />

          <TeamItem
            image={"/images/dayimMarketing/agents/FarazmaHaroon.jpg"}
            name={"Ms. Farazma Haroon Toor"}
            designation={"Brand Manager"}
            mobile={"+923055111504"}
            email={"farazmatoor@gmail.com"}
            listingsLink={"#"}
          />

          <TeamItem
            image={"/images/dayimMarketing/agents/YousafAslam.jpg"}
            name={"Mr. Yousaf Aslam"}
            designation={"Business Development Officer"}
            mobile={"+923174146664"}
            email={"yousaf.aslam@hotmail.com"}
            listingsLink={"#"}
          />

          <TeamItem
            image={"/images/dayimMarketing/agents/HamzaTayyab.jpg"}
            name={"Mr. Hamza Tayyab"}
            designation={"Sales Manager"}
            mobile={"+923078072575"}
            email={"hamza.dayim750@gmail.com"}
            office={"Al Kabir Town Phase 2 Branch"}
            listingsLink={"#"}
          />

          {/* <TeamItem
            image={"/images/dayimMarketing/agents/HamzaTayyab.jpg"}
            name={"Ms. Hina Ashraf"}
            designation={"Business Development Manager"}
            mobile={"+923095111175"}
            email={"hina.dayim@gmail.com"}
            office={"Al Kabir Town Office"}
            listingsLink={"#"}
          /> */}

          {/* <TeamItem
            image={"/images/dayimMarketing/agents/YusraAsif.jpg"}
            name={"Ms. Yusra Asif"}
            designation={"Sales Associate"}
            mobile={"+923098385358"}
            email={"yusraasif93@gmail.com"}
            // office={"Al Kabir Town Office"}
            listingsLink={"#"}
          /> */}

          <TeamItem
            image={"/images/dayimMarketing/agents/MuhammadTouseef.jpg"}
            name={"Mr. Muhammad Toseef"}
            designation={"Sales Associate"}
            mobile={"+923014895234"}
            email={"touseefgujjar15@gmail.com"}
            // office={"Al Kabir Town Office"}
            listingsLink={"#"}
          />

          {/* <TeamItem 
                  image={"/images/dayimMarketing/agents/LaibaSaleem.jpg"}
                  name={"Ms. Laiba Saleem"} 
                  designation={"Sales Associate"}
                  mobile={"+923357230054"}
                  email={"laibasaleem1998@gmail.com"}
                  // office={"Al Kabir Town Office"}
                  listingsLink={"#"}
                /> */}

          {/* <TeamItem
            image={"/images/dayimMarketing/agents/RidaNasir.jpg"}
            name={"Ms. Shafaq Azhar"}
            designation={"Sales Associate"}
            mobile={"+923055555423"}
            email={"shafaqdayim96@gmail.com"}
            office={"Al Kabir Town Office"}
            listingsLink={"#"}
          /> */}
        </div>
      </section>

      <footer className="mt-20">
        <MainFooter />
      </footer>
    </div>
  );
}

export default Contact;
