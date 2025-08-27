"use client";

import {motion} from 'framer-motion'

import NavBar from '../components/Navbar'
import MainFooter from '../components/footer/MainFooter'
import Link from 'next/link';

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

  return (
    <div>
        <NavBar videoBg={false} />
        
        <section
          id="section2" 
          className='h-[300px] bg-white flex items-center justify-center
                          lg:h-[500px]'>
        <motion.div 
          initial="hide"
          whileInView="show"
          variants={b_t_animation}
          className='w-full flex items-center justify-center'
        >
          <img 
            src="/images/dsa/dayim_logo_gray2.jpeg"  
            alt=""  
            className='h-[400px] w-[400px] hidden 
                    lg:inline-flex'
          />
          <p 
            className='text-second text-2xl w-[90%] font-semibold leading-normal drop-shadow-md text-justify
                        lg:text-4xl lg:w-[60%] lg:ml-[-180px]'
          >
            Enjoy boundless possibilities for fun including shopping in the brand-new shopping centre or carefree play in the peaceful pedestrian neighbourhood.
          </p>
        </motion.div>
      </section>

      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
        className='flex flex-col items-center gap-14 px-5 w-full
                          lg:flex-row lg:gap-32 md:px-28'>
        <div className='lg:w-[50%] md:w-[100%] md:h-[400px] '>
          <img 
            src="/images/dsa/sliders/home3/Hospitals.jpg" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-second '>Hospitals</h2>
          <p className='text-gray text-lg mt-10 
                        md:w-[60%]'>An institution that is built, staffed, and equipped for the diagnosis of disease; for the treatment, both medical and surgical, of the sick and the injured; and for their housing during this process.</p>          
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li><a href="https://goo.gl/maps/pEFSYuKxbo4mkb8A8" target='_blank'>Sharif Medical Hospital</a></li>
            <li><a href="https://goo.gl/maps/3pWmyF8XAnsGNvjg7" target='_blank'>Bahria Orchard Hospital </a></li>
            <li><a href="https://goo.gl/maps/BmKhjf2wi1fGNJNp8" target='_blank'>Bahria Hospital </a></li>
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
            src="/images/dsa/sliders/home3/shopping.jpg" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-second '>Shopping Malls</h2>
          <p className='text-gray text-lg mt-10 
                        md:w-[60%]'>A shopping mall is no longer just a place to go to buy something, it&apos;s a community and entertainment center.</p>          
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li><a href="https://goo.gl/maps/tCcpD4zeKaWbnQMU7" target='_blank'>Lake City Mall </a></li>
            <li><a href="https://goo.gl/maps/YXWFg1WtwY8aGWrm7" target='_blank'>4 seasons</a></li>
            <li><a href="https://goo.gl/maps/pvbWP4nphiqmAgdH7" target='_blank'>Jasmine Mall</a></li>
            <li><a href="https://goo.gl/maps/RWxJsKJWmgRUfR1w6" target='_blank'>Galaxy Supermarket</a></li>
          </ul>
        </div>
      </motion.section>


      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
        className='flex flex-col items-center gap-14 px-5 w-full mt-20
                          lg:flex-row lg:gap-32 md:px-28'>
        <div className='lg:w-[50%] md:w-[100%] md:h-[400px] '>
          <img 
            src="/images/dsa/sliders/home3/Restaurant.png" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-second '>Restaurants</h2>
          <p className='text-gray text-lg mt-10 
                        md:w-[60%]'>A restaurant is generally an establishment where the public may obtain meals or refreshments.</p>          
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li><a href="https://goo.gl/maps/x6zWouyjNU3rZGXf6" target='_blank'>Villa The Grand Buffet</a></li>
            <li><a href="https://goo.gl/maps/1Hgkd4CesCfdC5Ss5" target='_blank'>Poet Boutique Restaurant</a></li>
            <li><a href="https://goo.gl/maps/Mx4yRZ6g8dg43BiaA" target='_blank'>Bundu Khan</a></li>
            <li><a href="https://goo.gl/maps/3R8UgJkh77GRQvaN6" target='_blank'>Jade Café</a></li>
            <li><a href="https://goo.gl/maps/bTZKZxyp6ZfhHsxf7" target='_blank'>NY212</a></li>
            <li><a href="https://goo.gl/maps/MRzvGHxvgjE9pp2X9" target='_blank'>Daily Deli</a></li>
            <li><a href="https://goo.gl/maps/s9pJxbeVfmCx9EU86" target='_blank'>Layers</a></li>
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
            src="/images/dsa/sliders/home3/entertainment.jpg" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-second '>Entertainment</h2>
          <p className='text-gray text-lg mt-10 
                        md:w-[60%]'>Entertainment is a form of activity that holds the attention and interest of an audience or gives pleasure and delight.</p>
          <h3 className='mt-5 font-bold text-xl text-second'>Cinemas</h3>
          <ul className='list-disc ml-5  text-gray'>
            <li><a href="https://goo.gl/maps/pbKtWGqEJPx9kK6c8" target='_blank'>The Arena Cinema </a></li>
            <li><a href="https://goo.gl/maps/erMwqnw3MAoKRznX7" target='_blank'>Cinepax Lake City</a></li>
            <li><a href="https://goo.gl/maps/Rp6jn2cGiwwhnYDC8" target='_blank'>We Jump Lake City</a></li>
            <li><a href="https://goo.gl/maps/k4TQKLEfXo5jFUF59" target='_blank'>Winter Land Bahria Town</a></li>
            <li><a href="https://goo.gl/maps/vXaEZ9xHrJWc2vsAA" target='_blank'>Bahria Orchard Arena</a></li>
          </ul>
          
          <h3 className='mt-5 font-bold text-xl text-second'>Gyms</h3>
          <ul className='list-disc ml-5  text-gray'>
            <li><a href="https://goo.gl/maps/TMutLMcrjQhy1bn86" target='_blank'>Fit X Gym</a></li>
            <li><a href="https://goo.gl/maps/8zgN71zNM6cCiXRn6" target='_blank'>LRN Fitness (Only for ladies and families)</a></li>
          </ul>
        </div>
      </motion.section>


      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
        className='flex flex-col items-center gap-14 px-5 w-full mt-20
                          lg:flex-row lg:gap-32 md:px-28'>
        <div className='lg:w-[50%] md:w-[100%] md:h-[400px] '>
          <img 
            src="/images/dsa/sliders/home3/Education.jpg" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-second '>Universities</h2>
          <p className='text-gray text-lg mt-10 
                        md:w-[60%]'>A university is an institution of higher education, usually comprising a college of liberal arts and sciences and graduate and professional schools and having the authority to confer degrees in various fields of study.</p>          
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li><a href="https://goo.gl/maps/FmWMmVD6gGwedpTy7" target='_blank'>Beaconhouse National University</a></li>         
            <li><a href="https://goo.gl/maps/Pew9KJSeccgcVC7X9" target='_blank'>Superior University</a></li>
            <li><a href="https://goo.gl/maps/Jyon1GMXEzCjf62h8" target='_blank'>Riphah International University</a></li>
            <li><a href="https://goo.gl/maps/oytx2BV5Gh7ZRaq26" target='_blank'>University of Lahore</a></li>
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
            src="/images/dsa/sliders/home3/school.jpg" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-second '>Schools</h2>
          <p className='text-gray text-lg mt-10 
                        md:w-[60%]'> A school is an educational institution designed to provide learning spaces and learning environments for the teaching of students under the direction of teachers.</p>          
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li><a href="https://goo.gl/maps/T2vy3dYPjBa99p1k8" target='_blank'>American Lycetuff</a></li>
            <li><a href="https://goo.gl/maps/t7QrQArP2utMM5c1A" target='_blank'>Little Paradise Cadet School</a></li>
          </ul>
        </div>
      </motion.section>


      <motion.section 
        initial="hide"
        whileInView="show"
        variants={b_t_animation}        
        className='flex flex-col items-center gap-14 px-5 w-full mt-20
                          lg:flex-row lg:gap-32 md:px-28'>
        <div className='lg:w-[50%] md:w-[100%] md:h-[400px] '>
          <img 
            src="/images/dsa/sliders/home3/parks.jpg" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-second '>Parks</h2>
          <p className='text-gray text-lg mt-10 
                        md:w-[60%]'>A park is an area of natural, semi-natural or planted space set aside for human enjoyment and recreation or for the protection of wildlife or natural habitats.</p> 
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li><a href="https://goo.gl/maps/qdWdPYiTT5URnQd89" target='_blank'>A and B Block Park Al Kabir Town phase 2</a></li>
            <li><a href="https://goo.gl/maps/ZSMFxwCGSXPN7ZRk8" target='_blank'>Lake City Park</a></li>
            <li><a href="https://goo.gl/maps/KLLvbpgoiV1CJUnE7" target='_blank'>Safari Park</a></li>
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
            src="/images/dsa/sliders/home3/Pharmacy.jpg" 
            alt="" 
            className='w-full h-full object-cover'
          />
        </div>
        <div className='flex flex-col   
                        lg:w-[50%] md:w-[100%]'>
          <h2 className='text-4xl font-bold text-second '>Pharmacies</h2>
          <p className='text-gray text-lg mt-10 
                        md:w-[60%]'> The science and art concerned with the preparation and standardization of drugs.</p>          
          <ul className='list-disc ml-5 mt-5 text-gray'>
            <li><a href="https://goo.gl/maps/uAW1abXx3YZKwq4EA" target='_blank'>Al-Hafiz Pharmacy</a></li>
            <li><a href="https://goo.gl/maps/JKHiqyw6ZFMSiAHq5" target='_blank'>City Pharmacy</a></li>
            <li><a href="https://goo.gl/maps/nszyDMGuwNi6n3rP9" target='_blank'>Green Plus pharmacy</a></li>
            <li><a href="https://goo.gl/maps/CSbZTrmBoinix1iX6" target='_blank'>Mahmood pharmacy</a></li>
            <li><a href="https://goo.gl/maps/oypVNsqYX2fEV8ga6" target='_blank'>Fazal Din Pharmacy ADDA Plot</a></li>
          </ul>
        </div>
      </motion.section>


      

      <footer>
          <MainFooter />
      </footer>
    </div>
  )
}

export default Experiences