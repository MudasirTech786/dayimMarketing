"use client";

import NavBar from "@/app/dmComponents/Navbar";
import MainFooter from "@/app/dmComponents/footer/MainFooter";
import { motion } from "framer-motion";

import Link from "next/link";
import AmenitiesItem from "../../park-view-city2/AmenitiesItem";
import TextSlider from "@/app/dmComponents/sliders/TextSlider";
import ImageGallery from "@/app/dmComponents/ImageGallery";

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
        <div className="absolute top-0 h-full w-full bg-black bg-opacity-70"></div>
        <video
          src="/videos/dm/al-kabir-town-phase1-cover.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
        <div className="absolute flex items-center top-0 h-full w-full px-[5%] z-10">
          <div className=" w-[60%]  mx-auto flex flex-col items-center justify-center gap-5">
            <img
              src="/images/dayimMarketing/societies/al-kabir/logos/al-kabir-phase1.png"
              className="h-[150px] hidden md:block"
              alt=""
            />
            <h2
              className="text-white font-bold  w-full text-3xl text-center mt-10 
                            lg:text-5xl md:text-4xl  md:mt-0"
            >
              Al Kabir Town Phase 1
            </h2>

            <Link
              href="/images/dayimMarketing/societies/al-kabir/maps/Al-Kabir-Town-Ph-1-Map.pdf"
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
                    lg:min-h-[500px] lg:mt-0"
      >
        <h3 className="text-4xl font-semibold text-center">Overview</h3>
        <p
          className=" text-xl text-gray text-justify w-[80%]
                        lg:w-[60%]"
        >
          Al Kabir Town, developed by Al Kabir Developers, is a well-designed
          community located on Main Raiwind Road in Lahore. Spanning over an
          expansive 2,500 Kanal land, it offers a large area for residential and
          commercial developments.
          <br />
          The town consists of its own set of blocks, including A, B, C, and D.
          Phase I of Al Kabir Town was launched in 2016, followed by the launch
          of apartments in March 2017.
          <br />
          One of the significant advantages of Al Kabir Town is that all phases
          have obtained approval from the Lahore Development Authority (LDA).
          This approval ensures that the development meets the necessary
          standards and regulations set by the authority.
          <br />
          Al Kabir Town aims to provide luxury and modern living spaces to the
          residents of Lahore at an affordable price. With its ideal location on
          Main Raiwind Road and its commitment to creating an aesthetically
          pleasing community, it seeks to offer a comfortable and convenient
          lifestyle for its residents.
        </p>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex flex-col-reverse items-center justify-center w-full p-[20px] gap-5 bg-[#f7f7f7]
                          lg:px-[200px] lg:flex-row md:min-h-[500px] lg:min-h-[700px] "
      >
        <div
          className="w-[90%] h-full flex flex-col items-start justify-center gap-5
                        lg:w-[60%]"
        >
          <h3 className="font-bold text-4xl ">
            Al Kabir Town Phase 1 Location{" "}
          </h3>
          <p className="text-gray">
            Al Kabir Town is located in the prime location of Lahore, Al Kabir
            Town Phase I Near BeaconHouse National University, 1 km off Raiwind
            Road, Lahore. Moreover, it is easy to access society in the
            following ways:
          </p>
          <ul className="ml-[50px] list-disc text-gray">
            <li>5 min Drive from Lahore Ring Road</li>
            <li>3 min Drive from Sharif Medical City Road</li>
            <li>19 min Drive from Multan Road</li>
            <li>14 min Drive from Canal Road</li>
            <li>9 min Drive from Defence Road</li>
          </ul>
        </div>
        <div
          className="w-[90%] h-full flex items-center justify-center
                        lg:w-[40%]"
        >
          <img
            src="/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-8.jpg"
            alt=""
            className="h-full w-full lg:h-[400px]  rounded-md object-cover"
          />
        </div>
      </motion.section>

      {/* Amenities */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="w-full p-5 mb-10"
      >
        <h3 className="text-4xl text-black font-bold text-center my-10 ">
          Available Amenities
        </h3>

        <div className="">
          <div
            className="grid grid-cols-1 items-center 
                            md:grid-cols-2 lg:grid-cols-4"
          >
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/quality-assurance.png"
              }
              title={"Surveillance System"}
            />
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/security.png"
              }
              title={"24/7 Security"}
            />
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/mosque.png"
              }
              title={"Community Mosque"}
            />
            <AmenitiesItem
              logo={"/images/dayimMarketing/societies/parkView/logos/house.png"}
              title={"Gated Community"}
            />
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/school.png"
              }
              title={"Apartment Home"}
            />
            <AmenitiesItem
              logo={"/images/dayimMarketing/societies/parkView/logos/park.png"}
              title={"Landscape Parks"}
            />
            <AmenitiesItem
              logo={"/images/dayimMarketing/societies/parkView/logos/arena.png"}
              title={"Sports Complex"}
            />
          </div>
        </div>
      </motion.section>

      {/* Slider 1 */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className=" bg-[#f7f7f7] py-10"
      >
        <div className="w-[90%] mx-auto">
          <h3 className="font-bold text-4xl text-center text-black">
            Key Transport
          </h3>
          <TextSlider
            data={[
              { title: "Bahria Town" },
              { title: "Supermarket" },
              { title: "Airport" },
              { title: "Hospital" },
              { title: "Bank" },
              { title: "University" },
              { title: "Bus Station" },
            ]}
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
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-1.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-2.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-3.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-4.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-5.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-6.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-7.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-8.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-9.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-10.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase1/gallery-11.jpg",
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

export default Contact;
