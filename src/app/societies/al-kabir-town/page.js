"use client";

import NavBar from "@/app/dmComponents/Navbar";
import MainFooter from "@/app/dmComponents/footer/MainFooter";
import DiscoverSection from "@/app/dmComponents/home/DiscoverSection";
import { motion } from "framer-motion";

import Link from "next/link";
import NocItem from "./NocItem";

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
      <NavBar videoBg={true} />

      <div
        className="h-[400px] w-full relative overflow-hidden
                      md:h-[500px] lg:h-screen"
      >
        <div className="absolute top-0 h-full w-full bg-black bg-opacity-80"></div>
        <img
          src="/images/dayimMarketing/societies/al-kabir/cover.jpeg"
          className="h-full w-full  object-cover"
        />
        {/* <video 
          src='/videos/dm/al-kabir-town-phase1-cover.mp4' 
          autoPlay 
          loop 
          muted 
          className='h-full w-full object-cover' 
        />  */}
        <div className="absolute flex items-center top-0 h-full w-full px-[5%] z-10">
          <div className=" w-[60%]  mx-auto flex flex-col items-center justify-center gap-5">
            <img
              src="/images/dayimMarketing/societies/al-kabir/title1.png"
              alt=""
            />
            <Link
              href="/contact"
              className="border-2 border-white py-3 px-8 text-white font-bold text-xl hover:scale-110 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-white min-h-[400px] flex flex-col gap-5 items-center justify-center mt-[30px] py-20
                    lg:min-h-[500px] lg:mt-0"
      >
        <h3 className="text-4xl font-semibold text-center">Overview</h3>
        <p
          className=" text-xl text-gray text-justify w-[80%]
                        lg:w-[60%]"
        >
          Al Kabir Developers is a prominent real estate development company
          known for its project Al Kabir Town. The company embarked on its
          journey by introducing Phase I of Al Kabir Town in 2016. The
          overwhelming success and positive response from investors prompted
          them to launch Phase II and Phase III.
          <br />
          <span className="text-black font-semibold">
            Chaudhry Aurangzeb is the owner of Al Kabir Developers,
          </span>{" "}
          and under his leadership, the company has flourished in the real
          estate sector. With his vision and strategic planning, Al Kabir
          Developers has gained a reputation for delivering quality projects.
          <br />
          Major (R) Tariq Manzoor serves as the Chief Engineer of Al Kabir
          Developers. His experience and expertise in the field of real estate
          engineering play a crucial role in ensuring the development and
          execution of high-quality infrastructure within Al Kabir Town.
          <br />
          Another key figure in the company is Lt. Col (R) Pervaiz, who holds
          the position of Senior General Manager. With his extensive experience
          in the real estate industry, Lt. Col (R) Pervaiz contributes to the
          overall management and success of Al Kabir Developers.
          <br />
          Together, Chaudhry Aurangzeb, Major (R) Tariq Manzoor, and Lt. Col (R)
          Pervaiz bring a wealth of knowledge and expertise to Al Kabir
          Developers, making it a reputable and reliable player in the real
          estate market.
        </p>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="py-20 bg-black bg-opacity-70"
      >
        <div className="w-[80%] mx-auto text-center  ">
          <h3 className="font-bold text-4xl text-white">
            Al Kabir Developers Projects
          </h3>
          {/* <p className='md:w-[60%] text-center mx-auto mt-5 text-gray'>The No Objection Certificate (NOC) of Al Kabir Town is approved by Lahore Development Authority. Moreover, all the other necessary documents are approved too. So, as an investor, stay sure that all the developments in the 3 phases are as per requirements.</p> */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6">
            <NocItem
              title={"Al Kabir Town Phase 1"}
              link={"/societies/al-kabir-town/phase-1"}
              imageUrl={
                "/images/dayimMarketing/societies/al-kabir/logos/al-kabir-phase1.png"
              }
              year="2016"
            />
            <NocItem
              title={"Al Kabir Town Phase 2"}
              link={"/societies/al-kabir-town/phase-2"}
              imageUrl={
                "/images/dayimMarketing/societies/al-kabir/logos/al-kabir-phase2.png"
              }
              year="2017"
            />
            <NocItem
              title={"King" + String.fromCharCode(39) + "s Town Phase 1"}
              link={"/societies/al-kabir-town/kings-town"}
              imageUrl={
                "/images/dayimMarketing/societies/al-kabir/logos/kings-town.png"
              }
              year="2020"
            />
            <NocItem
              title={"King" + String.fromCharCode(39) + "s Town Phase 2"}
              link={"/societies/al-kabir-town/kings-town-phase2"}
              imageUrl={
                "/images/dayimMarketing/societies/al-kabir/logos/kings-town.png"
              }
              year="2021"
            />
            <NocItem
              title={"Maryam Town"}
              link={"/societies/al-kabir-town/maryum-town"}
              imageUrl={
                "/images/dayimMarketing/societies/al-kabir/logos/maryam-town.png"
              }
              year="2021"
            />
            <NocItem
              title={"Al Kabir Orchard "}
              link={"/societies/al-kabir-town/al-kabir-orchard"}
              imageUrl={
                "/images/dayimMarketing/societies/al-kabir/logos/al-kabir-orchard.png"
              }
              year="2022"
            />
          </div>
        </div>
      </motion.section>

      {/* Footer starts */}
      <footer className="">
        <MainFooter />
      </footer>
    </div>
  );
}

export default Contact;
