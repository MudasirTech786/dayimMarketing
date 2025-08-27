"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHome, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

import { usePathname } from "next/navigation";

function NavBar({ videoBg }) {
  const [navbar, setNavbar] = useState(false);

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
    <div className="">
      <nav
        className={`w-full fixed top-0 left-0 z-50 ${
          navbar ? "bg-white " : "bg-transparent "
        } ${videoBg == false && "bg-white shadow-md text-black"} ${
          isScroll && "bg-white shadow-md"
        } `}
      >
        {/* Home icon */}
        <Link
          href={"/"}
          title="Dayim Marketing "
          className="text-second top-[30px] left-[10px] lg:left-[40px] w-[50px] h-[50px] absolute  md:block cursor-pointer"
        >
          <AiFillHome size={30} />
        </Link>
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between  md:block">
              {/* LOGO */}
              <Link href="/dayim-living">
                <img
                  src="/images/dayim_living/logo.png"
                  alt=""
                  className="h-[70px] pl-14 "
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
                <li
                  className={`${
                    navbar
                      ? "text-black"
                      : isScroll
                      ? "text-black"
                      : videoBg == false
                      ? "text-black"
                      : "text-white"
                  } pb-6  uppercase text-md font-semibold hover:underline ${
                    pathname == "/about" && "underline"
                  } py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent`}
                >
                  {/* <Link
                    href="/dayim-signature-apartments/about"
                    onClick={() => setNavbar(!navbar)}
                  >
                    About
                  </Link> */}
                </li>
                <li
                  className={`${
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
                  <Link href="/dayim-living" onClick={() => setNavbar(!navbar)}>
                    Home
                  </Link>
                </li>
                <li
                  className={`${
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
                  <Link
                    href="/dayim-living/residences"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Residences
                  </Link>
                </li>
                <li
                  className={`${
                    navbar
                      ? "text-black"
                      : isScroll
                      ? "text-black"
                      : videoBg == false
                      ? "text-black"
                      : "text-white"
                  } pb-6 uppercase text-md font-semibold hover:underline ${
                    pathname == "/vr" && "underline"
                  } py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent`}
                >
                  <Link
                    href="/dayim-living/vr"
                    onClick={() => setNavbar(!navbar)}
                  >
                    VR
                  </Link>
                </li>

                <li
                  className={`${
                    navbar
                      ? "text-black"
                      : isScroll
                      ? "text-black"
                      : videoBg == false
                      ? "text-black"
                      : "text-white"
                  } pb-6 uppercase text-md font-semibold hover:underline ${
                    pathname == "/contact" && "underline"
                  } py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent`}
                >
                  <Link
                    href="/dayim-living/contact"
                    onClick={() => setNavbar(!navbar)}
                  >
                    Contact Us
                  </Link>
                </li>
                {/* <li className={`${navbar ? 'text-black' : isScroll ? 'text-black' : videoBg == false ? 'text-black' : 'text-white' } pb-6  uppercase text-md font-semibold hover:underline ${pathname == "/about" && "underline"} py-2 md:px-6 text-center border-b-2 md:border-b-0 hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent`}>
                  <Link href="/" onClick={() => setNavbar(!navbar)}>
                    Dayim Marketing
                  </Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
