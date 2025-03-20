import React from "react";
import Header from "../components/Header";
import { Button } from "../our-projects/page";
import { assets } from "../../../public/assets";
import Image from "next/image";
import { DesciptionCard } from "../components/BrandDesciption";

export default function page() {
  const headerText =
    "A history of pushing boundires and delivering  African hospitality with contemporary style.";
  const details = [
    {
      title: " African hospitality delivered with contemporary style.",
      boldText:
        "Perennia Hospitality is the Consulting division of Perennia Limited, a multi-disciplinary hospitality advisory, development and management Company based in Lagos, Nigeria. ",
      ligihtText:
        "It provides market and financial feasibility, capital raising, brokerage and other advisory services for hotel, retail, residential, leisure, conference and integrated resort developments. Perennia Hospitality is focused on the conceptualisation, economic viability, financing, performance optimization and portfolio management of African hospitality and mixed-use developments.",
      buttonText: "Explore our capabilities",
    },
    { title: "Perennia Hotels & Resorts", 
    boldText:
      "Perennia Hotels & Resorts is the hospitality management subsidiary of Perennia Limited, a multi-disciplinary hospitality advisory, development and management Company based in Lagos, Nigeria.",
    ligihtText:"Perennia Hotels and Resorts focuses on design development, supervision, procurement, logistics and management of hotel, retail, residential, leisure, conference and integrated resort developments. Perennia is focused on the expression of true African hospitality delivered to exacting international standards of service quality and professionalism."
     },
  ];
  return (
    <div className="  ">
      <div className="max-w-[819] mx-auto">
        <Header title={headerText} />
      </div>
      <div className="mx-[80px] ">
        <Image
          src={assets.hero_image}
          alt="about"
          objectFit="cover"
          width={100}
          height={100}
          layout="responsive"
        />
      </div>
      <div>
        <DesciptionCard
          title={details[0].title}
          boldText={details[0].boldText}
          ligihtText={details[0].ligihtText}
          buttonText={details[0].buttonText}
        />
      </div>

      <section className="border-y-1 border-gray-200 py-[60px] space-y-10">
        <div className="flex mx-[80px] gap-[30px] flex-col md:flex-row   ">
          <div className="w-[785px] h-[534px]">
            <img
              src="/assets/about-img1.png"
              alt="perenial"
              className="w-full h-full"
            />
          </div>
          <div className="flex gap-auto w-[365px] h-[534px]  justify-between  flex-col  ">
            <div className=" h-[251px] ">
              <img
                src="/assets/golf.png"
                alt="perenial"
                className="object-cover w-full h-full"
              />
            </div>
            <div className="h-[251px] ">
            <img
              src="/assets/about-img2.png"
              alt="perenial"
              className="object-cover w-full h-full"
            />
            </div>
          </div>
        </div>
        <div>
        <DesciptionCard
          title={details[1].title}
          boldText={details[1].boldText}
          ligihtText={details[1].ligihtText}
          buttonText={details[0].buttonText}
        />
      </div>
      </section>
      <section className="flex flex-col md:flex-row gap-[106px] justify-between mt-15 mb-[120px] w-full px-[80px]">
        <div className="flex flex-col md:gap-5 justify-between items-start py-15 w-full ">
          <h4 className="font-medium text-xl">Our Mission</h4>
          <h2 className="font-bold text-3xl italic">
            “To be the choice Purveyor of African hospitality, providing
            lifelong experiences to the world.”
          </h2>

          <div className="">
            <Image
              src={assets.mission}
              alt="mission"
              objectFit="cover"
              layout="responsive"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="flex flex-col items-end md:flex-col-reverse gap-5 justify-between py-15 w-full ">
          <h4 className="font-medium text-xl">Our Vision</h4>
          <h2 className="font-medium text-3xl italic">
            “To be the choice Purveyor of African hospitality, providing
            lifelong experiences to the world.”
          </h2>
          
          <div className="">
            <Image
              src={assets.vision}
              alt="vision"
              objectFit="cover"
              layout="responsive"
              width={100}
              height={100}
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
