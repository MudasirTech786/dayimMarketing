"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Image from "next/image";   // ✅ import Image from next/image

import { IoIosArrowBack } from "react-icons/io";
import { MdMenu } from "react-icons/md";

import Submenu from "./Submenu";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import useLoaderStore from "@/stores/loaderStore";

function Sidebar() {
  const setLoading = useLoaderStore((state) => state.setLoading);
  const router = useRouter();
  let isTab = useMediaQuery({ query: "(max-width: 821px)" });
  const [isOpen, setIsOpen] = useState(isTab ? false : true);

  const pathname = usePathname();

  const logoutHandler = async () => {
    try {
      setLoading(true);
      let res = await fetch(
        `${process.env.NEXT_PUBLIC_DOMAIN_NAME}/api/logout`,
        {
          headers: { "Content-type": "application/json" },
          method: "POST",
        }
      );
      res = await res.json();

      if (res.success === false) {
        toast.error(res.message);
      } else {
        router.push("/auth/login");
      }
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const Sidebar_animation = isTab
    ? {
        open: { x: 0, width: "16rem", transition: { damping: 40 } },
        closed: { x: -250, width: 0, transition: { damping: 40, delay: 0.15 } },
      }
    : {
        open: { width: "16rem", transition: { damping: 40 } },
        closed: { width: "4rem", transition: { damping: 40 } },
      };

 useEffect(() => {
  if (isTab) {
    setIsOpen(false);
  }
}, [pathname, isTab]);  // ✅ added isTab


  useEffect(() => {
    if (isTab) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  }, [isTab]);

  return (
    <div>
      <div
        onClick={() => setIsOpen(false)}
        className={`lg:hidden fixed inset-0 max-h-screen z-[998] bg-black/50 ${
          isOpen ? "block" : "hidden"
        }`}
      ></div>

      <motion.div
        initial={{ x: isTab ? -250 : 0 }}
        variants={Sidebar_animation}
        animate={isOpen ? "open" : "closed"}
        className="bg-white text-gray-500 shadow-xl z-[999] w-[16rem] max-w-[16rem] h-screen overflow-hidden fixed lg:relative"
      >
        {/* Logo */}
        <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-2">
          <Image
            src="/images/dayimMarketing/dayim_logo_golden.png"
            alt="Dayim Logo"
            width={45}
            height={45}
          />
          <span className="text-xl whitespace-pre">Dayim Signatures</span>
        </div>

        {/* Menus */}
        <div className="flex flex-col h-full">
          <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-3 font-medium overflow-x-hidden scrollbar-thin scrollbar-track-white scrollbar-thumb-slate-100 h-[70%] md:h-[68%]">
            <li>
              <Link
                href="/admin/dm-events"
                className={`link ${
                  pathname == "/admin/allotment" ? "active" : ""
                } `}
              >
                <Image
                  src="/images/admin/icons/sidebar1.svg"
                  alt="DM Events"
                  width={20}
                  height={20}
                />
                {isOpen && <span>DM Events</span>}
              </Link>
            </li>

            <li>
              <Link
                href="/admin/dsa-events"
                className={`link ${
                  pathname == "/admin/allotment" ? "active" : ""
                } `}
              >
                <Image
                  src="/images/admin/icons/sidebar3.svg"
                  alt="DSA Events"
                  width={20}
                  height={20}
                />
                {isOpen && <span>DSA Events</span>}
              </Link>
            </li>

            {(isOpen || isTab) && (
              <li>
                <h3 className="font-bold uppercase pl-3 my-2 whitespace-pre">
                  Account
                </h3>
              </li>
            )}

            <li>
              <button
                onClick={logoutHandler}
                className={`link ${
                  pathname == "/admin/logout" ? "active" : ""
                } `}
              >
                <Image
                  src="/images/admin/icons/sidebar6.svg"
                  alt="Logout"
                  width={20}
                  height={20}
                />
                {isOpen && <span>Logout</span>}
              </button>
            </li>
          </ul>
        </div>

        {/* Control button */}
        <motion.div
          animate={
            isOpen
              ? { x: 0, y: 0, rotate: 0 }
              : { x: -10, y: -200, rotate: 180 }
          }
          transition={{ duration: 0 }}
          onClick={() => setIsOpen(!isOpen)}
          className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer hidden md:block"
        >
          <IoIosArrowBack size={25} />
        </motion.div>
      </motion.div>

      <div className="m-3 lg:hidden" onClick={() => setIsOpen(true)}>
        <MdMenu size={25} />
      </div>
    </div>
  );
}

export default Sidebar;
