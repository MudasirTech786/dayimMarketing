"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { usePathname } from "next/navigation";
import { AiFillCaretDown, AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

function NavBar({ videoBg }) {
  const [navbar, setNavbar] = useState(false);
  const [projectCaret, setProjectCaret] = useState(false);
  const [societiesCaret, setSocietiesCaret] = useState(false);
  const [aboutCaret, setAboutCaret] = useState(false);

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
                <Image
                  src="/images/dayimMarketing/DayimSlogan.png"
                  alt="Dayim Marketing Logo"
                  width={200}
                  height={100}
                  className="h-[70px] md:h-[100px] w-auto"
                  priority
                />
              </Link>
              {/* HAMBURGER BUTTON FOR MOBILE */}
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none "
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <AiOutlineClose size={40} className="text-second" />
                  ) : (
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
                {/* ... rest of your nav items unchanged ... */}
                <li className="flex items-center justify-center">
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
