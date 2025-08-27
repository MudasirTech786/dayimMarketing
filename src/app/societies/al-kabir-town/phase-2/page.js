"use client";

import NavBar from "@/app/dmComponents/Navbar";
import MainFooter from "@/app/dmComponents/footer/MainFooter";
import { motion } from "framer-motion";

import Link from "next/link";
import AmenitiesItem from "../../park-view-city2/AmenitiesItem";
import TextSlider from "@/app/dmComponents/sliders/TextSlider";
import BoxItem from "@/app/dmComponents/BoxItem";
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
          src="/videos/dm/al-kabir-town-phase2-cover.mp4"
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
              Al Kabir Town Phase 2
            </h2>

            <Link
              href="/images/dayimMarketing/societies/al-kabir/maps/Al-Kabir-Town-Ph-2-Map.pdf"
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
          Al Kabir Town Phase 2 is strategically located on Raiwind Road,
          precisely opposite the Main Boulevard of Lake City. This location is
          considered more ideal and strategic, offering a genuine blend of
          modern architecture and serene green surroundings. The location map
          indicates that it provides a peaceful environment for residents.
          <br />
          Moreover, Al Kabir Town Phase 2 has received approval from the Lahore
          Development Authority (LDA), further enhancing its credibility and
          making it a worthy investment option.
          <br />
          The payment plan for Al Kabir Town Phase 2 in 2023 includes
          residential and commercial plots of various sizes, such as 3 Marla, 5
          Marla, 7 Marla, and 8 Marla. These plots are equipped with all the
          necessary facilities and amenities to provide a world-class lifestyle
          to residents.
          <br />
          Additionally, MCB (Muslim Commercial Bank) has opened a new branch on
          the Main Boulevard of Al Kabir Town Phase 2, which adds convenience
          and accessibility to the residents and investors.
          <br />
          Overall, Al Kabir Town Phase 2 aims to offer an affordable dream
          lifestyle to everyone, ensuring that individuals from various
          backgrounds can enjoy the benefits and facilities of this well-planned
          community.
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
            Al Kabir Town Phase 2 Location
          </h3>
          <p className="text-gray">
            Al Kabir Town is located in the prime location of Lahore, at Main
            Raiwind Road. Moreover, it is easy to access society in the
            following ways:
          </p>
          <ul className="ml-[50px] list-disc text-gray">
            <li>5 min Drive from Lahore Ring Road</li>
            <li>3 min drive from Sharif Medical City Road</li>
            <li>19 min drive from Multan Road</li>
            <li>14 min drive from Canal Road</li>
            <li>9 min Drive from Defense Road</li>
          </ul>
        </div>
        <div
          className="w-[90%] h-full flex items-center justify-center
                        lg:w-[40%]"
        >
          <img
            src="/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-7.jpg"
            alt=""
            className="h-full w-full lg:h-[400px]  rounded-md object-contain"
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

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="py-20 bg-white"
      >
        <div className="w-[80%] mx-auto text-center  ">
          <h3 className="font-bold text-4xl">Al Kabir Town Phase 2 Features</h3>
          <p className="md:w-[60%] text-center mx-auto mt-5 text-gray">
            Al Kabir Town is the most affordable society in Lahore that offers a
            wide range of life necessities. Some of the top necessities are as
            follows:
          </p>
          <div
            className="grid grid-cols-1 mt-10 gap-5
                            md:grid-cols-2 lg:grid-cols-3"
          >
            <BoxItem
              heading={"Electricity & Water Supply"}
              text={
                "Electricity and water are the basic necessities of life. The developers have made sure that the residents do not face any issues from this end. To ensure the electricity supply 24/7, developers have provided underground wiring. Moreover, water filtrations are also installed in the society to ensure a clean water supply."
              }
              type={"one"}
            />

            <BoxItem
              heading={"Shopping Center"}
              text={
                "For leisure and to fulfill the shopping requirements of the residents, a shopping center is available too."
              }
              type={"one"}
            />

            <BoxItem
              heading={"Gym"}
              text={
                "There is a saying, Health is Wealth. The outstanding gym is also available in the housing scheme that has the latest equipment and tools for fitness freaks."
              }
              type={"one"}
            />

            <BoxItem
              heading={"Masjid"}
              text={
                "The beautiful mosque is constructed in society and has all the facilities to provide ease to the worshippers."
              }
              type={"one"}
            />

            <BoxItem
              heading={"Power Backup"}
              text={
                "Power backup is something that is mainly available in societies where plot prices are a bit high. However, in Al Kabir Town Lahore, they have their own power system with a backup power generator. The system ensures everyone receives electricity without interruption."
              }
              type={"one"}
            />

            <BoxItem
              heading={"Health Facilities"}
              text={
                "A world-class hospital is also present in the society that has modern machinery, and even emergency service is available for the residents."
              }
              type={"one"}
            />

            <BoxItem
              heading={"Restaurant"}
              text={
                "To satisfy the hunger cravings of the residents, restaurants are present in the society."
              }
              type={"one"}
            />

            <BoxItem
              heading={"Zoo"}
              text={
                "Zoo to let your children see wildlife from near and get educated."
              }
              type={"one"}
            />
          </div>
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
              { title: "A - Block" },
              { title: "B - Block " },
              { title: "C - Block " },
              { title: "D - Block " },
              { title: "E - Block " },
              { title: "Usman Block " },
              { title: "Umar Block " },
              { title: "Abu Bakar Block " },
              { title: "Ali Block " },
              { title: "Platinum Homes " },
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="py-20 bg-white"
      >
        <div className="w-[80%] mx-auto text-center  ">
          <h3 className="font-bold text-4xl">Guidelines</h3>
          <p className="md:w-[60%] text-center mx-auto mt-5 text-gray">
            Following are the guidelines to follow while Purchasing/Sale of
            Plots in Al Kabir Town
          </p>
          <div
            className="grid grid-cols-1 mt-10 gap-5
                            md:grid-cols-2 lg:grid-cols-3"
          >
            <BoxItem
              heading={"Document Verification"}
              text={
                "It is important for customers to make sure that the property that they are going to invest in is approved and also has a NOC. This not only raises the value of the property but is also important to provide overall customer expectations."
              }
              type={"one"}
            />
            <BoxItem
              heading={"Financial Security"}
              text={
                "Another important tip is that the line of purchase should be parallel with the transaction that you have decided to comply with. This way the customer can enjoy the process of sale or purchase."
              }
              type={"one"}
            />
            <BoxItem
              heading={"Property Visits"}
              text={
                "Visiting the property before making a financial transaction is one of the most important things that should not be ignored under any condition. Make sure to visit the site and see what you are purchasing for yourself."
              }
              type={"one"}
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="py-20 bg-white"
      >
        <div className="w-[80%] mx-auto text-center  ">
          <h3 className="font-bold text-4xl">
            Benefits of Investing in Al Kabir Town Lahore
          </h3>
          <p className="md:w-[60%] text-center mx-auto mt-5 text-gray">
            There is not a single shadow of doubt on the prevailing importance
            of investing in real estate. This market is the most in-demand and
            promises both a stable income as well as profitable ROI.
            <br />
            Some key benefits of investing in real estate are:
          </p>
          <div
            className="grid grid-cols-1 mt-10 gap-5
                            md:grid-cols-2 lg:grid-cols-3"
          >
            <BoxItem
              heading={"Financial Security"}
              text={
                "In case you wish to make sure that your asset not only stays safe but also with the passage of time their worth increases then this sector is the ideal one to make an investment in."
              }
              type={"one"}
            />
            <BoxItem
              heading={"Stable Income"}
              text={
                "Once you have made a purchase, you invest in it to develop it, and then you sell it. This is a cyclic process that ensures a stable source of income. You can also double the price value of a building by renting it out. All this ensures one single thing and that is a stable income."
              }
              type={"one"}
            />
            <BoxItem
              heading={"Manageable"}
              text={
                "It is easier for a person to manage a real estate investment than any other investment that is out there. The best thing that you have to do is that you just have to visit it every once in a while to ensure that things are running smoothly there."
              }
              type={"one"}
            />
            <BoxItem
              heading={"Passive Income"}
              text={
                "Whether you decide to buy a developed one or want to develop an otherwise open land, both of these can prove to be a good source of passive income. The rent that you might generate from these can become a steady source of income for the coming generations."
              }
              type={"one"}
            />
            <BoxItem
              heading={"Non-depreciable Asset"}
              text={
                "Real estate is one of those sectors that will never lose its market value and can ensure a steady and stable return of investment no matter how bad the economy gets. Thus it is one of the most reassuring sectors to invest in at any time."
              }
              type={"one"}
            />
          </div>
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
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-1.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-2.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-3.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-4.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-5.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-6.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-7.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-8.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-9.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-10.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-11.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-town-phase2/gallery-12.jpg",
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
