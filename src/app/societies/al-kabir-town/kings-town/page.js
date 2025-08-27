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
          src="/videos/dm/kings-town-phase1-cover.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
        <div className="absolute flex items-center top-0 h-full w-full px-[5%] z-10">
          <div className=" w-[60%]  mx-auto flex flex-col items-center justify-center gap-5">
            <img
              src="/images/dayimMarketing/societies/al-kabir/logos/kings-town.png"
              className="h-[250px] hidden md:block "
              alt=""
            />
            <h2
              className="text-white font-bold  w-full text-3xl text-center mt-[-50px] 
                            lg:text-5xl md:text-4xl "
            >
              King&apos;s Town Phase 1
            </h2>

            <Link
              href="/images/dayimMarketing/societies/al-kabir/maps/kings-town-phase1.pdf"
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
          King&apos;s Town, a residential estate in Lahore developed by Al-Kabir
          Developers. It appears to be a well-planned and economically viable
          housing scheme, offering 3 & 5 Marla Residential Plots, fully
          constructed houses, and various commercial plots.
          <br />
          The success of previous projects by Al-Kabir Developers, such as
          Al-Kabir Town Phase-I and Phase-II, adds to the credibility of
          King&apos;s Town, which is considered Phase-III of Al-Kabir Town. The
          developers have recently launched King&apos;s Town sector B,
          indicating further expansion of the project. They have also introduced
          a new payment plan specifically for the 3 Marla commercial plots in
          Sector B.
          <br />
          One significant aspect of King&apos;s Town is its authenticity, as it
          is approved by the Lahore Development Authority (LDA). This approval
          ensures that the project meets the necessary standards and
          regulations. Furthermore, Al-Kabir Developers guarantee timely
          delivery of the project, instilling confidence in potential buyers and
          investors.
          <br />
          The towns design focuses on the convenience of residents, with ongoing
          construction work assigning plots and constructing quality houses
          equipped with essential amenities.
          <br />
          The location of Kings Town is highly accessible, featuring wide roads,
          well-managed streets, and aesthetically pleasing architecture.
          Al-Kabir Developers have launched this project with the aim of
          providing comprehensive facilities and a comfortable living experience
          for their customers.
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
            King&apos;s Town Phase 1 Location
          </h3>
          <p className="text-gray">
            It is good news for all the eager customers that King&apos;s town
            Lahore is an LDA approved housing society. Thus it is a safe
            investment opportunity for all those who wish to earn a stable
            revenue. <br />
            Furthermore, Al-Kabir developers have the total land endorsement
            rights reserved even before the commencement of the project. This
            special feature has made this housing society a secure venture for
            all the investors out there. <br />
          </p>
          <ul className="ml-[50px] list-disc text-gray">
            <li>5 min Drive from Lahore Ring Road</li>
            <li>3 min drive from Sharif Medical City Road</li>
            <li>19 min drive from Multan Road</li>
            <li>14 min drive from Canal Road</li>
            <li>9 min Drive from Defence Road</li>
            <li>
              Next to Bahria Orchard Lahore, and nearest to Superior University
            </li>
          </ul>
        </div>
        <div
          className="w-[90%] h-full flex items-center justify-center
                        lg:w-[40%]"
        >
          <img
            src="/images/dayimMarketing/societies/al-kabir/kings-town/gallery-3.png"
            alt=""
            className="h-full w-full lg:h-[400px]  rounded-md object-contain"
          />
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className=" min-h-[400px] flex flex-col gap-5 items-center justify-center bg-[#f7f7f7] py-20
                    lg:min-h-[500px]"
      >
        <h3 className="text-4xl font-semibold text-center">
          A Project of Al Kabir Developers{" "}
        </h3>
        <p
          className=" text-xl text-gray text-justify w-[80%]
                        lg:w-[60%]"
        >
          It is great to hear that Al-Kabir Developers have successfully
          delivered Phase-I and Phase-II of Al-Kabir Town before the allotted
          time, and Phase-III (King&apos;s Town) was also delivered on schedule.
          The development of Sector B is progressing at a fast pace, indicating
          the commitment of the developers to timely completion. <br />
          The location feasibility, safe premises, and the reputation of the
          developers contribute to the authenticity and appeal of these
          projects. The trust and confidence of prestigious customers are
          enhanced by the renowned name of the developers. Al-Kabir Developers
          have established themselves as skilled professionals in the real
          estate industry in Pakistan. Their understanding of the market and
          customer preferences enables them to deliver what their customers
          desire.
          <br />
          The combination of location, offerings, and residential experience
          provided by Al-Kabir Developers makes their projects some of the best
          property deals available in Lahore. The team of architects, engineers,
          and workers employed by the developers is dedicated to building and
          redefining the residential infrastructure of the city.
          <br />
          In addition to Al-Kabir Town and King&apos;s Town, Al-Kabir Developers
          have another esteemed project called Maryam Town, located on main
          Raiwind Road in Lahore. This further showcases their presence and
          commitment to transforming the real estate landscape in Pakistan. They
          strive to be innovators in the industry, bringing new ideas and
          approaches to their projects.
          <br />
        </p>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className="flex flex-col-reverse items-center justify-center w-full p-[20px] gap-5 bg-white
                          lg:px-[200px] lg:flex-row md:min-h-[500px] lg:min-h-[700px] "
      >
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
            society is equipped with all the amenities that are needed.
            Furthermore, Al Kabir town is located at a 2 min drive away from
            Raiwind City. Some other key landmarks that are available in the
            same area are:
          </p>
          <ul className="ml-[50px] list-disc text-gray">
            <li>Superior University</li>
            <li>Al Kabir Town Phase 2</li>
            <li>Dream Housing</li>
            <li>Lake City</li>
          </ul>
        </div>
        <div
          className="w-[90%] h-full flex items-center justify-center
                        lg:w-[40%]"
        >
          <img
            src="/images/dayimMarketing/societies/al-kabir/kings-town/gallery-8.png"
            alt=""
            className="h-full w-full lg:h-[400px]  rounded-md object-contain"
          />
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
              { title: "Golf Enclave " },
              { title: "Sector - A " },
              { title: "Sector - B" },
              { title: "Ali Block " },
              { title: "Awais Qarni Block " },
            ]}
          />
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className=" bg-white py-10"
      >
        <div className="w-[90%] mx-auto flex flex-col items-center justify-center">
          <div className="text-center text-xl text-second py-10">
            <h3 className="font-bold text-4xl text-center text-black">
              Payment Plan
            </h3>
            {/* <h4>Golf Enclave || Sector A || Sector B</h4>               */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/kings-town/payment-plan1.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/kings-town/payment-plan2.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/kings-town/payment-plan3.jpg"
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
            "/images/dayimMarketing/societies/al-kabir/kings-town/gallery-1.png",
            "/images/dayimMarketing/societies/al-kabir/kings-town/gallery-2.png",
            "/images/dayimMarketing/societies/al-kabir/kings-town/gallery-3.png",
            "/images/dayimMarketing/societies/al-kabir/kings-town/gallery-4.png",
            "/images/dayimMarketing/societies/al-kabir/kings-town/gallery-5.png",
            "/images/dayimMarketing/societies/al-kabir/kings-town/gallery-6.png",
            "/images/dayimMarketing/societies/al-kabir/kings-town/gallery-7.png",
            "/images/dayimMarketing/societies/al-kabir/kings-town/gallery-8.png",
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
