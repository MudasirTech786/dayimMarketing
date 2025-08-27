"use client";

import NavBar from "@/app/dmComponents/Navbar";
import MainFooter from "@/app/dmComponents/footer/MainFooter";
import { motion } from "framer-motion";

import Link from "next/link";
import AmenitiesItem from "../../park-view-city2/AmenitiesItem";
import TextSlider from "@/app/dmComponents/sliders/TextSlider";
import BoxItem from "@/app/dmComponents/BoxItem";
import ImageGallery from "@/app/dmComponents/ImageGallery";

function Page() {
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
        <div className="absolute top-0 h-full w-full bg-black bg-opacity-70"></div>
        <video
          src="/videos/dm/kings-town-phase2-cover.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
        <div className="absolute flex items-center top-0 h-full w-full px-[5%] z-10">
          <div className=" w-[60%]  mx-auto flex flex-col items-center justify-center gap-5">
            <img
              src="/images/dayimMarketing/societies/al-kabir/logos/kings-town.png"
              className="h-[250px] hidden md:block"
              alt=""
            />
            <h2
              className="text-white font-bold  w-full text-3xl text-center mt-[-50px] 
                            lg:text-5xl md:text-4xl "
            >
              King&apos;s Town Phase 2
            </h2>

            <Link
              href="/images/dayimMarketing/societies/al-kabir/maps/kings-town-phase2.pdf"
              target="_blank"
              className="border-2 border-white py-3 px-8 text-white font-bold text-xl hover:scale-110 transition"
            >
              Download Map
            </Link>
          </div>
        </div>
      </div>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="bg-white min-h-[400px] flex flex-col gap-5 items-center justify-center mt-[30px]
                    lg:min-h-[500px] lg:mt-10"
      >
        <h3 className="text-4xl font-semibold text-center">Overview</h3>
        <p
          className=" text-xl text-gray text-justify w-[80%]
                        lg:w-[60%]"
        >
          King&apos;s Town Phase 2, a residential estate in Lahore developed by
          Al-Kabir Developers. It appears to be a well-planned and economically
          viable housing scheme, offering 3, 5, 8, 10 & 1 Kanal Marla
          Residential Plots and various commercial plots. <br />
          The success of previous projects by Al-Kabir Developers, such as
          Al-Kabir Town Phase-I and Phase-II & King&apos;s Town Phase 1, adds to
          the credibility of Kings Town Phase 2, which is considered Phase-IV of
          Al-Kabir Town. One significant aspect of King&apos;s Town is its
          authenticity, as it is approved by the Lahore Development Authority
          (LDA). This approval ensures that the project meets the necessary
          standards and regulations. Furthermore, Al-Kabir Developers guarantee
          timely delivery of the project, instilling confidence in potential
          buyers and investors. <br />
          The towns design focuses on the convenience of residents, with ongoing
          construction work assigning plots and constructing quality houses
          equipped with essential amenities. <br />
          The location of King&apos;s Town is highly accessible, featuring wide
          roads, well-managed streets, and aesthetically pleasing architecture.
          Al-Kabir Developers have launched this project with the aim of
          providing comprehensive facilities and a comfortable living experience
          for their customers. <br />
        </p>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex flex-col-reverse items-center justify-center w-full p-[20px] gap-5 bg-[#f7f7f7] mt-10
                          lg:px-[200px] lg:flex-row md:min-h-[500px] lg:min-h-[700px] "
      >
        <div
          className="w-[90%] h-full flex flex-col items-start justify-center gap-5
                        lg:w-[60%]"
        >
          <h3 className="font-bold text-4xl ">
            King&apos;s Town Phase 2 Location
          </h3>
          <p className="text-gray">
            Al Kabir Developers has launched Phase-IV, under the name of
            King&apos;s Town Phase II Lahore,which is situated in the prime
            location of Main Raiwind Road, Lahore.
          </p>
          <ul className="ml-[50px] list-disc text-gray">
            <li>Next to Bahria Orchard Lahore</li>
            <li>10 min drive from Ring Road</li>
            <li>20 min Drive from Allama Iqbal International Airport</li>
          </ul>
          <p className="text-gray">
            Fortunately, this land development is good news to everyone who
            dreams to build the luxury of their own living space at aﬀordable
            prices.
          </p>
        </div>
        <div
          className="w-[90%] h-full flex items-center justify-center
                        lg:w-[40%]"
        >
          <img
            src="/images/dayimMarketing/societies/al-kabir/kings-town2/gallery-1.jpg"
            alt=""
            className="h-full w-full lg:h-[400px]  rounded-md object-cotain"
          />
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex flex-col items-center justify-center w-full p-[20px] gap-10 bg-white 
                          lg:px-[200px] lg:flex-row md:min-h-[500px] lg:min-h-[700px] "
      >
        <div
          className="w-[90%] h-full flex items-center justify-center
                        lg:w-[40%]"
        >
          <img
            src="/images/dayimMarketing/societies/al-kabir/kings-town2/gallery-6.jpg"
            alt=""
            className="h-full w-full lg:h-[400px]  rounded-md object-contain"
          />
        </div>
        <div
          className="w-[90%] h-full flex flex-col items-start justify-center gap-5
                        lg:w-[60%]"
        >
          <h3 className="font-bold text-4xl ">
            King&apos;s Town Lahore Accessibility
          </h3>
          <p className="text-gray">
            People nowadays opt-out for such housing societies that are
            accessible and are present in a mainstream area of the city.
            King&apos;s town Lahore has kicked the ball out of the park in the
            context of location. It is located in close proximity to Bahria
            Orchard as well as Maryam Town. In addition to all this housing
            society is equipped with all the amenities that are needed. <br />
            Furthermore, Al Kabir town is located at a 2 min drive away from
            Raiwind City. Some other key landmarks that are available in the
            same area are:
          </p>
          <ul className="ml-[50px] list-disc text-gray">
            <li>Haier Factory</li>
            <li>Bahria Orchard </li>
            <li>Maryum Town </li>
          </ul>
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className=" bg-[#f7f7f7] py-10"
      >
        <div className="w-[90%] mx-auto">
          <h3 className="font-bold text-4xl text-center text-black">Blocks</h3>
          <TextSlider
            data={[
              { title: "A - Block " },
              { title: "B - Block " },
              { title: "Overseas Block " },
              { title: "Executive Block " },
            ]}
          />
        </div>
      </motion.section>
      {/* done above */}

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className=" bg-white py-10"
      >
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center">
          <div className="text-center text-xl text-second py-10">
            <h3 className="font-bold text-4xl text-center text-second">
              Payment Plan
            </h3>
            {/* <h4>A - Block </h4>               */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/kings-town2/kings-town-phase2-block1.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/kings-town2/kings-town-phase2-block2.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/kings-town2/kings-town-phase2-block3.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/kings-town2/kings-town-phase2-block3_2.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/kings-town2/kings-town-phase2-block4.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className=" bg-[#f7f7f7] py-10 "
      >
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center">
          <h3 className="text-second font-bold text-5xl">New Deal</h3>
          <p className="text-lg font-semibold">5 Marla Executive Block </p>
          <img
            src="/images/dayimMarketing/societies/al-kabir/kings-town2/newDeal1.jpeg"
            className="h-[600px] mt-10"
            alt=""
          />
        </div>
      </motion.section>

      {/* Gallery section */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="text-black mb-20"
      >
        <ImageGallery
          images={[
            "/images/dayimMarketing/societies/al-kabir/kings-town2/gallery-1.jpg",
            "/images/dayimMarketing/societies/al-kabir/kings-town2/gallery-2.jpg",
            "/images/dayimMarketing/societies/al-kabir/kings-town2/gallery-3.jpg",
            "/images/dayimMarketing/societies/al-kabir/kings-town2/gallery-4.jpg",
            "/images/dayimMarketing/societies/al-kabir/kings-town2/gallery-5.jpg",
            "/images/dayimMarketing/societies/al-kabir/kings-town2/gallery-6.jpg",
            "/images/dayimMarketing/societies/al-kabir/kings-town2/gallery-7.jpg",
          ]}
        />
      </motion.section>

      {/* Footer starts */}
      <footer className="">
        <MainFooter />
      </footer>
    </div>
  );
}

export default Page;
