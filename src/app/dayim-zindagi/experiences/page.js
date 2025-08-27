"use client";

import { motion } from "framer-motion";
import NavBar from "../components/Navbar";
import MainFooter from "../components/footer/MainFooter";
import Image from "next/image";

function Experiences() {
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

  // Reusable section component
  const Section = ({ img, title, desc, children, reverse }) => (
    <motion.section
      initial="hide"
      whileInView="show"
      variants={b_t_animation}
      className={`flex flex-col items-center gap-14 px-5 w-full mt-20 
        ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"} lg:gap-32 md:px-28`}
    >
      <div className="lg:w-[50%] md:w-[100%] md:h-[400px] relative w-full h-[300px]">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          priority={false}
        />
      </div>
      <div className="flex flex-col lg:w-[50%] md:w-[100%]">
        <h2 className="text-4xl font-bold text-second">{title}</h2>
        <p className="text-gray text-lg mt-10 md:w-[60%]">{desc}</p>
        {children}
      </div>
    </motion.section>
  );

  return (
    <div>
      <NavBar videoBg={false} />

      {/* Hero Section */}
      <section
        id="section2"
        className="h-[300px] bg-white flex items-center justify-center lg:h-[500px]"
      >
        <motion.div
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          className="w-full flex items-center justify-center"
        >
          <div className="relative h-[400px] w-[400px] hidden lg:inline-flex">
            <Image
              src="/images/dsa/dayim_logo_gray2.jpeg"
              alt="Dayim Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <p className="text-second text-2xl w-[90%] font-semibold leading-normal drop-shadow-md text-justify lg:text-4xl lg:w-[60%] lg:ml-[-180px]">
            Enjoy boundless possibilities for fun including shopping in the
            brand-new shopping centre or carefree play in the peaceful
            pedestrian neighbourhood.
          </p>
        </motion.div>
      </section>

      {/* Hospitals */}
      <Section
        img="/images/dsa/sliders/home3/Hospitals.jpg"
        title="Hospitals"
        desc="An institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process."
      >
        <ul className="list-disc ml-5 mt-5 text-gray">
          <li>
            <a href="https://goo.gl/maps/pEFSYuKxbo4mkb8A8" target="_blank">
              Sharif Medical Hospital
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/3pWmyF8XAnsGNvjg7" target="_blank">
              Bahria Orchard Hospital
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/BmKhjf2wi1fGNJNp8" target="_blank">
              Bahria Hospital
            </a>
          </li>
        </ul>
      </Section>

      {/* Shopping Malls */}
      <Section
        img="/images/dsa/sliders/home3/shopping.jpg"
        title="Shopping Malls"
        desc="A shopping mall is no longer just a place to go to buy something, it's a community and entertainment center."
        reverse
      >
        <ul className="list-disc ml-5 mt-5 text-gray">
          <li>
            <a href="https://goo.gl/maps/tCcpD4zeKaWbnQMU7" target="_blank">
              Lake City Mall
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/YXWFg1WtwY8aGWrm7" target="_blank">
              4 Seasons
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/pvbWP4nphiqmAgdH7" target="_blank">
              Jasmine Mall
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/RWxJsKJWmgRUfR1w6" target="_blank">
              Galaxy Supermarket
            </a>
          </li>
        </ul>
      </Section>

      {/* Restaurants */}
      <Section
        img="/images/dsa/sliders/home3/Restaurant.png"
        title="Restaurants"
        desc="A restaurant is generally an establishment where the public may obtain meals or refreshments."
      >
        <ul className="list-disc ml-5 mt-5 text-gray">
          <li>
            <a href="https://goo.gl/maps/x6zWouyjNU3rZGXf6" target="_blank">
              Villa The Grand Buffet
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/1Hgkd4CesCfdC5Ss5" target="_blank">
              Poet Boutique Restaurant
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/Mx4yRZ6g8dg43BiaA" target="_blank">
              Bundu Khan
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/3R8UgJkh77GRQvaN6" target="_blank">
              Jade Café
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/bTZKZxyp6ZfhHsxf7" target="_blank">
              NY212
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/MRzvGHxvgjE9pp2X9" target="_blank">
              Daily Deli
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/s9pJxbeVfmCx9EU86" target="_blank">
              Layers
            </a>
          </li>
        </ul>
      </Section>

      {/* Entertainment */}
      <Section
        img="/images/dsa/sliders/home3/entertainment.jpg"
        title="Entertainment"
        desc="Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight."
        reverse
      >
        <h3 className="mt-5 font-bold text-xl text-second">Cinemas</h3>
        <ul className="list-disc ml-5 text-gray">
          <li>
            <a href="https://goo.gl/maps/pbKtWGqEJPx9kK6c8" target="_blank">
              The Arena Cinema
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/erMwqnw3MAoKRznX7" target="_blank">
              Cinepax Lake City
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/Rp6jn2cGiwwhnYDC8" target="_blank">
              We Jump Lake City
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/k4TQKLEfXo5jFUF59" target="_blank">
              Winter Land Bahria Town
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/vXaEZ9xHrJWc2vsAA" target="_blank">
              Bahria Orchard Arena
            </a>
          </li>
        </ul>

        <h3 className="mt-5 font-bold text-xl text-second">Gyms</h3>
        <ul className="list-disc ml-5 text-gray">
          <li>
            <a href="https://goo.gl/maps/TMutLMcrjQhy1bn86" target="_blank">
              Fit X Gym
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/8zgN71zNM6cCiXRn6" target="_blank">
              LRN Fitness (Only for ladies and families)
            </a>
          </li>
        </ul>
      </Section>

      {/* Universities */}
      <Section
        img="/images/dsa/sliders/home3/Education.jpg"
        title="Universities"
        desc="A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study."
      >
        <ul className="list-disc ml-5 mt-5 text-gray">
          <li>
            <a href="https://goo.gl/maps/FmWMmVD6gGwedpTy7" target="_blank">
              Beaconhouse National University
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/Pew9KJSeccgcVC7X9" target="_blank">
              Superior University
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/Jyon1GMXEzCjf62h8" target="_blank">
              Riphah International University
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/oytx2BV5Gh7ZRaq26" target="_blank">
              University of Lahore
            </a>
          </li>
        </ul>
      </Section>

      {/* Schools */}
      <Section
        img="/images/dsa/sliders/home3/school.jpg"
        title="Schools"
        desc="A school is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers."
        reverse
      >
        <ul className="list-disc ml-5 mt-5 text-gray">
          <li>
            <a href="https://goo.gl/maps/T2vy3dYPjBa99p1k8" target="_blank">
              American Lycetuff
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/t7QrQArP2utMM5c1A" target="_blank">
              Little Paradise Cadet School
            </a>
          </li>
        </ul>
      </Section>

      {/* Parks */}
      <Section
        img="/images/dsa/sliders/home3/parks.jpg"
        title="Parks"
        desc="A park is an area of natural, semi-natural or planted space set aside for human enjoyment and recreation or for the protection of wildlife or natural habitats."
      >
        <ul className="list-disc ml-5 mt-5 text-gray">
          <li>
            <a href="https://goo.gl/maps/qdWdPYiTT5URnQd89" target="_blank">
              A and B Block Park Al Kabir Town phase 2
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/ZSMFxwCGSXPN7ZRk8" target="_blank">
              Lake City Park
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/KLLvbpgoiV1CJUnE7" target="_blank">
              Safari Park
            </a>
          </li>
        </ul>
      </Section>

      {/* Pharmacies */}
      <Section
        img="/images/dsa/sliders/home3/Pharmacy.jpg"
        title="Pharmacies"
        desc="The science and art concerned with the preparation and standardization of drugs."
        reverse
      >
        <ul className="list-disc ml-5 mt-5 text-gray">
          <li>
            <a href="https://goo.gl/maps/uAW1abXx3YZKwq4EA" target="_blank">
              Al-Hafiz Pharmacy
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/JKHiqyw6ZFMSiAHq5" target="_blank">
              City Pharmacy
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/nszyDMGuwNi6n3rP9" target="_blank">
              Green Plus Pharmacy
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/CSbZTrmBoinix1iX6" target="_blank">
              Mahmood Pharmacy
            </a>
          </li>
          <li>
            <a href="https://goo.gl/maps/oypVNsqYX2fEV8ga6" target="_blank">
              Fazal Din Pharmacy ADDA Plot
            </a>
          </li>
        </ul>
      </Section>

      <footer>
        <MainFooter />
      </footer>
    </div>
  );
}

export default Experiences;
