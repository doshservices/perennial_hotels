"use client";

import Image from "next/image";
import Header from "./Header";
import { assets } from "../../../public/assets";

const Hero = () => {
  return (
    <section className="flex flex-col space-y-10  mt-10 ">
      <h2 className="self-center mt-0 text-2xl md:text-5xl  font-medium tracking-tighter text-center text-black leading-[60px] max-w-[763px] ">
      True <span className="text-black">African </span>
      <span className="text-[#12574A]">Hospitality</span>, Delivered with Global
      <span className="text-[#12574A]"> Excellence</span>
    </h2>

      <div className="w-full h-screen relative">
        <Image src={assets.hero_image} alt="Hero Image" objectFit="cover" className="h-screen w-full" />
      </div>
    </section>
  );
};

export default Hero;
