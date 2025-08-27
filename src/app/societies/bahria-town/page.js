"use client";

import NavBar from '@/app/dmComponents/Navbar';
import MainFooter from '@/app/dmComponents/footer/MainFooter';
import DiscoverSection from '@/app/dmComponents/home/DiscoverSection';
import {motion} from 'framer-motion'

import Link from 'next/link'




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
        <img 
          src='/images/dayimMarketing/societies/bahriaTown/bg.jpg'           
          className='h-full w-full object-cover' 
        /> 

        <div className='absolute flex items-center top-0 h-full w-full px-[5%] z-10'>
          <div className=' w-[60%]  mx-auto flex flex-col items-center justify-center gap-5'>
            <h2 className='text-white font-bold  w-full text-3xl text-center mt-10 
                            lg:text-5xl md:text-4xl  md:mt-0'>Bahria Town Lahore</h2>
            <p className='text-white text-2xl font-bold text-center'>Get started in few clicks</p>
            <Link href="/images/dayimMarketing/societies/maps/bahria-map.pdf" target='_blank' className='border-2 border-white py-3 px-8 text-white font-bold text-xl hover:scale-110 transition'>              
              Download Map
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
        <h3 className='text-4xl font-bold text-center'>Overview</h3>
        <p className=' text-xl text-gray text-justify w-[80%]
                        lg:w-[60%]'>Bahria Town is indeed one of the largest and well-known real estate and housing societies in Pakistan. It was established in the late 1990s and is headquartered in Islamabad. Over the years, Bahria Town has expanded its operations to other cities in Pakistan, including Lahore.
                        Bahria Town is renowned for its gated community concept, offering 24/7 high-level security to its residents. The society has implemented robust security measures to ensure the safety and well-being of its inhabitants. Given the security challenges that Pakistan has faced in recent years, Bahria Town strives to provide a secure living environment for its residents.
                        While it is recognized as a safe residential option, it&apos;s important to note that no place can guarantee absolute security. While Bahria Town invests significantly in security infrastructure and personnel, it&apos;s always advisable for residents to remain vigilant and adhere to personal safety precautions.
                        Overall, Bahria Town has gained a reputation for its size, amenities, and security measures, making it an attractive choice for individuals seeking a secure and well-planned living environment in Pakistan.
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
          <h3 className='font-bold text-4xl '>Bahria Town Lahore</h3>
          <p className='text-gray'>Indeed, Lahore is a historically significant city in Pakistan known for its architectural assets and cultural heritage. However, with the rapid development and population growth, the green areas of Lahore have been gradually encroached upon. Bahria Town Developments has played a significant role in restoring and preserving the greenery of Lahore while adding a modern touch to the city.
            Bahria Town Lahore has revitalized the landscape and transformed it into a vibrant and dynamic community. It offers a range of housing options, including farmhouses, classical bungalow-style homes, and luxury residences, catering to diverse lifestyles and preferences.
            One of the key factors that contribute to Bahria Town Lahore&apos;s appeal is its provision of health facilities, entertainment options, and commercial and business opportunities. The society is designed to provide residents with access to top-notch healthcare facilities, ensuring their well-being. It also offers a variety of entertainment amenities and recreational spaces for residents to enjoy.
            In terms of commercial and business opportunities, Bahria Town Lahore provides a platform for entrepreneurs and businesses to establish their ventures. It has commercial areas, shopping centers, and office spaces that cater to a range of businesses and enterprises.
            Overall, Bahria Town Lahore has created an environment that combines modernity, convenience, and a progressive lifestyle. Its focus on health facilities, entertainment, and commercial opportunities has made it an attractive and opportunistic place in Pakistan, offering a well-rounded living experience for its residents.
          </p>          
        </div>
        <div className='w-[90%] h-full flex items-center justify-center
                        lg:w-[40%]'>
          <img src="/images/dayimMarketing/societies/bahriaTown/img1.jpg" alt="" className='h-full w-full  rounded-md object-cover' />
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
          <img src="/images/dayimMarketing/societies/bahriaTown/img2.jpg" alt="" className='h-full w-full object-cover rounded-md lg:h-[400px]' />
        </div>
        <div className='w-[90%] h-full flex flex-col items-start justify-center gap-5
                        lg:w-[60%]'>
          <h3 className='font-bold text-4xl '>Bahria Town Lahore Lifestyle</h3>
          <p className='text-gray'>Bahria Town Lahore is located in the Iqbal Tehsil of Lahore and is divided into sectors A to F. Each sector is further divided into more than 30 blocks, offering a wide range of residential options to residents.
            Bahria Town Lahore is often described as an innovative and modern development within the city. It is often referred to as a <span className='font-bold text-black'>city within a city</span> due to its comprehensive infrastructure, facilities, and services that aim to provide an international standard of living to its residents.
            The society encompasses all aspects of the Lahori lifestyle and strives to maintain global standards in various spheres of life, including recreation, commerce, infrastructure, and residential living. It offers residents access to high-quality commercial centers, entertainment venues, and leisure activities.
            Commercial centers within Bahria Town Lahore provide a wide range of business and retail opportunities, catering to the needs of residents and visitors. Entertainment venues offer diverse options for leisure and recreation, ensuring that residents have access to a variety of activities and experiences.
            Furthermore, Bahria Town Lahore emphasizes the importance of providing top-notch residential facilities to its residents. The society focuses on creating well-planned and well-designed residential areas that meet international standards of comfort and livability.
            Overall, Bahria Town Lahore aims to provide its residents with the finest facilities and amenities across various aspects of life, ensuring a modern and convenient lifestyle within the society.
          </p>          
        </div>
      </motion.section>

      <motion.section
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
      >        
        <DiscoverSection 
          heading={"Bahria Town Grand Masjid "}
          subHeading={"Third-largest mosque of Pakistan and the Fourteenth largest mosque of the world."}
          link={"/contact"}
          bgImage={"/images/dayimMarketing/societies/bahriaTown/masjid.jpg"}
          linkTitle={"Contact Us"}
          mapLink={"https://goo.gl/maps/6iLdRNcQfPePhNSy5"}
        />
      </motion.section>

      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}
        className='py-20 bg-[#f7f7f7]'>        
        <div className='w-[80%] mx-auto text-center  '>
            <h3 className='font-bold text-4xl'>Grand Masjid</h3>
            <p className='md:w-[60%] text-center mx-auto mt-5 text-gray'>Bahria Town Lahore has the third-largest mosque of Pakistan and the fourteenth largest mosque of the world. This mosque is known as The Grand Jamia Masjid. It is proud of Bahria Town Lahore and a symbol of Pakistan all over the world. It is a true masterpiece with a unique and magnificent interior. It represents the traditional Islamic culture of architecture in Pakistan.</p>
            <div className='grid grid-cols-1 mt-10 gap-5
                            md:grid-cols-2 lg:grid-cols-3'>
                <div className='bg-white shadow-md py-5 px-10 hover:bg-second group'>
                    <h3 className='font-semibold text-xl group-hover:text-white'>Infrastructure</h3>
                    <p className='text-gray group-hover:text-white'>It has four minarets with a height of 165 feet each and a Grand Dome located in the center. The Grand Dome is surrounded by 20 smaller domes. Multani tiles with a size of 2.5 inches made from a special Multani Mitti and hand-placed by the craftsmen, is the most charming feature of this masterpiece. There are almost 4 million styles and it took 4 years to complete.</p>
                </div>
                <div className='bg-white shadow-md py-5 px-10 hover:bg-second group'>
                    <h3 className='font-semibold text-xl group-hover:text-white'>Inauguration</h3>
                    <p className='text-gray group-hover:text-white'>This Grand Jamia Mosque Bahria Town is designed by a Pakistani architect named Nayyar Ali Dada, it was inaugurated on 6 October 2014 on the occasion of Eid-ul-Adha. The architecture of the Grand Mosque is motivated by Badshahi Mosque, Wazir Khan and Sheikh Zayed Mosque.</p>
                </div>
                <div className='bg-white shadow-md py-5 px-10 hover:bg-second group'>
                    <h3 className='font-semibold text-xl group-hover:text-white'>Size and Cost</h3>
                    <p className='text-gray group-hover:text-white'>It can contain 25,000 worshipers indoors, while the corridor leading to the main halls can accommodate a total of 80,000. The total construction cost of over 4 billion rupees or approximately $39 million.  The mosque consists of dedicated praying areas for women, a school and an Islamic Art Gallery.</p>
                </div>                
            </div>
        </div>
      </motion.section>


      {/* Bahria Town Sectors starts */}
      <h2 className='text-center font-bold text-4xl p-[50px] capitalize'>Sectors of Lahore Bahria Town</h2>
      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
        className='flex flex-col items-center gap-14 px-5 w-full
                          lg:flex-row lg:gap-32 md:px-28'>
        <div className='lg:w-[50%] md:w-[100%] md:h-[400px] '>
          <img 
            src="/images/dayimMarketing/societies/bahriaTown/sectorA.jpg" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-second '>Sector A</h2>
          <p className='text-gray text-lg mt-10 '>It is the oldest sector of Bahria Town. It is also the most in-demand residential sector of Bahria Town Lahore. It shows the basic model of Bahria Town Lahore. It has fully smooth roads, underground electricity, gas, water; communication supplies all that give it a most modern look. Along with all these facilities, all the plots have been sold out and most have been changed to houses where families are enjoying the Bahria Town lifestyle.</p>          
          <p className='text-gray mt-5'> It has two blocks which are:</p>
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li>Babar Block</li>
            <li>Canal Block</li>            
          </ul>
        </div>
      </motion.section>


      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
        className='flex flex-col items-center gap-14 px-5 w-full mt-20
                          lg:flex-row-reverse lg:gap-32 md:px-28'>
        <div className='lg:w-[50%] md:w-[100%] md:h-[400px] '>
          <img 
            src="/images/dayimMarketing/societies/bahriaTown/sectorB.jpg" 
            alt="" 
            className='w-full h-full object-cover object-bottom'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-black '>Sector B</h2>
          <p className='text-gray text-lg mt-10 '>Bahria Town Lahore Sector B is next to Executive Lodges. It benefits from its location as it is placed in the Heart of Bahria Town. All modern facilities in Bahria Town are located just a few minutes drive away from Sector B. It is dotted with green parks and playgrounds. A complete infrastructure of underground cables and utilities make it the first of its kind in Pakistan.</p>          
          <p className='text-gray mt-5'> It has nine blocks which are:</p>
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li>Meadows Villas</li>
            <li>Ghouri Block</li>            
            <li>Ali Block </li>
            <li>Usman Block </li>
            <li>Umar Block </li>
            <li>Safari Block </li>
            <li>Shaheen Block </li>
            <li>New Shaheen Block </li>
            <li>Takbeer Block </li>
          </ul>
        </div>
      </motion.section>


      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
        className='flex flex-col items-center gap-14 px-5 w-full
                          lg:flex-row lg:gap-32 md:px-28'>
        <div className='lg:w-[50%] md:w-[100%] md:h-[400px] '>
          <img 
            src="/images/dayimMarketing/societies/bahriaTown/sectorC.jpg" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-black '>Sector C</h2>
          <p className='text-gray text-lg mt-10 '>After the success of Sector A & B, Bahria Town Lahore launched Sector C. It pledges to be the future commercial hub for the <span className='font-bold'>New Lahore</span> a term now popularly correlated with the recent new developments happening apace with the famous Lahore Canal. A part of 4 K named <span className='font-bold'>Independence Drive</span> is designated to high buildings on both sides of the 210 feet avenue giving it the much-deserved facelift. It is very popular for the business class for opportunities for investment. It brings more innovative and extra appearances to the regulated Bahria Town Developments.</p>          
          <p className='text-gray mt-5'> It has ten blocks which are:</p>
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li>Overseas- A Block</li>
            <li>Gulbahar Block </li>
            <li>Hussain Block & ext </li>
            <li>Gardenia - 1</li>
            <li>Gulmohar Block </li>
            <li>Jasmine Block </li>
            <li>Chambelli Block </li>
            <li>Tulip Block & Ext </li>
            <li>Iris Block </li>
            <li>Awais Qarni Block </li>
          </ul>
        </div>
      </motion.section>


      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
        className='flex flex-col items-center gap-14 px-5 w-full mt-20
                          lg:flex-row-reverse lg:gap-32 md:px-28'>
        <div className='lg:w-[50%] md:w-[100%] md:h-[400px] '>
          <img 
            src="/images/dayimMarketing/societies/bahriaTown/sectorD.jpg" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-black '>Sector D</h2>
          <p className='text-gray text-lg mt-10 '>It launched July 2011 and is bordered to Sector C, where thousands of families are enjoying facilities of a complete lifestyle community. There are some unique Community Centres, food courts, Gold Class Cinema, Children Care Centre and Landscape Parks which makes the lifestyle different from all over Pakistan.</p>          
          <p className='text-gray mt-5'> It has seven blocks which are:</p>
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li>AA Block </li>
            <li>BB Block </li>
            <li>CC Block </li>
            <li>DD Block </li>
            <li>EE Block </li>
            <li>Janiper Block </li>
            <li>Overseas B-1 & Ext </li>
          </ul>
        </div>
      </motion.section>


      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
        className='flex flex-col items-center gap-14 px-5 w-full
                          lg:flex-row lg:gap-32 md:px-28'>
        <div className='lg:w-[50%] md:w-[100%] md:h-[400px] '>
          <img 
            src="/images/dayimMarketing/societies/bahriaTown/sectorE.jpg" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-black '>Sector E</h2>
          <p className='text-gray text-lg mt-10 '>After the wonderful success of Sector D, the administration took the step to launch a new sector in Lahore, Sector E. It launched February 2012 and situated adjacent to Sector C & D. Pakistan&apos;s First International Theme Park is located in E sector of Bahria Town Lahore. This sector will encompass various magnitude housing with complete lifestyle facilities. The Grand Jamiah Mosque and Bahria Country Club exist just next to this sector.</p>          
          <p className='text-gray mt-5'> It has five blocks which are:</p>
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li>Rafi Block & Ext </li>
            <li>Iqbal Block </li>
            <li>Nistar Block & Ext </li>
            <li>Sharshar Ext </li>
            <li>Jinnah Block </li>
          </ul>
        </div>
      </motion.section>


      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
        className='flex flex-col items-center gap-14 px-5 w-full mt-20
                          lg:flex-row-reverse lg:gap-32 md:px-28'>
        <div className='lg:w-[50%] md:w-[100%] md:h-[400px] '>
          <img 
            src="/images/dayimMarketing/societies/bahriaTown/sectorF.jpg" 
            alt="" 
            className='h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-black '>Sector F</h2>
          <p className='text-gray text-lg mt-10 '>The community features of Sector F include International Standard Schools & Hospitals, Commercial Areas, Bahria Grand Hotel, Food Courts, Gold Class Cinema, Taj Banquets, and Sports Complex. The famous Grand Jamia Mosque and Bahria Country Club both have existed in Sector F of Bahria Town Lahore.</p>          
          <p className='text-gray mt-5'> It has ten blocks which are:</p>
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li>Touheed Block</li>
            <li>Ghazni Block</li>
            <li>Tipu Sultan Block</li>
            <li>Sikandar Block</li>
            <li>Alamgir Block</li>
            <li>Shershah Block</li>
            <li>Gazi Block </li>
            <li>Johar Block </li>
            <li>Quaid Block </li>
            <li>Talha Block </li>
          </ul>
        </div>
      </motion.section>





      {/* Footer starts */}
      <footer className='mt-20'>
        <MainFooter />
      </footer>
    </div>
  )
}

export default Contact