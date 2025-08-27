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
          src="/videos/dm/maryam-town-cover.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
        <div className="absolute flex items-center top-0 h-full w-full px-[5%] z-10">
          <div className=" w-[60%]  mx-auto flex flex-col items-center justify-center gap-5">
            <img
              src="/images/dayimMarketing/societies/al-kabir/logos/maryam-town.png"
              className="h-[150px] hidden md:block"
              alt=""
            />
            <h2
              className="text-white font-bold  w-full text-3xl text-center mt-[-20px] 
                            lg:text-4xl md:text-4xl  md:mt-0"
            >
              Maryam Town{" "}
            </h2>
            <Link
              href="/images/dayimMarketing/societies/al-kabir/maps/maryum-town-Map.pdf"
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
          Maryam Town, a new real estate venture by Al Kabir Developers, is
          being introduced as an affordable and well-planned housing project
          located in a prime area of Lahore. With its unique features and
          attention to detail, Maryam Town aims to provide residents with a
          once-in-a-lifetime living experience. <br />
          The project offers a comprehensive lifestyle with a range of
          amenities, ensuring that residents can enjoy a contemporary and
          comfortable lifestyle. Maryam Town is designed to cater to the needs
          and aspirations of its residents, offering quality living spaces at an
          affordable price.
          <br />
          Being LDA-approved, Maryam Town provides a sense of security and
          legitimacy to potential buyers. The involvement of world-class
          developers in this project further adds to its credibility and makes
          it a recommended choice for both residents and tourists looking for a
          stylish and comfortable living experience.
          <br />
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
          <h3 className="font-bold text-4xl ">MARYAM TOWN LOCATION</h3>
          <p className="text-gray">
            Maryam Town is an exquisite real estate living experience that
            promises green living in a peaceful landscape. This residential
            society is located on Main Raiwind Road near Bahria Orchard Lahore
            and Kings Town Lahore. This is easily accessible from Thokar Niaz
            Baig which is just at a distance of 3-4 km. You can also reach out
            to this luxurious real estate opportunity from Multan Road, Ring
            Road Lahore as well as canal road.
          </p>
          <ul className="ml-[50px] list-disc text-gray">
            <li>Thokar Niaz Baig - 4 Km away</li>
            <li>Kings Town Phase 1, 2 - 1 Km away</li>
          </ul>
        </div>
        <div
          className="w-[90%] h-full flex items-center justify-center
                        lg:w-[40%]"
        >
          <img
            src="/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-1.jpg"
            alt=""
            className="h-full w-full lg:h-[400px]  rounded-md object-contain"
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
            src="/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-7.jpg"
            alt=""
            className="h-full w-full lg:h-[400px]  rounded-md object-contain"
          />
        </div>
        <div
          className="w-[90%] h-full flex flex-col items-start justify-center gap-5
                        lg:w-[60%]"
        >
          <h3 className="font-bold text-4xl ">Maryam Town Developers</h3>
          <p className="text-gray">
            Maryam Town is phase 4 of Al Kabir Town. A project is established by
            seasoned construction firms Al-Kabir Developers. <br />
            Phase 1 of Al Kabir Town, a world-class housing society was launched
            in December 2016. After the huge success of the first phase, second
            and third phases were introduced and later, they decided to extend
            their efforts in the form of Maryam Town.
            <br />
            The four phases Al Kabir Developers introduced are as follows:
            <br />
          </p>
          <ul className="ml-[50px] list-disc text-gray">
            <li>Al-Kabir Town Lahore (Phase 1)</li>
            <li>Al-Kabir Town Lahore (Phase 2)</li>
            <li>Kings Town Lahore (Phase 3)</li>
            <li>Maryam Town Lahore (Phase 4)</li>
          </ul>
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
          Facilities, Necessities, Amenities
        </h3>
        <p className="text-gray w-[90%] md:w-[80%] lg:w-[70%] mx-auto text-xl text-center">
          It is one of the key features of any residential society to provide
          its residents with all the needed life necessities. Maryam Town Lahore
          hits the ball out of the park in this context as it makes sure that it
          provides all that is demanded by the customers. <br />
          <br />
          Some of the basic amenities that are provided by this one-of-a-kind
          housing society are:
          <br />
        </p>
        <div className="p-5 mt-10">
          <div
            className="grid grid-cols-1 items-center gap-5 
                            md:grid-cols-2 lg:grid-cols-4"
          >
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/school.png"
              }
              title={"Educational Opportunities"}
            />
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/sewerage.png"
              }
              title={"Sewerage System"}
            />
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/quality-assurance.png"
              }
              title={"Availability of Utilities 24/7"}
            />
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/biodegradable.png"
              }
              title={"Recreational Activities"}
            />
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/security.png"
              }
              title={"Security System"}
            />
            <AmenitiesItem
              logo={"/images/dayimMarketing/societies/parkView/logos/road.png"}
              title={"Planned Roads Infrastructure"}
            />
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/cooperation.png"
              }
              title={"Fully Equipped Maintenance Systems"}
            />
            <AmenitiesItem
              logo={"/images/dayimMarketing/societies/parkView/logos/wall.png"}
              title={"Full of Colors Commercial Area"}
            />
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/emergency.png"
              }
              title={"Healthcare Facilities"}
            />
            <AmenitiesItem
              logo={
                "/images/dayimMarketing/societies/parkView/logos/electricity.png"
              }
              title={"Commercial Investment"}
            />
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className=" bg-white py-10"
      >
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center">
          <div className="text-center text-xl text-black py-10">
            <h3 className="font-bold text-4xl text-center text-second">
              Payment Plan
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/maryam-town/maryam-town1.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/maryam-town/maryam-town2.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
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
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-1.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-2.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-3.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-4.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-5.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-6.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-7.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-8.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-9.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-10.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-11.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-12.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-13.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-14.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-15.jpg",
            "/images/dayimMarketing/societies/al-kabir/maryam-town/gallery-16.jpg",
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
