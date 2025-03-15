"use client";

import Image from "next/image";
import Header from "./Header";
import { assets } from "../../../public/assets";

const Hero = () => {
  return (
    <section className="flex flex-col space-y-10  mt-10 ">
      <Header />

      <div className="w-full h-screen relative">
        <Image src={assets.hero_image} alt="Hero Image" objectFit="cover" className="h-screen w-full" />
      </div>
    </section>
  );
};

export default Hero;
