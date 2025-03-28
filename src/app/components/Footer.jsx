"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FiChevronDown } from "react-icons/fi";

export default function Footer() {
  const socials = [
    { name: "twitter", link: "https://twitter.com" },
    { name: "linkedin", link: "https://linkedin.com" },
    { name: "facebook", link: "https://facebook.com" },
    {
      name: "instagram",
      link: "https://www.instagram.com/perenniahotels?utm_source=qr&igsh=NGQ4amsyemswMmQw",
    },
  ];
  const links = [
    { name: "About Us", link: "/about-us" },
    { name: "Our Team", link: "/team" },
    { name: "Our Projects", link: "/our-projects" },
    { name: "Work With Us", link: "/contact-us" },
  ];

  const legal = [
    { name: "Privacy Policy", link: "" },
    { name: "Sustainability Policies", link: "" },
    { name: "©2025 Perennia Hotels & Resort", link: "", className: "mt-4" }, // Add margin top
    { name: "All Rights Reserved", link: "", className: "mt-0" }, // Remove gap with previous item
  ];

  return (
    <footer className="w-full bg-[#3D3316] text-white py-10 mt-10">
      <div className="mx-10 md:mx-[110px] gap-4  flex flex-col md:flex-row justify-between">
        <section className="w-full md:w-[32%]  flex flex-col gap-2   ">
          <Image
            src="/assets/footer-logo.png"
            alt="logo"
            width={305}
            height={69}
            className="ml-[-8px]"
          />
          <div className="space-y-4 hidden md:block w-full">
            <p className="text-lg ">Stay up to date</p>
            <input
              type="text"
              placeholder="Enter an email address"
              className="rounded-lg bg-white px-4 py-4 text-black w-full  text-xs "
            />
            <button className="bg-[#3D3316] mt-2 block border border-white text-white rounded-full px-6 py-3 text-sm">
              Sign up →
            </button>
          </div>
        </section>

        <section className=" md:w-[52%] md:mt-2 flex flex-col md:flex-row justify-between  gap-4 md:gap-x-[40px] gap-x-10">
          <FooterComponent data={links} title="Perennia" />
          <FooterComponent data={socials} title="Follow Us" />
          <FooterComponent data={legal} title="Legal " />
        </section>
        <section className="w-full md:hidden  flex flex-col gap-2 mt-10 items-start ">
          <p className="text-lg ">Stay up to date</p>
          <input
            type="text"
            placeholder="Enter an email address"
            className="rounded-lg bg-white px-4 py-4 text-black w-full  text-xs "
          />
          <button className="bg-[#3D3316] w-full mt-2 block border border-white text-white rounded-full px-6 py-3 text-sm">
            Sign up <span className="ml-2">→</span>
          </button>
        </section>
      </div>
    </footer>
  );
}

export function FooterComponent({ data, title }) {
  const [open, setOpen] = useState(false);
  function handleClick() {
    setOpen(!open);
  }
  return (
    <div className="flex flex-col gap-2 justify-start items-start pb-5 md:pb-0 border-b-2 border-white md:border-none capitalize">
      <div className="flex items-center justify-between md:mb-[27px] w-full">
        <p className="text-white font-bold   text-[15px] ">{title}</p>
        <FiChevronDown
          onClick={handleClick}
          className={`text-white text-2xl cursor-pointer md:hidden transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>
      <nav className={`space-y-[20px] transition-all duration-700 transform ${
        open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"} md:block md:opacity-100`}>
        {data.map((item,index)=>{
          return (
            <Link 
              key={index} 
              href={item.link} 
              className={`text-sm block ${item.className || ''}`}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  );
}
