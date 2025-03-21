"use client";

import Image from "next/image";
import Header from "./Header";
import { assets } from "../../../public/assets";

const Hero = () => {
  return (
    <section className="flex flex-col space-y-10 ">
      <h2 className="self-center text-2xl my-[60px]  md:text-[46px]  font-medium  text-center text-black max-w-[763px] tracking-[-1px] " >
      True <span className="text-black">African </span>
      <span className="text-[#12574A]">Hospitality</span>, Delivered with Global
      <span className="text-[#12574A]"> Excellence</span>
    </h2>

      <div className="w-full h-[729px] ">
        <Image src={assets.hero_image} alt="Hero Image" 
        objectFit="cover" 
         width={100}
        height={100}
        className="h-[729px] w-full" />
      </div>
    </section>
  );
};

export default Hero;
