"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const navItems = [
  { label: "Home", href: "/dayim-zindagi" },
  { label: "Residence", href: "/dayim-zindagi" },
  { label: "Animations", href: "/dayim-zindagi" },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
        isScrolled
          ? "bg-[#353435]/90 shadow-lg border-b border-[#d6ad42]/50"
          : "bg-[#353435]/40"
      }`}
    >
      <nav className="flex items-center justify-between py-4 px-6 lg:px-14 text-white relative">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 z-[1100]">
          <Image
            src="/images/dayimZindagi/zindagi.png"
            alt="Logo"
            width={150}
            height={80}
            className="h-auto w-[130px] lg:w-[130px] hover:scale-105 transition duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-10 font-playfair text-lg tracking-wide">
          {navItems.map(({ label, href }) => (
            <li key={label} className="relative group">
              <Link
                href={href}
                className="transition-colors duration-300 group-hover:text-[#d6ad42]"
              >
                {label}
              </Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#d6ad42] group-hover:w-full transition-all duration-500"></span>
            </li>
          ))}
          <li>
            <Link
              href="/dayim-signature-apartments/contact"
              className="ml-6 inline-block px-6 py-2 rounded-full border-2 border-[#d6ad42] text-[#d6ad42] font-semibold transition-all duration-500 hover:bg-[#d6ad42] hover:text-black shadow-lg hover:shadow-[#d6ad42]/50"
            >
              Contact Us
            </Link>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center z-[1110]">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-4xl text-[#d6ad42] focus:outline-none hover:scale-110 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-3/4 max-w-sm bg-black text-white transform transition-transform duration-500 ease-in-out z-[1100] ${
          menuOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center p-6 border-b border-gray-700">
          <Image src="/images/dayimZindagi/zindagi.png" alt="Logo" width={120} height={60} />
          <FiX
            onClick={() => setMenuOpen(false)}
            className="text-3xl cursor-pointer hover:text-[#d6ad42] transition"
          />
        </div>

        {/* Links */}
        <ul className="flex flex-col mt-10 space-y-6 text-center font-playfair text-xl">
          {navItems.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                onClick={() => setMenuOpen(false)}
                className="block py-2 hover:text-[#d6ad42] transition duration-300"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/dayim-signature-apartments/contact"
              onClick={() => setMenuOpen(false)}
              className="inline-block mt-6 px-6 py-3 rounded-full border-2 border-[#d6ad42] text-[#d6ad42] font-semibold transition-all duration-500 hover:bg-[#d6ad42] hover:text-black shadow-lg hover:shadow-[#d6ad42]/50"
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default NavBar;
