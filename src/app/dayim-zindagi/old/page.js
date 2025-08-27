import React from "react";

function Home() {
  return (
    <div>
      {/* banner starts */}
      <div className="bg-home-banner bg-center bg-no-repeat h-[400px] flex flex-col items-center justify-center gap-3">
        <h3
          className="text-[#d7ad4b] text-2xl font-bold uppercase text-center
                      lg:text-4xl"
        >
          Dayim Signature Apartments
        </h3>
        <h4 className="font-semibold text-2xl text-center uppercase letter tracking-widest	">
          Modern Living
        </h4>
        <p
          className="text-center tracking-widest text-2xl font-Tangerine 
                      lg:text-4xl"
        >
          “Modern Conveniences, Entertainment & <br />
          <span className="text-[#d7ad4b]">Modern Living</span> <br />
          in the Heart of the Lahore. <br />
          Because location really is everything!”
        </p>
        <button className="bg-[#d7ad4b] px-5 py-2 rounded-md uppercase font-semibold hover:bg-white hover:text-[#d7ad4b]">
          Contact us
        </button>
      </div>
      {/* banner ends */}

      {/* sub banner starts */}
      <div>
        <p
          className="bg-[#7c7c7c]  font-semibold p-2 text-center 
                      lg:p-5 lg:text-3xl"
        >
          Choose The Dayim For{" "}
          <span className="text-[#d7ad4b]">Best Deals</span>
        </p>
      </div>
      {/* sub banner ends */}

      {/* section 2 starts */}
      <div
        className="grid grid-cols-1 p-5 items-center justify-center gap-10
                      lg:px-[200px] lg:py-10 md:grid-cols-2"
      >
        <div className="space-y-5 text-sm">
          <h2 className="font-bold text-2xl capitalize">
            Welcome To Dayim Signature Apartments
          </h2>
          <p>
            DAYIM SIGNATURE APARTMENT is a high-end luxury apartment, being
            developed by DAYIM MARKETING. Given its location in one of the
            central neighborhoods of Lahore, the residents of this project will
            be surrounded by all the main attractions of the city.
          </p>
          <p>
            DAYIM SIGNATURE APARTMENT is an LDA - approved project provides
            contemporary, elegant and spacious living spaces that are designed
            to cater to the urbanities’ modern lifestyle, complemented with
            traditional values of living.
          </p>
          <p>
            The exquisite studio, one bedroom, and two bedroom apartments of
            DAYIM SIGNATURE APARTMENT, come with a separate kitchen, lounge that
            are designed to exude luxurious sophistication. There is an easy
            instalment plan for these apartments, which will help you secure
            these ideal accommodations where you can create new beginnings for
            you and your loved ones.
          </p>
        </div>

        <div>
          <img
            src="/images/1.jpg"
            className="h-[300px] w-[500px] rounded-2xl"
          />
        </div>
      </div>
      {/* section 2 ends */}

      {/* section 3 starts */}
      <div
        className="bg-bg2 bg-center bg-no-repeat grid grid-cols-1 p-5 items-center justify-center gap-10
                      lg:px-[200px] lg:py-10 md:grid-cols-2"
      >
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d109011.51534866072!2d74.0342272972656!3d31.369743699999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3918ff36424bd035%3A0x5c4cd1550c85845e!2sDayim%20Marketing!5e0!3m2!1sen!2s!4v1682854174960!5m2!1sen!2s"
            className="w-full h-[500px]"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <div className="text-sm px-10">
          <h3 className="text-2xl uppercase tracking-widest font-bold">
            Location
          </h3>
          <h4 className="text-xl font-semibold">
            The Most Convenient & Premium
          </h4>

          <div className="flex items-center gap-5 mt-5">
            <img src="/images/logo1.png" className="w-[40px] h-[40px]" />
            <p className="text-xl">Lahore Airport - 25 minutes</p>
          </div>

          <div className="flex items-center gap-5 mt-2">
            <img src="/images/logo2.png" className="w-[40px] h-[40px]" />
            <p className="text-xl">Lahore Motorway - 20 minutes</p>
          </div>

          <div className="flex items-center gap-5 mt-2">
            <img src="/images/logo3.png" className="w-[40px] h-[40px]" />
            <p className="text-xl">Hospital - 10 minutes</p>
          </div>

          <div className="flex items-center gap-5 mt-2">
            <img src="/images/logo4.png" className="w-[40px] h-[40px]" />
            <p className="text-xl">Bahria Town - 5 minutes</p>
          </div>

          <div className="flex items-center gap-5 mt-2">
            <img src="/images/logo5.png" className="w-[40px] h-[40px]" />
            <p className="text-xl">Ring Road - 2 minutes</p>
          </div>

          <div className="flex items-center gap-5 mt-2">
            <img src="/images/logo6.png" className="w-[40px] h-[40px]" />
            <p className="text-xl">Superior university - 3 minutes</p>
          </div>

          <div className="flex items-center gap-5 mt-2">
            <img src="/images/logo7.png" className="w-[40px] h-[40px]" />
            <p className="text-xl">Markets - Walking Distance</p>
          </div>
        </div>
      </div>
      {/* section 3 ends */}

      {/* sub banner starts */}
      <div>
        <p
          className="bg-[#7c7c7c]  font-semibold p-2 text-center uppercase text-[#d7ad4b] 
                      lg:p-5 lg:text-3xl"
        >
          Typical Apartment&apos;s Isometrics
        </p>
      </div>
      {/* sub banner ends */}

      {/* section 4 starts */}
      <div
        className="grid grid-cols-1 p-5 items-center justify-center gap-10 bg-bg1 bg-center bg-no-repeat
                      lg:py-10 md:grid-cols-2"
      >
        <div
          className="space-y-5 text-sm
                        lg:pl-[200px]"
        >
          <h2 className="font-bold text-2xl uppercase">Studio Apartment</h2>
          <h3 className="font-bold">DELUEX</h3>
          <p>
            AREA = 365 SQFT <br />
            A: BED + LIVING 12&apos;-9&quot; X 18&apos;-3 <br />
            B: BATH 5&apos;-9&quot; X 7&apos;-0&quot;
          </p>

          <h3 className="font-bold">EXECUTIVE</h3>
          <p>
            AREA = 382 SQFT <br />
            A: BED + LIVING 16&apos;-9&quot; X 18&apos;-3&quot; <br />
            B: BATH 5&apos;-9&quot; X 7&apos;-0&quot;
          </p>
        </div>

        <div className="bg-red-400">
          <img
            src="/images/25.png"
            className="h-[400px] w-[100%] rounded-2xl"
          />
        </div>
      </div>
      {/* section 4 ends */}

      {/* section 4 sub section starts */}
      <div
        className="grid grid-cols-1 p-5 gap-10
                      md:grid-cols-2"
      >
        <div className="relative">
          <img src="/images/b1.png" className="w-full h-full" />
          <span className="absolute top-[85%] right-0 bg-[#d7ad4b] px-14 py-3 text-white font-bold text-xl">
            Bedroom
          </span>
        </div>
        <div className="relative">
          <img src="/images/b2.png" className="w-full h-full" />
          <span className="absolute top-[85%] right-0 bg-[#d7ad4b] px-14 py-3 text-white font-bold text-xl">
            Lounge
          </span>
        </div>
      </div>
      {/* section 4 sub section ends */}

      {/* section 5 starts */}
      <div
        className="grid grid-cols-1 p-5 items-center justify-center gap-10 bg-bg1 bg-center bg-no-repeat
                      lg:py-10 md:grid-cols-2"
      >
        <div
          className="space-y-5 text-sm
                        lg:pl-[200px]"
        >
          <h2 className="font-bold text-2xl uppercase">1 Bed Apartment</h2>
          <h3 className="font-bold">DELUEX</h3>
          <p>
            AREA = 515 SQFT <br />
            A: LIVING ROOM 13&apos; - 1.5&quot; X 11&apos; - 0&quot; <br />
            B: KITCHEN 5&apos;-3&quot; X 9&apos;-1.5&quot; <br />
            C: BEDROOM 10&apos; X 12&apos; <br />
            D: BATH 8&apos;-9&quot; X 6&apos;-0&quot; <br />
          </p>

          <h3 className="font-bold">EXECUTIVE</h3>
          <p>
            AREA = 538 SQFT <br />
            A: LIVING ROOM 15&apos; - 9&quot; X 11&apos; - 0&quot; <br />
            B: KITCHEN 5&apos;-3&quot; X 9&apos;-1.5&quot; <br />
            C: BEDROOM 10&apos; X 12&apos; <br />
            D: BATH 8&apos;-9&quot; X 6&apos;-0&quot; <br />
          </p>
        </div>

        <div className="bg-red-400">
          <img
            src="/images/28.jpg"
            className="h-[400px] w-[100%] rounded-2xl"
          />
        </div>
      </div>
      {/* section 5 ends */}

      {/* section 5 sub section 1 starts */}
      <div
        className="grid grid-cols-1 p-5 gap-10
                      md:grid-cols-2"
      >
        <div className="relative">
          <img src="/images/b3.jpg" className="w-full h-full" />
          <span className="absolute top-[85%] right-0 bg-[#d7ad4b] px-14 py-3 text-white font-bold text-xl">
            Lounge
          </span>
        </div>
        <div className="relative">
          <img src="/images/b4.jpg" className="w-full h-full" />
          <span className="absolute top-[85%] right-0 bg-[#d7ad4b] px-14 py-3 text-white font-bold text-xl">
            Lounge
          </span>
        </div>
      </div>
      {/* section 5 sub section 1 ends */}
      {/* section 5 sub section 2 starts */}
      <div
        className="grid grid-cols-1 p-5 gap-10
                      md:grid-cols-2"
      >
        <div className="relative">
          <img src="/images/b5.jpg" className="w-full h-full" />
          <span className="absolute top-[85%] right-0 bg-[#d7ad4b] px-14 py-3 text-white font-bold text-xl">
            KITCHEN
          </span>
        </div>
        <div className="relative">
          <img src="/images/b6.jpg" className="w-full h-full" />
          <span className="absolute top-[85%] right-0 bg-[#d7ad4b] px-14 py-3 text-white font-bold text-xl">
            Bedroom
          </span>
        </div>
      </div>
      {/* section 5 sub section 1 ends */}
      {/* section 5 sub section 1 starts */}
      <div
        className="grid grid-cols-1 p-5 gap-10
                      md:grid-cols-2"
      >
        <div className="relative">
          <img src="/images/b7.jpg" className="w-full h-full" />
          <span className="absolute top-[85%] right-0 bg-[#d7ad4b] px-14 py-3 text-white font-bold text-xl">
            Bathroom
          </span>
        </div>
      </div>
      {/* section 5 sub section 1 ends */}

      {/* section 6 starts */}
      <div
        className="grid grid-cols-1 p-5 items-center justify-center gap-10 bg-bg1 bg-center bg-no-repeat
                      lg:py-10 md:grid-cols-2"
      >
        <div
          className="space-y-5 text-sm
                        lg:pl-[200px]"
        >
          <h2 className="font-bold text-2xl uppercase">Rooftop Cafe</h2>
          <p>
            An exquistic cafe / Chef&apos;s Kitchen with a spacious in-door
            seating along with outdoor seating area has been provided to support
            your busy life style. From quick meals delivered to your apartments,
            to casual dine-in and BBQ Nights with your family and friends or
            just a coffee or snacks for your guests, the on-site CAFE is there
            to meet your needs.
          </p>
        </div>

        <div className="bg-red-400">
          <img
            src="/images/34.jpg"
            className="h-[400px] w-[100%] rounded-2xl"
          />
        </div>
      </div>
      {/* section 6 ends */}

      {/* sub banner starts */}
      <div>
        <p
          className="bg-[#7c7c7c]  font-semibold p-2 text-center 
                      lg:p-5 lg:text-3xl"
        >
          FACILITIES & AMENITIES
        </p>
      </div>
      {/* sub banner ends */}

      {/* section 7 starts */}
      <div className="p-5">
        <div
          className="grid grid-cols-1 items-center 
                        md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/images/fl1.PNG" className="h-[130px]" />
            <h3 className="font-bold text-xl">Mobile Application</h3>
            <p className="text-center">Installment and event updates</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/images/fl2.PNG" className="h-[130px]" />
            <h3 className="font-bold text-xl">Maintenance</h3>
            <p className="text-center">Free maintenance upto 1 year</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/images/fl3.PNG" className="h-[130px]" />
            <h3 className="font-bold text-xl">RoofTop CAFE</h3>
            <p className="text-center">RoofTop CAFE and BBQ for residents</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/images/fl4.PNG" className="h-[130px]" />
            <h3 className="font-bold text-xl">Fire Sprinkler System</h3>
            <p className="text-center">Fire Resistant Fixtures</p>
          </div>
        </div>

        <div
          className="grid grid-cols-1 items-center mt-10
                        md:grid-cols-2 lg:grid-cols-4"
        >
          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/images/fl5.PNG" className="h-[130px]" />
            <h3 className="font-bold text-xl">Security</h3>
            <p className="text-center">
              24/7 security ensuring security for residents
            </p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/images/fl6.PNG" className="h-[130px]" />
            <h3 className="font-bold text-xl">Smart Homes</h3>
            <p className="text-center">Smart entry-system for residents</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/images/fl7.PNG" className="h-[130px]" />
            <h3 className="font-bold text-xl">Power Backup</h3>
            <p className="text-center">24/7 Back-up generators</p>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <img src="/images/fl8.PNG" className="h-[130px]" />
            <h3 className="font-bold text-xl">Lighting</h3>
            <p className="text-center">
              Emergency efficient lighting with LED&apos;s sensors lights{" "}
            </p>
          </div>
        </div>
      </div>
      {/* section 7 ends */}

      {/* Footer Starts */}
      <div className="p-5 bg-black text-white">
        <div
          className="grid grid-cols-1 items-start justify-center mt-10 gap-5
                        md:grid-cols-3 lg:grid-cols-5"
        >
          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl text-[#d7ad4b]">HEAD OFFICE</h3>
            <p className="text-center mt-3">
              66-B, 3/F MAIN COMMERCIAL SECTOR C, BAHRIA TOWN, LAHORE.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl text-[#d7ad4b]">SITE OFFICE</h3>
            <p className="text-center mt-3">
              46-47, BROADWAY COMMERCIAL, AL KABIR TOWN PHASE2.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl text-[#d7ad4b]">USA OFFICE</h3>
            <p className="text-center mt-3">
              Suite # 368, 30 lake avenue Riverhead, NY, 11901.
            </p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl text-[#d7ad4b]">CONTACT</h3>
            <p className="text-center mt-3">+1(718)715-8208</p>
            <p className="text-center mt-3">+1(631)727-6200</p>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h3 className="font-bold text-xl text-[#d7ad4b]">
              24/7 SALES CENTRE
            </h3>
            <p className="text-center mt-3">030-851-111-76</p>
          </div>
        </div>
      </div>
      {/* Footer Ends */}
    </div>
  );
}

export default Home;
