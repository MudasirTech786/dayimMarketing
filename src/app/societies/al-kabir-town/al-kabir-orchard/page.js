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
          src="/videos/dm/al-kabir-orchard-cover.mp4"
          autoPlay
          loop
          muted
          className="h-full w-full object-cover"
        />
        <div className="absolute flex items-center top-0 h-full w-full px-[5%] z-10">
          <div className=" w-[60%]  mx-auto flex flex-col items-center justify-center gap-5">
            <img
              src="/images/dayimMarketing/societies/al-kabir/logos/al-kabir-orchard.png"
              className="h-[150px] hidden md:block"
              alt=""
            />
            <h2
              className="text-white font-bold  w-full text-3xl text-center  
                            lg:text-4xl md:text-4xl  md:mt-0"
            >
              Al Kabir Orchard{" "}
            </h2>
            <h3 className="text-white font-bold  w-full text-xl text-center ">
              ( Kala Shah Kaku ){" "}
            </h3>
            <Link
              href="/contact"
              target="_blank"
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
        className="bg-white min-h-[400px] flex flex-col gap-5 items-center justify-center mt-[30px]
                    lg:min-h-[500px] lg:mt-10"
      >
        <h3 className="text-4xl font-semibold text-center">Overview</h3>
        <p
          className=" text-xl text-gray text-justify w-[80%]
                        lg:w-[60%]"
        >
          It is a residential and commercial development that includes a variety
          of plot sizes and types of properties. The development includes 3
          marla, 5 marla, 8 marla, and 1 kanal residential plots, as well as
          commercial spaces, apartments, and villas. <br />
          <br />
          Each block offers a unique selection of properties, catering to
          different needs and preferences of residents and investors. It is a
          well-planned and well-built community that offers a comfortable and
          convenient living experience to its residents.
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
          <h3 className="font-bold text-4xl ">Al-Kabir Orchard Developer</h3>
          <p className="text-gray">
            Al Kabir Developers are a well-renowned developer in the real estate
            industry, known for their unique and affordable projects. Their main
            goal is to provide individuals with limited budgets the opportunity
            to own their dream homes and live comfortably. With this mission in
            mind, the Al Kabir Developers have successfully completed 7 real
            estate projects in Lahore, earning a reputation for fulfilling their
            commitments to clients and delivering projects on time. This Project
            is their latest development that promises to be a great addition to
            their portfolio of successful projects. They are committed to
            providing their clients with quality homes and outstanding customer
            service, making it a preferred choice for many customers looking for
            a place to call home. <br />
            <br />
            The Al Kabir Developers have delivered the following projects in
            Lahore:
          </p>
          <ul className="ml-[50px] list-disc text-gray">
            <li>Al Kabir Town Phase 1</li>
            <li>Al Kabir Town Phase 2</li>
            <li>King&apos;s Town Phase 1</li>
            <li>King&apos;s Town Phase 2</li>
            <li>Maryam Town</li>
            <li>Al Kabir Orchard</li>
          </ul>
        </div>
        <div
          className="w-[90%] h-full flex items-center justify-center
                        lg:w-[40%]"
        >
          <img
            src="/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/gallery-1.jpg"
            alt=""
            className="h-full w-full lg:h-[400px]  rounded-md object-cover"
          />
        </div>
      </motion.section>

      {/* <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}  
        className=' bg-white py-10'      
      >        
        <div className='w-[90%] mx-auto'>
            <h3 className='font-bold text-4xl text-center text-second'>Blocks</h3>            
            <TextSlider data={[
              {'title':'A Block'},
              {'title':'B Block'},
              {'title':'C Block'},
              {'title':'D Block'},
              {'title':'Shalimar Block'},
            ]} />
        </div>        
      </motion.section>       */}
      {/* done above */}

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
            {/* <h4>A - Block </h4>               */}
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/al-kabir1-orchard1.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/al-kabir1-orchard2.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/al-kabir1-orchard3.jpg"
                alt=""
                className="h-full w-full"
              />
            </Link>
            <Link href={"/contact"}>
              <img
                src="/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/al-kabir1-orchard4.jpeg"
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
            "/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/gallery-2.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/gallery-3.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/gallery-4.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/gallery-5.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/gallery-6.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/gallery-7.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/gallery-8.jpg",
            "/images/dayimMarketing/societies/al-kabir/al-kabir-orchard/gallery-1.jpg",
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
