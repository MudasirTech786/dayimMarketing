"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { BiSolidChevronDown } from "react-icons/bi";
import { AiFillCaretDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar({ videoBg }) {
  const [navbar, setNavbar] = useState(false);
  const [projectCaret, setProjectCaret] = useState(false);
  const [societiesCaret, setSocietiesCaret] = useState(false);
  const [aboutCaret, setAboutCaret] = useState(false);

  {
    /* Get the current route */
  }
  const pathname = usePathname();

  // Change Nav color on scroll
  const [isScroll, setIsScroll] = useState(false);
  useEffect(() => {
    const changeColor = () => {
      if (window.scrollY >= 90) {
        setIsScroll(true);
      } else {
        setIsScroll(false);
      }
    };
    window.addEventListener("scroll", changeColor);
  }, []);

  return (
    <div>
      <nav
        className={`w-full fixed top-0 left-0 z-50 ${
          navbar ? "bg-white " : "bg-transparent "
        } ${videoBg == false && "bg-white shadow-md text-black"} ${
          isScroll && "bg-white shadow-md"
        } `}
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between  md:block">
              {/* LOGO */}
              <Link href="/">
                <img
                  src="/images/dayimMarketing/DayimSlogan.png"
                  alt=""
                  className="h-[70px] md:h-[100px] "
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    // <Image src="/images/dsa/cross-icon.jpg" width={40} height={40} alt="logo" />
                    <AiOutlineClose size={40} className="text-second" />
                  ) : (
                    // <Image
                    //   src="/images/dsa/hamburgere-icon.jpg"
                    //   width={40}
                    //   height={40}
                    //   alt="logo"
                    //   className="focus:border-none active:border-none"
                    // />
                    <AiOutlineMenu size={40} className="text-second" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center  pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "p-12 md:p-0 block" : "hidden"
              }`}
            >
              <ul className="h-screen md:h-auto items-center justify-center md:flex  pt-2 ">
                {/* <li className={`${navbar ? 'text-black' : isScroll ? 'text-black' : videoBg == false ? 'text-black' : 'text-white' } pb-6  uppercase text-md font-semibold hover:underline ${pathname == "/about" && "underline"} py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent`}>
                  <Link href="/about" onClick={() => setNavbar(!navbar)}>
                    About Us
                  </Link>
                </li> */}
                <li
                  className={`relative ${
                    navbar
                      ? "text-black"
                      : isScroll
                      ? "text-black"
                      : videoBg == false
                      ? "text-black"
                      : "text-white"
                  } pb-6 uppercase text-md font-semibold hover:underline  py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent`}
                >
                  <div
                    onClick={(e) => {
                      setAboutCaret(!aboutCaret);
                      setProjectCaret(false);
                      setSocietiesCaret(false);
                    }}
                    className={`flex items-center justify-center gap-2 cursor-pointer md:text-[10px] lg:text-[15px] whitespace-nowrap`}
                  >
                    <span>About Us</span>
                    <AiFillCaretDown
                      className={`transition duration-150 ${
                        aboutCaret == true ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                  <div
                    className={`
                      ${aboutCaret == true ? "block" : "hidden"}
                       top-10 left-5 bg-white text-black w-[250px] min-h-[50px] text-start flex flex-col rounded-md overflow-hidden md:border md:border-second
                       md:absolute 
                  `}
                  >
                    <Link
                      href="/about"
                      className="text-xs  bg-white w-full h-[50px] flex items-center px-2 hover:bg-second hover:text-white border-b border-gray"
                    >
                      Our Details
                    </Link>
                    <Link
                      href="/team"
                      className="text-xs  bg-white w-full h-[50px] flex items-center px-2 hover:bg-second hover:text-white border-b border-gray"
                    >
                      Our Team
                    </Link>
                    <Link
                      href="/events"
                      className="text-xs  bg-white w-full h-[50px] flex items-center px-2 hover:bg-second hover:text-white border-b border-gray"
                    >
                      Events
                    </Link>
                    <Link
                      href="/contact"
                      className="text-xs  bg-white w-full h-[50px] flex items-center px-2 hover:bg-second hover:text-white border-b border-gray"
                    >
                      Contact Us
                    </Link>
                  </div>
                </li>

                <li
                  className={`relative ${
                    navbar
                      ? "text-black"
                      : isScroll
                      ? "text-black"
                      : videoBg == false
                      ? "text-black"
                      : "text-white"
                  } pb-6 uppercase text-md font-semibold hover:underline ${
                    pathname == "/residences" && "underline"
                  } py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent`}
                >
                  <div
                    onClick={(e) => {
                      setProjectCaret(!projectCaret);
                      setSocietiesCaret(false);
                      setAboutCaret(false);
                    }}
                    className={`flex items-center justify-center gap-2 cursor-pointer md:text-[10px] lg:text-[15px] whitespace-nowrap`}
                  >
                    <span>Projects</span>
                    <AiFillCaretDown
                      className={`transition duration-150 ${
                        projectCaret == true ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                  <div
                    className={`
                      ${projectCaret == true ? "block" : "hidden"}
                       top-10 left-5 bg-white text-black w-[250px] min-h-[50px] text-start flex flex-col rounded-md overflow-hidden md:border md:border-second
                       md:absolute 
                  `}
                  >
                    <Link
                      href="/dayim-signature-apartments"
                      className="text-xs  bg-white w-full h-[50px] flex items-center px-2 hover:bg-second hover:text-white border-b border-gray"
                    >
                      Dayim Signature Apartments
                    </Link>
                    <Link
                      href="/dayim-living"
                      className="text-xs  bg-white w-full h-[50px] flex items-center px-2 hover:bg-second hover:text-white border-b border-gray"
                    >
                      Dayim Living
                    </Link>
                    <Link
                      href="/dayim-zindagi"
                      className="text-xs  bg-white w-full h-[50px] flex items-center px-2 hover:bg-second hover:text-white border-b border-gray"
                    >
                      Dayim Zindagi
                    </Link>
                  </div>
                </li>

                <li
                  className={`relative ${
                    navbar
                      ? "text-black"
                      : isScroll
                      ? "text-black"
                      : videoBg == false
                      ? "text-black"
                      : "text-white"
                  } pb-6 uppercase text-md font-semibold hover:underline ${
                    pathname == "/residences" && "underline"
                  } py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent`}
                >
                  <div
                    onClick={(e) => {
                      setSocietiesCaret(!societiesCaret);
                      setProjectCaret(false);
                      setAboutCaret(false);
                    }}
                    className={`flex items-center justify-center gap-2 cursor-pointer md:text-[10px] lg:text-[15px] whitespace-nowrap`}
                  >
                    <span>Societies</span>
                    <AiFillCaretDown
                      className={`transition duration-150 ${
                        societiesCaret == true ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                  <div
                    className={`
                      ${societiesCaret == true ? "block" : "hidden"}
                       top-10 left-5 bg-white text-black w-[250px] min-h-[50px] text-start flex flex-col rounded-md overflow-hidden md:border md:border-second
                       md:absolute 
                  `}
                  >
                    <Link
                      href="/societies/al-kabir-town"
                      className="text-xs  bg-white w-full h-[50px] flex items-center px-2 hover:bg-second hover:text-white border-b border-gray"
                    >
                      Al-Kabir Developers
                    </Link>
                    <Link
                      href="/societies/bahria-town"
                      className="text-xs  bg-white w-full h-[50px] flex items-center px-2 hover:bg-second hover:text-white border-b border-gray"
                    >
                      Bahria Town
                    </Link>
                    {/* <Link
                      href="/societies/park-view-city"
                      className="text-xs  bg-white w-full h-[50px] flex items-center px-2 hover:bg-second hover:text-white border-b border-gray"
                    >
                      Park View City
                    </Link> */}
                  </div>
                </li>

                <li className={`flex items-center justify-center`}>
                  <Link
                    href="https://wa.me/923085111176"
                    target="_blank"
                    className="bg-second py-2 px-7 rounded-md text-white md:mt-[-15px]"
                  >
                    WhatsApp
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
