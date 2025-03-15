"use client";

import { useState } from "react";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi"; // Icons for mobile menu
import Image from "next/image";
import { assets } from "../../../public/assets";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/capabilities", label: "Our Capabilities" },
  { href: "/projects", label: "Our Projects" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 w-full bg-[#F8F8F8] shadow-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-green-700 cursor-pointer">
          <Image src={assets.logo} alt="Perennia Hotels" width={150} height={50} />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="text-gray-700 hover:text-green-700 font-medium transition-all duration-300">
              {label}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden transition-transform duration-300 text-2xl">
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

       {/* Mobile Dropdown Menu with Smooth Transition */}
       <div
        className={`absolute top-16 left-0 md:hidden w-full bg-white shadow-md transition-all duration-300 ease-in-out ${
          menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"
        }`}
      >
        <div className="flex flex-col py-4 px-6 space-y-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-gray-700  font-medium transition-all duration-300 ease-in-out hover:text-green-700 hover:pl-2"
              onClick={() => setMenuOpen(false)} // Close menu on link click
            >
              {label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
