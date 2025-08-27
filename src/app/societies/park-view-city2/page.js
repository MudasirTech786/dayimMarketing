"use client";

import NavBar from '@/app/dmComponents/Navbar';
import MainFooter from '@/app/dmComponents/footer/MainFooter';
import DiscoverSection from '@/app/dmComponents/home/DiscoverSection';
import {motion} from 'framer-motion'

import Link from 'next/link'
import AmenitiesItem from './AmenitiesItem';
import TextSlider from '@/app/dmComponents/sliders/TextSlider';
import ImageGallery from '@/app/dmComponents/ImageGallery';




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
    
      <div className='h-[400px] w-full relative overflow-hidden
                      md:h-[500px] lg:h-screen'>
        <div className='absolute top-0 h-full w-full bg-black bg-opacity-50'></div>        
        <video 
          src='/videos/dm/park-view-city-cover2.mp4' 
          autoPlay 
          loop 
          muted 
          className='h-full w-full object-cover' 
        />  

        <div className='absolute flex items-center top-0 h-full w-full px-[5%] z-10'>
          <div className=' w-[60%]  mx-auto flex flex-col items-center justify-center gap-5'>
            <h2 className='text-white font-bold  w-full text-3xl text-center mt-10 
                            lg:text-5xl md:text-4xl  md:mt-0'>Park View City</h2>
            <p className='text-white text-2xl font-bold text-center'>Get started in few clicks</p>
            <Link href="/contact" className='border-2 border-white py-3 px-8 text-white font-bold text-xl hover:scale-110 transition'>              
              Contact Us
            </Link>
          </div>
        </div>
      </div>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}         
        className='bg-white min-h-[400px] flex flex-col gap-5 items-center justify-center mt-[30px]
                    lg:min-h-[500px] lg:mt-0'       
      >
        <h3 className='text-4xl font-semibold text-center'>Overview</h3>
        <p className=' text-xl text-gray text-justify w-[80%]
                        lg:w-[60%]'>Park View City Lahore is a prestigious housing project developed by the Vision Group and offers a range of residential and commercial plots for interested buyers and investors.
                        Spread over a vast land area of 7000 Kanals, Park View City Lahore is designed to provide luxury, comfort, and a modern lifestyle to its residents. The project includes residential plots, commercial plots, Park View Villas, and farmhouses, catering to different preferences and needs.
                        The Vision Group aims to create a project that combines futuristic architecture with a high-quality and comfortable lifestyle. The emphasis is on providing a friendly neighborhood environment while ensuring the security and well-being of the residents. The project is planned to meet the needs of today while keeping in mind the vision of a bright future.
                        Accessibility and affordability are also key considerations in the planning of Park View City Lahore. The project aims to make luxurious living accessible to a wider range of people, allowing them to fulfill their dream of living in high-quality accommodation.
                        Overall, Park View City Lahore offers a blend of luxury, comfort, style, and affordability, making it an attractive option for individuals looking for a well-planned and desirable housing project in Lahore.                        
                        </p>
      </motion.section>

      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className='flex flex-col-reverse items-center justify-center w-full p-[20px] gap-5 bg-[#f7f7f7]
                          lg:px-[200px] lg:flex-row md:min-h-[500px] lg:min-h-[700px] '>
        <div className='w-[90%] h-full flex flex-col items-start justify-center gap-5
                        lg:w-[60%]'>
          <h3 className='font-bold text-4xl '>Park View City</h3>
          <p className='text-gray'>A one of its kind project, Park View City, is helmed by the Vision Group.
            Vision group was founded by Aleem Khan, a prominent political figure, in 2012. Vision Group has gained appreciation by providing reliable living in first-class accommodation. Park view city, Islamabad, is the first project of Vision Group in the capital city and has garnered enormous fame as it touches every element of the design and seamlessly matches modern edge and refined elegance through impeccable expertise.
            Vision Group has successfully established its name in the country because of some renowned projects it has developed so far:            
          </p>          
          <ul className='list-disc ml-5 text-gray'>
              <li>Abdul Aleem Khan Foundation</li>
              <li>Park View Icon located at I.I. Chundrigar road-Karachi</li>
              <li>Park View City in Islamabad</li>
              <li>Park View Corporate Center at Mall road-Lahore</li>
              <li>Park View Signature Apartments at Gulberg-Lahore</li>
              <li>The National School</li>
              <li>Park View Villas at Multan road-Lahore</li>
          </ul>
        </div>
        <div className='w-[90%] h-full flex items-center justify-center
                        lg:w-[40%]'>
          <img src="/images/dayimMarketing/societies/parkView/img1.webp" alt="" className='h-full w-full  rounded-md object-cover lg:h-[400px]' />
        </div>
      </motion.section>

      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className='flex flex-col items-center justify-center w-full p-[20px] gap-10 bg-white 
                          lg:px-[200px] lg:flex-row md:min-h-[500px] lg:min-h-[700px] '>        
        <div className='w-[90%]  h-full flex items-center justify-center 
                        lg:w-[40%]'>
          <img src="/images/dayimMarketing/societies/parkView/img2.jpg" alt="" className='h-full w-full object-cover rounded-md lg:h-[400px]' />
        </div>
        <div className='w-[90%] h-full flex flex-col items-start justify-center gap-5
                        lg:w-[60%]'>
          <h3 className='font-bold text-4xl '>Park View City Location</h3>
          <p className='text-gray'>Park View City Lahore is situated at a highly anticipated location in the city, specifically at 3-KM Thokar Niaz Baig, Multan Road. This area has been witnessing rapid development in recent years, making it a prime location for investment and residential purposes.
            The society&apos;s location offers easy access to various amenities and facilities. It is conveniently located near Thokar Niaz Baig, which is directly linked with Canal Bank Road. This connectivity provides residents with convenient access to major city hubs and is also close to the motorway, enhancing accessibility to other areas.

            In terms of neighborhood amenities, Park View City Lahore is surrounded by essential facilities such as schools, mosques, and shopping malls. This ensures that residents have easy access to everyday necessities and services.
            The society was launched in 2012 and has since become home to around 4,500 families. These residents benefit from the society&apos;s excellent location, a wide range of facilities, and the experience of a serene lifestyle.
            Overall, Park View City Lahore&apos;s strategic location, accessibility, and availability of necessary amenities make it an attractive choice for individuals seeking a well-established and thriving housing society in Lahore.          
          </p>                    
        </div>
      </motion.section>

      {/* Slider 1 */}
      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}  
        className='w-[90%] mx-auto'      
      >        
        <h3 className='font-bold text-4xl text-center text-black'>Developed Blocks </h3>
        <TextSlider data={[
              {'title':'Tulip Block'},
              {'title':'Jade Block'},
              {'title':'Rose Block'},
              {'title':'Topaz Block'},
              {'title':'Orchard Block'},
              {'title':'Jasmine Block'},
              {'title':'Platinum Block'},
              {'title':'Diamond Block'},
              {'title':'Executive Block'},
              {'title':'Overseas Block'},
              {'title':'Tulip Overseas Block'},
              {'title':'Golf Estate Block'},
              {'title':'Sapphire Block'},
              {'title':'Pearl Block '},
              {'title':'Silver Block'},
              {'title':'Crystal Block'},
              {'title':'Broadway Commercial'},
              {'title':'Signature Apartments'},
              {'title':'The Walk'},              
            ]} />
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
      >        
        <DiscoverSection 
          heading={"Park View City "}
          subHeading={"A one of its kind project, Park View City, is helmed by the Vision Group."}
          link={"/contact"}
          // bgImage={"/images/dayimMarketing/societies/parkView/img4.png"}
          bgVideo={'/videos/dm/park-view-city-cover.mp4'}
          linkTitle={"Contact Us"}
          mapLink={"https://goo.gl/maps/R1S6NpfHsvM5bAcG9"}
        />
      </motion.section>

      {/* Amenities */}
      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className='w-full p-5 mb-10'>
          <h3 className='text-4xl text-second font-bold text-center my-10 '>Available Amenities for Each Block</h3>
          
          <div className='p-5'>
            <div className='grid grid-cols-1 items-center 
                            md:grid-cols-2 lg:grid-cols-5'>
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/school.png"} title={"School"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/park.png"} title={"Parks"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/mosque.png"} title={"Mosque"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/emergency.png"} title={"Medical Center"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/cinema.png"} title={"Cinema"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/market.png"} title={"Commercial Market"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/sewerage.png"} title={"Fully-Functioning Sewerage System"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/electricity.png"} title={"Water/Electricity/Gas Supply"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/security.png"} title={"24/7 Security"} />

              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/biodegradable.png"} title={"Eco Friendly"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/cemetery.png"} title={"Graveyard"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/cooperation.png"} title={"Business Hub"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/road.png"} title={"High-Quality Roads Infrastructure"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/wall.png"} title={"Boundary Wall"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/house.png"} title={"Gated Community"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/quality-assurance.png"} title={"Quality Development"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/lightning.png"} title={"Underground Electrification"} />
              <AmenitiesItem logo={"/images/dayimMarketing/societies/parkView/logos/arena.png"} title={"Sports Complex with Indoor and Outdoor facilities"} />

            </div>
        </div>
        
      </motion.section>

      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className='flex flex-col items-center justify-center w-full p-[20px] gap-10 bg-white 
                          lg:px-[200px] lg:flex-row md:min-h-[500px] lg:min-h-[700px] '>        
        <div className='w-[90%]  h-full flex items-center justify-center 
                        lg:w-[40%]'>
          <img src="/images/dayimMarketing/societies/parkView/img3.webp" alt="" className='h-full w-full object-cover rounded-md lg:h-[400px]' />
        </div>
        <div className='w-[90%] h-full flex flex-col items-start justify-center gap-5
                        lg:w-[60%]'>
          <h2 className='text-4xl font-bold'>Investing in Park View City </h2>
          <p>Investing in Park View City Lahore offers several perks that make it an attractive option for investors: <br />
              <span className='font-bold'>Steady Income:</span> Investing in a property in Park View City can provide a steady rental income. Many people are buying properties with the intention of renting them out, which can be a reliable source of income.<br />
              <span className='font-bold'>Capital Appreciation:</span> One of the significant advantages of investing in Park View City is the potential for capital appreciation. Over time, the value of the property is likely to increase, allowing investors to gain profit when they decide to sell it in the future.<br />
              <span className='font-bold'>Excellent Security:</span> Park View City Lahore offers top-class security measures, ensuring the safety of the property. This makes property management and regular visits hassle-free, as investors can have peace of mind knowing that their investment is well-protected.<br />
              <span className='font-bold'>Range of Investment Options:</span> The society provides various investment options to cater to different needs and preferences. Investors can choose between residential and commercial plots based on their requirements. The reasonable pricing and flexible installment plans make it convenient for investors to make their desired investments.<br />
              <span className='font-bold'>Asset Appreciation:</span> Real estate is known for its potential to appreciate in value over time. Investing in Park View City allows individuals to increase their assets and leverage the long-term growth potential of the real estate sector.<br /><br />
              
            It&apos;s important to note that while real estate generally has a track record of appreciation, it is subject to market fluctuations and trends. Conducting thorough research, consulting with real estate professionals, and analyzing market conditions are crucial steps in making informed investment decisions.<br />

            Overall, Park View City Lahore offers investment opportunities with the potential for regular income, capital appreciation, security, and a variety of options to suit different investment goals.
          </p>                    
        </div>
      </motion.section>

      {/* Gallery section */}
      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className='text-black mb-20'>        
        <ImageGallery  
          images={[
            "/images/dayimMarketing/societies/parkView/gallery-1.JPG",
            "/images/dayimMarketing/societies/parkView/gallery-2.JPG",
            "/images/dayimMarketing/societies/parkView/gallery-3.JPG",            
          ]}
        />
      </motion.section>

      {/* Footer starts */}
      <footer className=''>
        <MainFooter />
      </footer>
    </div>
  )
}

export default Contact